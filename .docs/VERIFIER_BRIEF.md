# Verifier Brief — Independent Factual & Visual Cutover Audit

> Role: Independent Verifier Subagent
> Policy: Read-Only Audit. Do NOT edit code or run git mutations. Prove or disprove claims empirically.
> Baseline Snapshot: `.docs/baseline_snapshot.txt`
> Target Repo: `C:\Users\jtoem\Repo\LandingPage_Baitani`

## Verification Scope & Claims to Prove
1. **Official Logo Integration**:
   - `public/images/logo/logo-baitani.jpeg` exists on disk.
   - `Navbar.tsx` and `Footer.tsx` render the official logo (no placeholder "GBI" text circles).
2. **Header Hero & Acara Centerpiece**:
   - `public/images/acara/acara-hero.jpeg` is mounted in `PageHero` on `/acara`.
   - `AcaraActivitiesCarousel.tsx` is mounted on `/acara` featuring the 5 verified activities:
     - Kebersamaan Jemaat (`acara-hero.jpeg`)
     - Mission Trip Lampung (`mission-trip-1.jpeg`)
     - Mission Trip Purwokerto (`mission-trip-2.jpeg`)
     - Lomba Cerdas Cermat Alkitab (`mission-trip-3.jpeg`)
     - Ibadah Syukur HUT ke-63 (`ibadah-raya.jpeg`)
3. **100% Authentic Photos on `/gembala`**:
   - 4 focus cards in `src/app/gembala/page.tsx` point to local assets:
     - Card 1: `pemuridan.jpeg`
     - Card 2: `diakonia-sembako.jpeg`
     - Card 3: `youth-activity-1.jpeg`
     - Card 4: `ibadah-raya.jpeg`
4. **Hero Slides & Ministries Cutover**:
   - `src/data/heroSlidesData.ts` has 4 slides with local images (Sanctuary, Family, Youth, KOI).
   - `src/data/ministryData.ts` has 5 ministries with local images.
5. **Zero Unsplash Policy**:
   - Grep `images.unsplash.com` across `src/` must return 0 hits.
6. **Privacy Guard**:
   - Scan `src/` for cell phone numbers; verify only public secretariat `081295859490` exists.
7. **Production Build & Lint**:
   - `npm run build` exits 0 (11/11 static pages generated).
   - `npm run lint` exits 0 (0 errors).
8. **Live Route Health**:
   - All routes on `http://localhost:3005` return HTTP 200 OK.
