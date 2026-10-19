# 0002: Desain Skema Single Master Workbook dan Autentikasi No. WA + PIN 6-Digit

## Status
Accepted

## Konteks & Keputusan
Setelah memilih Google Sheets sebagai backend utama (ADR-0001), tim memerlukan struktur tabel yang jelas serta mekanisme autentikasi pengguna yang aman namun bebas hambatan bagi jemaat lanjut usia maupun orang tua murid Sekolah Minggu di GBI Baitani Sukabumi.

Kami memutuskan untuk:
1. Menggunakan **Single Master Workbook Multi-Tab** (`GBI_Baitani_Database_Master`) yang membagi domain menjadi 7 tab: `Jemaat`, `Presensi`, `Tamu`, `Persembahan_Kelas`, `Pokok_Doa`, `Roster_Pelayanan`, dan `Users`.
2. Menerapkan autentikasi **No. WhatsApp Terdaftar + PIN 6-Digit** (dengan default PIN format `DDMMYY` dari tanggal lahir jemaat yang tercatat di sensus).

## Pilihan yang Dipertimbangkan
1. **Multi-Workbook**: Menyimpan sensus, presensi, dan doa di spreadsheet terpisah. Ditolak karena memperumit izin akses Google Drive dan menaikkan kuota API request Google Apps Script.
2. **WhatsApp OTP Gateway Berbayar**: Ditolak karena membebani kas gereja dengan biaya per-pesan SMS/WhatsApp gateway.
3. **Email + Password**: Ditolak karena mayoritas jemaat lansia (Senior 1 & Senior 2 berjumlah 47 orang) tidak aktif menggunakan email atau sering melupakan kata sandi kompleks.

## Konsekuensi & Mitigasi
- PIN disimpan dalam format hash SHA-256 pada tab `Users` sehingga staf sekretariat yang membuka spreadsheet tidak dapat melihat PIN asli jemaat.
- Akun orang tua secara otomatis menaungi data anak-anaknya berdasarkan pencocokan kolom `hp_wali`, sehingga orang tua cukup login sekali untuk melihat seluruh anak di Sekolah Minggu.
