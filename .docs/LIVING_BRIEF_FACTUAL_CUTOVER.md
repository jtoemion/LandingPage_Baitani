# Living Brief — GBI Baitani Factual Cutover & Historical Integration

> Living brief for the implementer and verifier subagents. Append narrowly scoped, evidence-based clauses after failures; do not replace this brief. Coordinator: Antigravity.
> Primary source data:
> 1. Formulir Data Situs GBI Baitani (Signed by Pdt. Kristianto, 13 Oct 2026).
> 2. Naskah Sejarah Resmi GBI Baitani Sukabumi (1 Sept 1963 charter + 28 extracted photos).

## Scope & Target Files
- `src/types/index.ts` — Expand DayOfWeek union; add KOIGroup interface.
- `src/data/scheduleData.ts` — Official 7 active worship/fellowship events.
- `src/data/koiData.ts` — New file: 8 active KOI groups directory.
- `src/data/ministryData.ts` — Official ministry leaders & verified brand names; 100% real church photos.
- `src/data/heroSlidesData.ts` — 4 hero carousel slides with 100% real church photos (Sanctuary, Family, Youth, KOI).
- `src/components/sections/MarqueeTicker.tsx` — Official HUT ke-63 & Vision/Mission ticker.
- `src/components/sections/IdentitySection.tsx` — Official Vision: Gereja Misioner, Mission: Cinta Tuhan, Mengasihi Sesama, Menjangkau Dunia, Slogan: Dari Sukabumi sampai ke ujung bumi.
- `src/components/sections/HomeLocationSchedule.tsx` — Definitive Sunday & Midweek schedules, secretariat hours (Tue-Sun 08:00-16:00), public WA 081295859490.
- `src/components/sections/ConnectGroupSection.tsx` — 100% real church photo scroll track (KOI, Pemuridan, Family, Youth, Retreat, Diakonia).
- `src/components/sections/AcaraActivitiesCarousel.tsx` — Interactive activity & mission trip carousel component for `/acara`.
- `src/components/common/Navbar.tsx` — Official GBI Baitani emblem logo.
- `src/components/common/Footer.tsx` — Official GBI Baitani emblem logo, WA 081295859490, Email baptisbaitani232@gmail.com, FB, YouTube.
- `src/app/tentang-kami/page.tsx` — Official founding charter (1 Sept 1963, 58 charter members), HUT ke-63 (2026), 6 historical phases, historic photo gallery.
- `src/app/connect-group/page.tsx` — 8 KOI groups directory, leader Pdt. Hendi, real KOI hero photo, privacy protection.
- `src/app/persembahan/page.tsx` — Approved giving methods (Cash, Transfer, QRIS), verifier Bp. Yulius (Treasurer).
- `src/app/sorotan/page.tsx` — Historical photo archive section.
- `src/app/gembala/page.tsx` — 100% authentic church photos across all 4 ministry focus cards.
- `src/app/acara/page.tsx` — Official congregation facade photo in PageHero and AcaraActivitiesCarousel centerpiece.

## MUST NOT CHANGE / MUST PRESERVE
1. Zero Git Mutations: Do NOT run `git commit`, `git stash`, `git reset`, `git checkout`, or `git clean`.
2. Privacy Policy Guard: Do NOT leak personal phone numbers of church members or KOI hosts. Only public secretariat WA `081295859490` and email `baptisbaitani232@gmail.com` are allowed.
3. Warm Sanctuary visual theme intact: Keep EB Garamond display, Plus Jakarta Sans body, #fbf9f6 background, #785600 gold accents, zero face cropping.
4. Zero Unsplash Policy: No `images.unsplash.com` references anywhere in `src/`.
5. Production Build: `npm run build` must compile with exit code 0. `npm run lint` must have 0 errors.

## Execution Slices
- Slice 1: Foundation Data (`types`, `scheduleData`, `koiData`, `ministryData`) [COMPLETED]
- Slice 2: Homepage & Shell Components (`MarqueeTicker`, `IdentitySection`, `HomeLocationSchedule`, `Footer`) [COMPLETED]
- Slice 3: Specialized Pages (`tentang-kami`, `connect-group`, `persembahan`, `sorotan`) [COMPLETED]
- Slice 4: Visual Asset Cutover & Zero Unsplash Enforcement (`gembala`, `heroSlidesData`, `ConnectGroupSection`) [COMPLETED]
- Slice 5: Official Logo & Mission Trip Activity Centerpiece (`Navbar`, `Footer`, `acara`, `AcaraActivitiesCarousel`) [COMPLETED]
- Slice 6: Reinforced Delegation Independent Audit & Verification [IN PROGRESS]
