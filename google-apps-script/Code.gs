/**
 * ============================================================================
 * GBI BAITANI SUKABUMI — JEMAAT PORTAL BACKEND (GOOGLE APPS SCRIPT)
 * File: Code.gs
 * Versi: 1.0.0
 * 
 * Deskripsi:
 * REST API untuk Portal Jemaat GBI Baitani yang terhubung ke Google Sheets.
 * Mendukung autentikasi No. WA + PIN, Sensus Jemaat, Presensi Kategorial,
 * Tamu Baru, Persembahan Kelas, Pokok Doa, dan Roster Pelayanan.
 * ============================================================================
 */

// Kunci Rahasia untuk memvalidasi request dari Next.js Portal
// Ganti dengan string acak aman atau set di Project Settings > Script Properties
var API_SECRET = 'BAITANI_PORTAL_SECRET_KEY_2026';

var TAB_NAMES = {
  JEMAAT: 'Jemaat',
  PRESENSI: 'Presensi',
  TAMU: 'Tamu',
  PERSEMBAHAN: 'Persembahan_Kelas',
  DOA: 'Pokok_Doa',
  ROSTER: 'Roster_Pelayanan',
  USERS: 'Users'
};

/**
 * Endpoint GET
 * Format: ?action=...&apiKey=...&param=...
 */
function doGet(e) {
  try {
    var p = e.parameter || {};
    var apiKey = p.apiKey;
    
    // Validasi API Secret
    if (apiKey !== API_SECRET && p.action !== 'ping') {
      return jsonResponse({ success: false, error: 'Unauthorized: Invalid API Key' }, 401);
    }
    
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var action = p.action;

    switch (action) {
      case 'ping':
        return jsonResponse({ success: true, message: 'GBI Baitani Portal API Online', timestamp: new Date().toISOString() });

      case 'getJemaat':
        return jsonResponse({ success: true, data: fetchJemaat(ss, p.kelas) });

      case 'getPresensi':
        return jsonResponse({ success: true, data: fetchPresensi(ss, p.tanggal, p.kelas) });

      case 'getTamu':
        return jsonResponse({ success: true, data: fetchTamu(ss, p.kelas, p.limit) });

      case 'getPersembahan':
        return jsonResponse({ success: true, data: fetchPersembahan(ss, p.tanggal, p.kelas) });

      case 'getPokokDoa':
        return jsonResponse({ success: true, data: fetchPokokDoa(ss, p.role === 'Gembala') });

      case 'getRoster':
        return jsonResponse({ success: true, data: fetchRoster(ss, p.tanggal) });

      case 'getBirthdays':
        return jsonResponse({ success: true, data: fetchUpcomingBirthdays(ss, parseInt(p.days || '30')) });

      case 'getSummaryStats':
        return jsonResponse({ success: true, data: fetchSummaryStats(ss) });

      default:
        return jsonResponse({ success: false, error: 'Unknown GET action: ' + action }, 400);
    }
  } catch (err) {
    return jsonResponse({ success: false, error: err.toString() }, 500);
  }
}

