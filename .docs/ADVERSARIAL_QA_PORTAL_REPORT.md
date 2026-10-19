# Adversarial QA Verification Report: Portal Jemaat GBI Baitani

**Target:** Audit Independen Hasil Integrasi Portal Jemaat (`src/app/portal/...`)  
**Auditor:** Independent QA Adversarial Verifier Subagent (`self`, inherit)  
**Contract Reference:** `.docs/VERIFIER_BRIEF_PORTAL.md` & `.docs/LIVING_BRIEF_PORTAL_INTEGRATION.md`  
**Timestamp:** 2026-10-18 20:05 WIB  
**Mode:** READ-ONLY AUDIT (Zero Code Mutations, Zero Git Commands)  
**Overall Verdict:** ⚠️ **CONDITIONAL PASS / PARTIAL (Build PASS, Factual PASS, Security PASS, Endpoints PASS, Lint FAIL due to `.scratch`)**

---

## ▍1. Empirical Verification Verdict Table

| # | Klaim & Kriteria Verifikasi | Perintah Bukti Empiris | Hasil Pengujian Aktual | Status |
|---|-----------------------------|------------------------|-------------------------|:------:|
| 1 | **Production Build & Types**<br>Semua 18 rute terkompilasi, Next.js 16.3.6 Turbopack, exit code 0 | `npm run build` | **Exit Code 0**<br>Durasi: 409ms compile, 1862ms TS, 642ms static generation (18/18 routes). Termasuk 7 rute `/portal/*`. | **PASS** |
| 2 | **Lint Verification**<br>Zero errors pada lint seluruh repositori | `npm run lint` | **Exit Code 1** (1 error, 1 warning)<br>• Error: `.scratch/convert_csv.js:1:12` (`@typescript-eslint/no-require-imports`)<br>• Warning: `src/app/portal/presensi/page.tsx:4:10` (`@typescript-eslint/no-unused-vars`)<br>*(Catatan: `npx eslint src` exit code 0 dengan 0 error, 1 warning)* | **FAIL** |
| 3 | **Factual Integrity — Eliminasi "Bethel"**<br>Nol kemunculan kata "Bethel" di folder `src/` | `Get-ChildItem -Path src -Recurse -File \| Select-String -Pattern "Bethel"` | **0 Match** (Exit Code 0, output kosong) | **PASS** |
| 4 | **Factual Integrity — Eliminasi "Pelabuhan II"**<br>Nol kemunculan kata "Pelabuhan" di folder `src/` | `Get-ChildItem -Path src -Recurse -File \| Select-String -Pattern "Pelabuhan"` | **0 Match** (Exit Code 0, output kosong) | **PASS** |
| 5 | **Identitas Gereja & Alamat Resmi**<br>"Gereja Baptis Indonesia Baitani Sukabumi" & "Jl. R.E. Martadinata No. 86, Cikole, Sukabumi" | `Select-String -Path src/app/portal/PortalShell.tsx -Pattern "Martadinata\|Baptis"` | Tertera jelas pada `PortalShell.tsx` (baris 234 & 239), `layout.tsx`, dan seluruh metadata portal | **PASS** |
| 6 | **Privacy & Public Contacts**<br>Nomor publik tunggal adalah sekretariat `081295859490`. Data jemaat tidak bocor tanpa proteksi. | `Get-ChildItem -Path src/app, src/components -Recurse -File \| Select-String -Pattern "08\d{8,12}"` | Kontak publik landing & portal konsisten `081295859490`. Nomor jemaat di sensus adalah data mock/seed terproteksi dalam drawer dan modal. | **PASS** |
| 7 | **Live Server Endpoint Verification**<br>Seluruh 7 rute portal menghasilkan HTTP 200 OK di dev server | `Invoke-WebRequest -Uri http://localhost:3005/portal/...` | • `/portal` -> 200 OK<br>• `/portal/login` -> 200 OK<br>• `/portal/presensi` -> 200 OK<br>• `/portal/pastoral` -> 200 OK<br>• `/portal/sensus` -> 200 OK<br>• `/portal/doa` -> 200 OK<br>• `/portal/roster` -> 200 OK | **PASS** |
| 8 | **Navbar & Footer Integration**<br>Tautan akses `/portal` tersedia di navigasi utama | `Select-String -Path src/components/common/Navbar.tsx, src/components/common/Footer.tsx -Pattern "portal"` | • `Navbar.tsx`: baris 163 (desktop) & baris 235 (mobile drawer)<br>• `Footer.tsx`: baris 169 ("Portal Jemaat (Intranet)") | **PASS** |

