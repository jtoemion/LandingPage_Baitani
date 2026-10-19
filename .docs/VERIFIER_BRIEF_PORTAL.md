# Verifier Brief: QA Adversarial Audit untuk Portal Jemaat GBI Baitani

**Target:** Audit Independen Hasil Pekerjaan Integrasi Portal Jemaat  
**Mode:** READ-ONLY AUDIT (Zero Source Mutations, Zero Git Commands)  
**Contract Reference:** `.docs/LIVING_BRIEF_PORTAL_INTEGRATION.md`  

---

## ▍1. Kriteria Verifikasi Empiris (Pass/Fail)

1. **Build & Type Checking**:
   - Jalankan `npm run build`. Wajib exit code `0`.
   - Pastikan seluruh rute baru terkompilasi:
     - `/portal`
     - `/portal/login`
     - `/portal/presensi`
     - `/portal/pastoral`
     - `/portal/sensus`
     - `/portal/doa`
     - `/portal/roster`
   - Jalankan `npm run lint`. Wajib `0 error`.

2. **Audit Faktual & Eliminasi Halusinasi**:
   - Cari kata `"Bethel"` di seluruh folder `src/`. Wajib **0 match**.
   - Cari kata `"Pelabuhan II"` di seluruh folder `src/`. Wajib **0 match**.
   - Pastikan teks nama gereja adalah **"Gereja Baptis Indonesia"** dan alamat adalah **"Jl. R.E. Martadinata No. 86"**.

3. **Audit Privasi & Keamanan**:
   - Cari nomor telepon jemaat yang ter-hardcode secara tidak aman. Pastikan hanya nomor sekretariat `081295859490` yang tampil sebagai publik atau masking `0812-xxxx-xxxx` pada tampilan umum.

4. **Audit Responsiveness & Link Integrity**:
   - Pastikan tautan ke `/portal` dapat diakses dari Navbar dan Footer utama.
   - Uji respon HTTP pada dev server (`http://localhost:3005/portal`, `/portal/login`, dll) menghasilkan status `200 OK`.

5. **Laporan Verifikasi (Adversarial Report)**:
   - Sajikan tabel verifikasi lengkap: [Klaim, Perintah Bukti Empiris, Hasil, Status PASS/FAIL].