/**
 * Endpoint POST
 * Body payload berupa JSON: { apiKey: '...', action: '...', data: { ... } }
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // Tunggu giliran lock hingga 30 detik untuk mencegah race-condition
    lock.waitLock(30000);
    
    var body = {};
    if (e.postData && e.postData.contents) {
      body = JSON.parse(e.postData.contents);
    }
    
    if (body.apiKey !== API_SECRET) {
      return jsonResponse({ success: false, error: 'Unauthorized: Invalid API Key' }, 401);
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var action = body.action;
    var data = body.data || {};

    switch (action) {
      case 'authLogin':
        return jsonResponse(handleAuthLogin(ss, data.no_whatsapp, data.pin));

      case 'updatePin':
        return jsonResponse(handleUpdatePin(ss, data.no_whatsapp, data.old_pin, data.new_pin));

      case 'submitPresensi':
        return jsonResponse(handleSubmitPresensi(ss, data));

      case 'submitTamu':
        return jsonResponse(handleSubmitTamu(ss, data));

      case 'submitPersembahan':
        return jsonResponse(handleSubmitPersembahan(ss, data));

      case 'submitDoa':
        return jsonResponse(handleSubmitDoa(ss, data));

      case 'confirmRoster':
        return jsonResponse(handleConfirmRoster(ss, data.roster_id, data.status_konfirmasi));

      default:
        return jsonResponse({ success: false, error: 'Unknown POST action: ' + action }, 400);
    }
  } catch (err) {
    return jsonResponse({ success: false, error: err.toString() }, 500);
  } finally {
    lock.releaseLock();
  }
}

// ============================================================================
// DATA FETCHERS (GET)
// ============================================================================

function fetchJemaat(ss, filterKelas) {
  var sheet = ss.getSheetByName(TAB_NAMES.JEMAAT);
  if (!sheet) return [];
  var rows = getRowsWithHeaders(sheet);
  if (!filterKelas) return rows;
  return rows.filter(function(r) {
    return String(r.kelas_kategorial).toLowerCase().indexOf(filterKelas.toLowerCase()) !== -1;
  });
}

function fetchPresensi(ss, tanggal, filterKelas) {
  var sheet = ss.getSheetByName(TAB_NAMES.PRESENSI);
  if (!sheet) return [];
  var rows = getRowsWithHeaders(sheet);
  return rows.filter(function(r) {
    var matchTanggal = !tanggal || String(r.tanggal_ibadah) === String(tanggal);
    var matchKelas = !filterKelas || String(r.kelas_kategorial).toLowerCase() === filterKelas.toLowerCase();
    return matchTanggal && matchKelas;
  });
}

function fetchTamu(ss, filterKelas, limit) {
  var sheet = ss.getSheetByName(TAB_NAMES.TAMU);
  if (!sheet) return [];
  var rows = getRowsWithHeaders(sheet);
  if (filterKelas) {
    rows = rows.filter(function(r) {
      return String(r.kelas_kategorial).toLowerCase() === filterKelas.toLowerCase();
    });
  }
  var n = parseInt(limit || '50');
  return rows.slice(-n).reverse();
}

function fetchPersembahan(ss, tanggal, filterKelas) {
  var sheet = ss.getSheetByName(TAB_NAMES.PERSEMBAHAN);
  if (!sheet) return [];
  var rows = getRowsWithHeaders(sheet);
  return rows.filter(function(r) {
    var matchTanggal = !tanggal || String(r.tanggal_ibadah) === String(tanggal);
    var matchKelas = !filterKelas || String(r.kelas_kategorial).toLowerCase() === filterKelas.toLowerCase();
    return matchTanggal && matchKelas;
  });
}

function fetchPokokDoa(ss, isGembala) {
  var sheet = ss.getSheetByName(TAB_NAMES.DOA);
  if (!sheet) return [];
  var rows = getRowsWithHeaders(sheet);
  if (isGembala) return rows.reverse();
  // Jemaat umum hanya melihat doa berkategori 'Umum'
  return rows.filter(function(r) {
    return String(r.kategori_doa).toLowerCase() === 'umum';
  }).reverse();
}

function fetchRoster(ss, tanggal) {
  var sheet = ss.getSheetByName(TAB_NAMES.ROSTER);
  if (!sheet) return [];
  var rows = getRowsWithHeaders(sheet);
  if (!tanggal) return rows;
  return rows.filter(function(r) {
    return String(r.tanggal_ibadah) === String(tanggal);
  });
}

function fetchUpcomingBirthdays(ss, daysAhead) {
  var jemaatList = fetchJemaat(ss);
  var today = new Date();
  var results = [];

  jemaatList.forEach(function(j) {
    if (!j.tanggal_lahir) return;
    var bDate = new Date(j.tanggal_lahir);
    if (isNaN(bDate.getTime())) return;

    var bThisYear = new Date(today.getFullYear(), bDate.getMonth(), bDate.getDate());
    var diffTime = bThisYear.getTime() - today.getTime();
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 0 && diffDays <= daysAhead) {
      results.push({
        nama_lengkap: j.nama_lengkap,
        kelas_kategorial: j.kelas_kategorial,
        tanggal_lahir: Utilities.formatDate(bDate, Session.getScriptTimeZone(), 'dd MMMM yyyy'),
        ulang_tahun_ke: today.getFullYear() - bDate.getFullYear(),
        sisa_hari: diffDays,
        no_hp: j.no_hp || j.hp_wali
      });
    }
  });

  results.sort(function(a, b) { return a.sisa_hari - b.sisa_hari; });
  return results;
}

function fetchSummaryStats(ss) {
  var jemaat = fetchJemaat(ss);
  var kategorialCounts = {};
  jemaat.forEach(function(j) {
    var k = j.kelas_kategorial || 'Umum';
    kategorialCounts[k] = (kategorialCounts[k] || 0) + 1;
  });

  return {
    total_jemaat_terdata: jemaat.length,
    kategorial_breakdown: kategorialCounts,
    last_updated: new Date().toISOString()
  };
}

// ============================================================================
// DATA HANDLERS (POST)
// ============================================================================

function handleAuthLogin(ss, noWhatsapp, pin) {
  var cleanWa = normalizePhone(noWhatsapp);
  var usersSheet = ss.getSheetByName(TAB_NAMES.USERS);
  var jemaatSheet = ss.getSheetByName(TAB_NAMES.JEMAAT);
  if (!usersSheet || !jemaatSheet) {
    return { success: false, error: 'Database sheet not initialized' };
  }

  var users = getRowsWithHeaders(usersSheet);
  var user = users.find(function(u) {
    return normalizePhone(u.no_whatsapp) === cleanWa;
  });

  // Jika belum ada di Users, cari di tab Jemaat (baik no_hp jemaat atau hp_wali)
  if (!user) {
    var jemaatList = getRowsWithHeaders(jemaatSheet);
    var matchedJemaat = jemaatList.find(function(j) {
      return normalizePhone(j.no_hp) === cleanWa || normalizePhone(j.hp_wali) === cleanWa;
    });

    if (!matchedJemaat) {
      return { success: false, error: 'Nomor WhatsApp belum terdaftar di sistem gereja. Silakan hubungi Sekretariat.' };
    }

    // Buat akun baru otomatis dengan PIN default dari tanggal lahir (DDMMYY)
    var defaultPin = formatPinFromDob(matchedJemaat.tanggal_lahir);
    var pinHash = hashString(defaultPin);
    var newUserId = 'USR-' + Utilities.getUuid().substring(0, 8);
    var userRole = determineRole(matchedJemaat);

    usersSheet.appendRow([
      newUserId,
      cleanWa,
      pinHash,
      matchedJemaat.nama_lengkap,
      userRole,
      matchedJemaat.kelas_kategorial,
      'TRUE',
      new Date().toISOString()
    ]);

    user = {
      id: newUserId,
      no_whatsapp: cleanWa,
      pin_hash: pinHash,
      nama: matchedJemaat.nama_lengkap,
      role: userRole,
      kelas_asuhan: matchedJemaat.kelas_kategorial
    };
  }

  // Verifikasi PIN (bandingkan hash atau plaintext jika fallback)
  var inputHash = hashString(pin);
  if (user.pin_hash !== inputHash && user.pin_hash !== pin) {
    return { success: false, error: 'PIN yang dimasukkan salah.' };
  }

  // Ambil profil keluarga (anak-anak atau anggota terhubung nomor WA ini)
  var allJemaat = getRowsWithHeaders(jemaatSheet);
  var familyMembers = allJemaat.filter(function(j) {
    return normalizePhone(j.no_hp) === cleanWa || normalizePhone(j.hp_wali) === cleanWa;
  });

  return {
    success: true,
    user: {
      id: user.id,
      nama: user.nama,
      no_whatsapp: user.no_whatsapp,
      role: user.role,
      kelas_asuhan: user.kelas_asuhan
    },
    familyMembers: familyMembers
  };
}

function handleUpdatePin(ss, noWhatsapp, oldPin, newPin) {
  var cleanWa = normalizePhone(noWhatsapp);
  var sheet = ss.getSheetByName(TAB_NAMES.USERS);
  if (!sheet) return { success: false, error: 'Users sheet not found' };

  var rows = sheet.getDataRange().getValues();
  var header = rows[0];
  var waIdx = header.indexOf('no_whatsapp');
  var pinIdx = header.indexOf('pin_hash');

  for (var i = 1; i < rows.length; i++) {
    if (normalizePhone(rows[i][waIdx]) === cleanWa) {
      var currentHash = rows[i][pinIdx];
      if (currentHash !== hashString(oldPin) && currentHash !== oldPin) {
        return { success: false, error: 'PIN lama tidak cocok' };
      }
      sheet.getRange(i + 1, pinIdx + 1).setValue(hashString(newPin));
      return { success: true, message: 'PIN berhasil diperbarui' };
    }
  }

  return { success: false, error: 'Pengguna tidak ditemukan' };
}

function handleSubmitPresensi(ss, data) {
  // data: { tanggal_ibadah, kelas_kategorial, guru_pencatat, records: [ { jemaat_id, nama_jemaat, status_kehadiran } ] }
  var sheet = ss.getSheetByName(TAB_NAMES.PRESENSI);
  if (!sheet) return { success: false, error: 'Presensi sheet not found' };

  var records = data.records || [];
  var timestamp = new Date().toISOString();
  var rowsToAppend = [];

  records.forEach(function(rec) {
    var id = 'PRS-' + Utilities.getUuid().substring(0, 8);
    rowsToAppend.push([
      id,
      data.tanggal_ibadah,
      data.kelas_kategorial,
      rec.jemaat_id,
      rec.nama_jemaat,
      rec.status_kehadiran,
      data.guru_pencatat,
      timestamp
    ]);
  });

  if (rowsToAppend.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, rowsToAppend.length, rowsToAppend[0].length).setValues(rowsToAppend);
  }

  return { success: true, insertedCount: rowsToAppend.length, message: 'Presensi kelas berhasil disimpan' };
}

function handleSubmitTamu(ss, data) {
  var sheet = ss.getSheetByName(TAB_NAMES.TAMU);
  if (!sheet) return { success: false, error: 'Tamu sheet not found' };

  var id = 'TMU-' + Utilities.getUuid().substring(0, 8);
  sheet.appendRow([
    id,
    data.tanggal_ibadah,
    data.kelas_kategorial,
    data.nama_tamu,
    data.no_hp || '',
    data.alamat || '',
    data.diantar_oleh || '',
    data.guru_pencatat || '',
    'Menunggu Follow-up',
    data.catatan || ''
  ]);

  return { success: true, id: id, message: 'Data tamu baru berhasil dicatat' };
}

function handleSubmitPersembahan(ss, data) {
  var sheet = ss.getSheetByName(TAB_NAMES.PERSEMBAHAN);
  if (!sheet) return { success: false, error: 'Persembahan sheet not found' };

  var id = 'PSB-' + Utilities.getUuid().substring(0, 8);
  sheet.appendRow([
    id,
    data.tanggal_ibadah,
    data.kelas_kategorial,
    Number(data.nominal_rupiah || 0),
    data.guru_pencatat,
    'Sudah Disetor',
    new Date().toISOString()
  ]);

  return { success: true, id: id, message: 'Persembahan kelas berhasil dicatat' };
}

function handleSubmitDoa(ss, data) {
  var sheet = ss.getSheetByName(TAB_NAMES.DOA);
  if (!sheet) return { success: false, error: 'Pokok Doa sheet not found' };

  var id = 'DOA-' + Utilities.getUuid().substring(0, 8);
  sheet.appendRow([
    id,
    new Date().toISOString(),
    data.nama_pemohon,
    data.no_hp || '',
    data.kategori_doa || 'Umum',
    data.isi_doa,
    'Dalam Doa',
    data.catatan_pastoral || ''
  ]);

  return { success: true, id: id, message: 'Pokok doa berhasil diterima' };
}

function handleConfirmRoster(ss, rosterId, status) {
  var sheet = ss.getSheetByName(TAB_NAMES.ROSTER);
  if (!sheet) return { success: false, error: 'Roster sheet not found' };

  var rows = sheet.getDataRange().getValues();
  var idIdx = rows[0].indexOf('id');
  var statusIdx = rows[0].indexOf('status_konfirmasi');
  var timeIdx = rows[0].indexOf('waktu_konfirmasi');

  for (var i = 1; i < rows.length; i++) {
    if (rows[i][idIdx] === rosterId) {
      sheet.getRange(i + 1, statusIdx + 1).setValue(status);
      sheet.getRange(i + 1, timeIdx + 1).setValue(new Date().toISOString());
      return { success: true, message: 'Konfirmasi tugas berhasil disimpan: ' + status };
    }
  }

  return { success: false, error: 'Jadwal roster tidak ditemukan' };
}

// ============================================================================
// HELPER FUNCTIONS & SPREADSHEET INITIALIZATION
// ============================================================================

/**
 * Jalankan fungsi ini SEKALI di script editor untuk membuat semua tab & header otomatis
 */
function initSpreadsheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var schemas = [
    {
      name: TAB_NAMES.JEMAAT,
      headers: ['id', 'nama_lengkap', 'nama_panggilan', 'tanggal_lahir', 'jenis_kelamin', 'kelas_kategorial', 'no_hp', 'nama_wali', 'hp_wali', 'alamat', 'status_keanggotaan', 'is_baptis', 'catatan_pastoral']
    },
    {
      name: TAB_NAMES.PRESENSI,
      headers: ['id', 'tanggal_ibadah', 'kelas_kategorial', 'jemaat_id', 'nama_jemaat', 'status_kehadiran', 'guru_pencatat', 'waktu_submit']
    },
    {
      name: TAB_NAMES.TAMU,
      headers: ['id', 'tanggal_ibadah', 'kelas_kategorial', 'nama_tamu', 'no_hp', 'alamat', 'diantar_oleh', 'guru_pencatat', 'status_followup', 'catatan_pastoral']
    },
    {
      name: TAB_NAMES.PERSEMBAHAN,
      headers: ['id', 'tanggal_ibadah', 'kelas_kategorial', 'nominal_rupiah', 'guru_pencatat', 'status_setor_bendahara', 'waktu_submit']
    },
    {
      name: TAB_NAMES.DOA,
      headers: ['id', 'tanggal_submit', 'nama_pemohon', 'no_hp', 'kategori_doa', 'isi_doa', 'status_terjawab', 'catatan_pastoral']
    },
    {
      name: TAB_NAMES.ROSTER,
      headers: ['id', 'tanggal_ibadah', 'sesi_ibadah', 'posisi_pelayanan', 'nama_pelayan', 'no_hp', 'status_konfirmasi', 'waktu_konfirmasi']
    },
    {
      name: TAB_NAMES.USERS,
      headers: ['id', 'no_whatsapp', 'pin_hash', 'nama', 'role', 'kelas_asuhan', 'is_active', 'last_login']
    }
  ];

  schemas.forEach(function(schema) {
    var sheet = ss.getSheetByName(schema.name);
    if (!sheet) {
      sheet = ss.insertSheet(schema.name);
    }
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(schema.headers);
      var headerRange = sheet.getRange(1, 1, 1, schema.headers.length);
      headerRange.setBackground('#785600').setFontColor('#ffffff').setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
  });

  Logger.log('Inisialisasi Spreadsheet GBI Baitani Berhasil!');
}