---

## ▍2. Rincian Temuan Audit Empiris

### 1. Build Verification (`npm run build`)
- **Status:** PASS
- **Command:** `npm run build`
- **Exit Code:** `0`
- **Log Evidensi:**
  ```text
  ▲ Next.js 16.3.6 (Turbopack)
  ✓ Compiled successfully in 409ms
  Finished TypeScript in 1862ms ...
  ✓ Generating static pages using 15 workers (18/18) in 642ms

  Route (app)
  ┌ ○ /
  ├ ○ /_not-found
  ├ ○ /acara
  ├ ○ /connect-group
  ├ ○ /gembala
  ├ ○ /koneksi
  ├ ○ /persembahan
  ├ ○ /portal
  ├ ○ /portal/doa
  ├ ○ /portal/login
  ├ ○ /portal/pastoral
  ├ ○ /portal/presensi
  ├ ○ /portal/roster
  ├ ○ /portal/sensus
  ├ ○ /sorotan
  └ ○ /tentang-kami
  ```

### 2. Lint Verification (`npm run lint`)
- **Status:** FAIL (Exit code 1)
- **Log Evidensi:**
  ```text
  > landing-page-baitani@0.1.0 lint
  > eslint

  C:\Users\jtoem\Repo\LandingPage_Baitani\.scratch\convert_csv.js
    1:12  error  A `require()` style import is forbidden  @typescript-eslint/no-require-imports

  C:\Users\jtoem\Repo\LandingPage_Baitani\src\app\portal\presensi\page.tsx
    4:10  warning  'JEMAAT_MASTER' is defined but never used  @typescript-eslint/no-unused-vars

  ✖ 2 problems (1 error, 1 warning)
  ```
- **Akar Masalah:**
  1. `eslint.config.mjs` belum memasukkan `.scratch/**` ke dalam daftar `globalIgnores`. Script `.scratch/convert_csv.js` yang digunakan subagent untuk membuat file `jemaatData.ts` menggunakan sintaks CJS `require('fs')`, sehingga memicu lint error.
  2. `src/app/portal/presensi/page.tsx:4:10` mengimpor `JEMAAT_MASTER` namun tidak digunakan di dalam komponen.

### 3. Factual Integrity & Eliminasi Halusinasi
- **Status:** PASS
- **Bukti Empiris:**
  - Pemindaian menyeluruh `Get-ChildItem -Path src -Recurse -File | Select-String -Pattern "Bethel"` menghasilkan **0 hasil**.
  - Pemindaian menyeluruh `Get-ChildItem -Path src -Recurse -File | Select-String -Pattern "Pelabuhan"` menghasilkan **0 hasil**.
  - Footer portal pada `src/app/portal/PortalShell.tsx`:
    ```tsx
    <span className="font-medium text-[#1f1b16]">
      Gereja Baptis Indonesia Baitani Sukabumi
    </span>
    ...
    <span>Jl. R.E. Martadinata No. 86, Cikole, Sukabumi</span>
    ```
  - Shell portal juga secara akurat mencantumkan afiliasi sinode **Gabungan Gereja Baptis Indonesia (GGBI)**.

