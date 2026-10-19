# Active Context — Landing Page Baitani

## Current Sprint Goal
Master Deployment, Jemaat Portal Foundation, & Netlify CI/CD Secret Scan Resolution (2026-10-19).

## Status
- **Git Branch Status:** Merged `fitur-kamu` into `master` (commits `2979a4a`, `2d6a1b9`, `9b28103`). Both local `master` and `fitur-kamu` are synced with `origin/master`. Working tree 100% clean.
- **Production Build:** Next.js 16.3.6 (Turbopack) build verified locally and on Netlify CI (19/19 static routes generated, exit code 0).
- **ESLint Audit:** 0 errors, 0 warnings.
- **Netlify CI/CD Fix:** Resolved Netlify Secrets Controller failure (exit code 2) by creating `netlify.toml` with `SECRETS_SCAN_OMIT_KEYS = "NEXT_PUBLIC_PORTAL_API_URL"`.
- **Portal Stealth Mode:** Navigation links to `/portal` are hidden from public visitors in `Navbar.tsx` and `Footer.tsx`. Internal testing remains fully functional at `/portal/login` with 1-tap demo access (Pdt. Kristianto, Ibu Cheren, Ibu Merla, Sekretariat).
- **Factual Cutover:** Canonical email `gerejabaitani232@gmail.com` across all code and guides; Sekolah Minggu (08:30 WIB) added to Sunday schedule; Hero Carousel Slide 1 updated to "RUMAH KASIH BAGI SETIAP JIWA".
- **Branding Assets:** Multi-res RGBA `favicon.ico` and `icon.png` active in tab bar; 100% authentic church photos (0 Unsplash placeholders).
- **Backend & Database:** Google Apps Script backend (`google-apps-script/Code.gs`), master workbook `data/GBI_Baitani_Database_Master.xlsx` (151 jemaat, 127 users, 11 kategorial classes, 7 tabs), and setup guide prepared.
