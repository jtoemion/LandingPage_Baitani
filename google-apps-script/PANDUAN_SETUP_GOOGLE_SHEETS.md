# Panduan Setup Google Sheets Backend — Portal Jemaat GBI Baitani

Dokumen ini berisi panduan langkah demi langkah untuk mengaktifkan Google Sheets sebagai database Portal Jemaat GBI Baitani Sukabumi.

---

### Langkah 1: Buat Spreadsheet Baru di Google Drive Gereja
1. Buka [Google Sheets](https://sheets.new) menggunakan akun Google resmi gereja (`gerejabaitani232@gmail.com`).
2. Beri nama file: **`GBI_Baitani_Database_Master`**.

---

### Langkah 2: Pasang Skrip Backend (Apps Script)
1. Di menu atas spreadsheet, klik **Ekstensi** > **Apps Script** (*Extensions > Apps Script*).
2. Hapus semua kode default di dalam editor `Code.gs`.
3. Salin seluruh isi dari file [`google-apps-script/Code.gs`](file:///C:/Users/jtoem/Repo/LandingPage_Baitani/google-apps-script/Code.gs) dan tempel (*paste*) ke dalam editor.
4. Klik ikon **Simpan** (ikon disket atau `Ctrl + S`).

---

### Langkah 3: Inisialisasi Tab Otomatis
1. Pada menu dropdown fungsi di bagian atas editor (di sebelah tombol *Debug*), pilih fungsi **`initSpreadsheet`**.
2. Klik tombol **Run** (Jalankan).
3. Jika Google meminta izin otorisasi (*Authorization Required*):
   - Klik **Review Permissions**
   - Pilih akun Google gereja
   - Klik **Advanced** (Lanjutan) > Klik **Go to Untitled project (unsafe)**
   - Klik **Allow** (Izinkan).
4. Setelah selesai, periksa kembali spreadsheet Anda. Seluruh 7 tab (`Jemaat`, `Presensi`, `Tamu`, `Persembahan_Kelas`, `Pokok_Doa`, `Roster_Pelayanan`, `Users`) dengan warna emas Warm Sanctuary (`#785600`) telah terbuat secara otomatis!

---

### Langkah 4: Deploy Web App API
1. Di pojok kanan atas editor Apps Script, klik tombol biru **Deploy** > **New deployment**.
2. Klik ikon gerigi di sebelah *Select type*, pilih **Web app**.
3. Isi konfigurasi sebagai berikut:
   - **Description**: `GBI Baitani Jemaat Portal API v1`
   - **Execute as**: `Me (gerejabaitani232@gmail.com)`
   - **Who has access**: `Anyone` *(Diperlukan agar Next.js di Netlify dapat mengirim/menerima request; keamanan dijaga oleh `API_SECRET_KEY` di header)*.
4. Klik **Deploy**.
5. Salin **Web app URL** yang dihasilkan (contoh format: `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Langkah 5: Masukkan ke Konfigurasi Portal Next.js (`.env.local`)
Tambahkan variabel berikut ke file `.env.local` di proyek web:

```env
NEXT_PUBLIC_PORTAL_API_URL="https://script.google.com/macros/s/AKfycb.../exec"
PORTAL_API_SECRET_KEY="BAITANI_PORTAL_SECRET_KEY_2026"
```