### 4. Privacy & Public Contact Audit
- **Status:** PASS
- **Bukti Empiris:**
  - Nomor publik pada landing page utama (`/connect-group`, `/persembahan`, footer, kontak) konsisten menggunakan nomor resmi sekretariat: `081295859490`.
  - Halaman login portal (`/portal/login`) menyediakan tautan bantuan WhatsApp resmi ke `081295859490`.
  - Sensus jemaat (`/portal/sensus`) dan presensi (`/portal/presensi`) menampilkan data simulasi dari mock dataset 151 jemaat tanpa membocorkan nomor pribadi jemaat ke halaman publik luar portal.

### 5. Live Server Endpoint Verification
- **Status:** PASS
- **Target:** `http://localhost:3005`
- **Bukti Empiris:**
  - `http://localhost:3005/portal` -> **200 OK**
  - `http://localhost:3005/portal/login` -> **200 OK**
  - `http://localhost:3005/portal/presensi` -> **200 OK**
  - `http://localhost:3005/portal/pastoral` -> **200 OK**
  - `http://localhost:3005/portal/sensus` -> **200 OK**
  - `http://localhost:3005/portal/doa` -> **200 OK**
  - `http://localhost:3005/portal/roster` -> **200 OK**
  - `http://localhost:3005/` -> **200 OK**
  - `http://localhost:3005/acara` -> **200 OK**

### 6. Navigation Integration
- **Status:** PASS
- **Bukti Empiris:**
  - `Navbar.tsx` (baris 163 & baris 235): Tautan pill "PORTAL JEMAAT" aktif di desktop header dan menu drawer mobile.
  - `Footer.tsx` (baris 169): Tautan "Portal Jemaat (Intranet)" aktif di kolom Warta & Pelayanan.

---

## ▍3. Adversarial Edge Cases & Actionable Recommendations

Meskipun secara fungsional dan visual seluruh 7 modul portal telah terintegrasi dengan sangat baik dan lolos build 100%, auditor menemukan 3 item penting yang memerlukan tindak lanjut oleh lead orchestrator/coder:

### 🚨 Rekomendasi 1: Perbaiki Kegagalan `npm run lint` (Blocker Linting)
1. Buka `eslint.config.mjs` dan tambahkan `".scratch/**"` ke dalam array `globalIgnores`:
   ```javascript
   globalIgnores([
     ".next/**",
     "out/**",
     "build/**",
     "next-env.d.ts",
     ".claude/**",
     ".scratch/**",
   ]),
   ```
2. Di `src/app/portal/presensi/page.tsx`, hapus import yang tidak digunakan:
   ```typescript
   // Hapus baris: import { JEMAAT_MASTER } from '@/data/jemaatData';
   ```

### ⚠️ Rekomendasi 2: Import Webfont "Material Symbols Outlined" (Visual Fallback Bug)
- **Temuan:** Di `src/app/globals.css`, didefinisikan class `.material-symbols-outlined { font-family: 'Material Symbols Outlined', sans-serif; }`, dan ratusan icon (seperti `church`, `groups_3`, `lock`) digunakan.
- **Masalah:** Belum ada tag `<link>` ke Google Fonts atau `@import` untuk `Material Symbols Outlined` di `src/app/layout.tsx` atau `src/app/globals.css`. Pada perangkat klien yang belum terpasang font Material Symbols secara lokal, icon akan tampil sebagai teks mentah (misal teks "church" bukannya icon gereja).
- **Solusi:** Tambahkan tag link stylesheet font di `src/app/layout.tsx` atau `@import` di `src/app/globals.css`:
  ```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  ```

### ℹ️ Rekomendasi 3: Role-Adaptive Dashboard Refinement
- **Temuan:** Saat berganti role ke `Jemaat` (Ibu Merla) di `/portal`, halaman `/portal` saat ini tetap menampilkan seluruh modul eksekutif gembala (rekapitulasi 11 kelas kategorial, KPI gembala, dll), hanya nama salam penyambutannya yang berganti.
- **Saran:** Sesuai living brief section 2.3, di masa mendatang halaman `/portal` dapat dilengkapi percabangan view kondisional: jika `user?.role === 'Jemaat'`, tampilkan ringkasan personal keluarga jemaat & kartu anak di Sekolah Minggu.
