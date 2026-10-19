# 0001: Penggunaan Google Sheets dan Google Apps Script sebagai Data Store Utama

## Status
Accepted

## Konteks & Keputusan
GBI Baitani Sukabumi membutuhkan sistem penyimpanan data untuk Portal Jemaat (presensi kategorial, sensus jemaat, permohonan doa, dan jadwal pelayanan) yang transparan dan mudah diakses oleh pengurus non-teknis (sekretariat, guru sekolah minggu, dan gembala) tanpa biaya langganan server/database.

Kami memutuskan untuk menggunakan **Google Sheets** sebagai *data store* utama dengan **Google Apps Script (GAS)** Web App sebagai jembatan REST API (`doGet` / `doPost`) dari portal Next.js.

## Pilihan yang Dipertimbangkan
1. **Serverless SQLite (Turso / LibSQL)**: Sangat cepat (15ms latency), namun membutuhkan dashboard database terpisah yang asing bagi sekretariat gereja dan mempersulit cetak laporan langsung.
2. **Supabase (PostgreSQL)**: Kuat dan memiliki RLS, tetapi memerlukan akun cloud database eksternal dan tidak langsung terintegrasi dengan alur kerja Google Drive/Excel sekretariat.
3. **Murni Google Sheets + Google Apps Script (Dipilih)**: Menyatu 100% dengan alur kerja harian pengelola gereja yang sudah terbiasa mengelola spreadsheet presensi triwulanan (`.xlsx`).

## Konsekuensi & Mitigasi
- **Latency (~1.5–2 detik per request)**: Dimoderasi pada sisi *frontend* menggunakan *Optimistic UI* dan *local caching* sehingga antarmuka di HP guru/jemaat tetap responsif.
- **Konkurensi & Locking**: Google Apps Script menggunakan `LockService.getScriptLock()` untuk menangani penyimpanan bersamaan secara berurutan dan aman.
- **Keamanan**: Google Apps Script Web App diproteksi menggunakan shared secret token (`API_SECRET_KEY`) dalam header/payload permintaan.
