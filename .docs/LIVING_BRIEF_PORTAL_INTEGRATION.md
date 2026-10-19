# Living Brief: Integrasi Portal Jemaat GBI Baitani (Stitch Design to Next.js)

**Timestamp:** 2026-10-18 19:46 WIB  
**Commit Baseline:** `5ed3f962c6abeb61043d2e7b6f2770c261b17f3b`  
**Protocol:** Reinforced Delegation (LMAF v1.0 + Karpathy Discipline)  
**Lead Orchestrator:** Antigravity  
**Subagent:** Native Implementation Coder Subagent (`self`, inherit)  
**Verifier:** Native QA Adversarial Subagent (`self`, inherit)  

---

## ▍1. Tujuan Utama & Lingkup Tugas
Mengintegrasikan seluruh hasil desain Google Stitch dari `.scratch/stitch_portal/stitch_portal_jemaat_gbi_baitani/` ke dalam Next.js App Router pada rute `src/app/portal/...`, dengan menerapkan perbaikan faktual wajib (koreksi nama gereja & alamat) dan arsitektur data adaptif.

---

## ▍2. Rute & Komponen yang Harus Diimplementasikan
1. `src/app/portal/layout.tsx`:
   - Shell bersama Portal Baitani (navigasi atas, header seragam, indikator role, tema Warm Sanctuary).
2. `src/app/portal/login/page.tsx`:
   - Mengadopsi desain Stitch `login_portal_penggembalaan_warga`.
   - Input No. WhatsApp + PIN 6-digit.
   - Tombol cepat simulasi role (Pdt. Kristianto, Ibu Cheren, Ibu Merla, Sekretariat Gereja).
   - Tombol bantuan WhatsApp Sekretariat (`081295859490`).
3. `src/app/portal/page.tsx` (Dasbor Adaptif):
   - Jika role = Gembala/Sekretariat: Tampilan eksekutif dari Stitch `dasbor_eksekutif_penggembalaan_sekretariat`.
   - Jika role = Jemaat/Keluarga: Tampilan mobile ramah jemaat (profil anak di SM, info ibadah, aksi cepat).
4. `src/app/portal/presensi/page.tsx`:
   - Mengadopsi Stitch `rekap_presensi_kolekte_11_kelas_kategorial` untuk desktop.
   - Ditambah mode mobile 1-tap checklist untuk guru kelas saat hari Minggu.
5. `src/app/portal/pastoral/page.tsx`:
   - Mengadopsi Stitch `pastoral_care_ulang_tahun_jemaat` (radar ulang tahun, peringatan jemaat absen ≥3 pekan, jurnal konseling).
6. `src/app/portal/sensus/page.tsx`:
   - Mengadopsi Stitch `master_database_sensus_jemaat_keluarga` (tabel 151 jemaat, kartu keluarga, filter kategorial).
7. `src/app/portal/doa/page.tsx`:
   - Mengadopsi Stitch `pusat_pokok_doa_syafaat_konseling` (pemisahan Jam Doa vs Rahasia Gembala).
8. `src/app/portal/roster/page.tsx`:
   - Mengadopsi Stitch `roster_pelayanan_ibadah_raya` (jadwal pelayan, konfirmasi kehadiran, lagu pujian).
9. Navigasi Landing Page:
   - Tambahkan tautan masuk "Portal Jemaat" pada Navbar utama (`src/components/common/Navbar.tsx`) dan Footer (`src/components/common/Footer.tsx`).

---

## ▍3. Aturan Faktual & Keamanan Mutlak (NON-NEGOTIABLES)
- 🚨 **KOREKSI NAMA GEREJA**: Ganti seluruh teks `"Gereja Bethel Indonesia"` menjadi **"Gereja Baptis Indonesia Baitani Sukabumi"**.
- 🚨 **KOREKSI ALAMAT GEREJA**: Ganti seluruh alamat `"Jl. Pelabuhan II No. 124"` menjadi **"Jl. R.E. Martadinata No. 86, Cikole, Sukabumi"**.
- 🚨 **ZERO GIT MUTATION**: Subagent dilarang keras menjalankan `git commit`, `git reset`, `git checkout`, `git stash`, atau `git clean`.
- 🚨 **BUILD INTEGRITY**: Di akhir pekerjaan, `npm run build` wajib menghasilkan exit code 0 tanpa error TypeScript atau lint.