function getRowsWithHeaders(sheet) {
  var values = sheet.getDataRange().getValues();
  if (values.length <= 1) return [];
  var headers = values[0];
  var result = [];
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var obj = {};
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = row[j];
    }
    result.push(obj);
  }
  return result;
}

function normalizePhone(phone) {
  if (!phone) return '';
  var clean = String(phone).replace(/[^0-9]/g, '');
  if (clean.indexOf('62') === 0) return '0' + clean.substring(2);
  return clean;
}

function formatPinFromDob(dob) {
  if (!dob) return '123456';
  var d = new Date(dob);
  if (isNaN(d.getTime())) return '123456';
  var day = ('0' + d.getDate()).slice(-2);
  var month = ('0' + (d.getMonth() + 1)).slice(-2);
  var year = String(d.getFullYear()).slice(-2);
  return day + month + year;
}

function hashString(str) {
  var rawHash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(str), Utilities.Charset.UTF_8);
  var txtHash = '';
  for (var i = 0; i < rawHash.length; i++) {
    var byteVal = rawHash[i];
    if (byteVal < 0) byteVal += 256;
    var byteHex = byteVal.toString(16);
    if (byteHex.length == 1) byteHex = '0' + byteHex;
    txtHash += byteHex;
  }
  return txtHash;
}

function determineRole(jemaat) {
  var nama = String(jemaat.nama_lengkap).toLowerCase();
  if (nama.indexOf('pdt.') !== -1 || nama.indexOf('pendeta') !== -1) {
    return 'Gembala';
  }
  if (nama.indexOf('yessy') !== -1 || nama.indexOf('sekretaris') !== -1) {
    return 'Sekretariat';
  }
  return 'Jemaat';
}

function jsonResponse(data, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
