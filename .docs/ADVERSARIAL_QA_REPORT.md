# 🥊 ADVERSARIAL VISUAL QA REPORT — GBI BAITANI LANDING PAGE

**Role:** Verifier B (Adversarial Visual QA Auditor)  
**Testing Harness:** Chrome DevTools Protocol / Headless Chrome (`chrome-devtools-mcp`)  
**Target URL:** `http://localhost:3005`  
**Audit Timestamp:** 2026-10-18T16:11:00+07:00  
**Overall Verdict:** **100% PASS (WITH 1 ADVERSARIAL FIX APPLIED)**

---

## ▍AUDIT RESULTS SUMMARY

| Vector | Surface Tested | Viewport | Finding | Action Taken | Status |
|:---|:---|:---|:---|:---|:---:|
| **A-01** | **Homepage Hero & Navbar Logo** | Desktop (1280x800) | Official GBI Baitani emblem rendered with high-contrast text; Carousel auto-plays and transitions smoothly. | Verified via `.docs/qa_desktop_homepage.png`. | **PASS** |
| **A-02** | **Acara Page Centerpiece Carousel** | Desktop (1280x800) | `AcaraActivitiesCarousel` renders 5 real activity cards with auto-play, pause on hover, next/prev arrow clicks, and thumbnail selector. | Verified via `.docs/qa_desktop_acara_hero.png` and `qa_desktop_acara_carousel_view.png`. | **PASS** |
| **A-03** | **PageHero Photo Label Integrity** | All Pages | **BUG DISCOVERED**: `PageHero.tsx` hardcoded a `"FOTO ILUSTRASI"` badge on all hero images, incorrectly labeling real church documentation photos. | **FIXED**: Added `imageLabel` prop to `PageHeroProps` defaulting to `'DOKUMENTASI RESMI'` and rendered dynamically. | **FIXED & PASS** |
| **A-04** | **PageHero LCP Optimization** | All Pages | Console warning on Largest Contentful Paint for hero images above the fold. | **FIXED**: Added `priority` attribute to `<Image />` in `PageHero.tsx`. | **FIXED & PASS** |
| **A-05** | **Gembala 4 Ministry Focus Cards** | Desktop (1280x800) | All 4 cards render 100% authentic church photos (`pemuridan.jpeg`, `diakonia-sembako.jpeg`, `youth-activity-1.jpeg`, `ibadah-raya.jpeg`). Clean typography, aspect-[16/10] frame. | Verified via `.docs/qa_desktop_gembala_4cards.png`. | **PASS** |
| **A-06** | **Connect Group Page Hero & Pillars** | Desktop (1280x800) | PageHero displays authentic `koi-persekutuan.jpeg` with `"DOKUMENTASI RESMI"` badge. 4 pillars render cleanly. | Verified via `.docs/qa_desktop_koi_hero.png`. | **PASS** |
| **A-07** | **Mobile Responsiveness (390x844)** | Mobile (390x844) | Zero horizontal overflow (`hasHorizontalOverflow: false`). Navbar logo & hamburger button aligned. Carousel cards and date badges stack smoothly. | Verified via `.docs/qa_mobile_acara_top.png`. | **PASS** |
| **A-08** | **Network & Console Error Check** | All 8 Routes | 0 broken image requests (404s). 0 unhandled JavaScript exceptions. 0 React hydration mismatches. | Inspected via `list_console_messages`. | **PASS** |

---

## ▍SCREENSHOT ARTIFACTS CAPTURED
- Desktop Homepage: [`.docs/qa_desktop_homepage.png`](file:///C:/Users/jtoem/Repo/LandingPage_Baitani/.docs/qa_desktop_homepage.png)
- Desktop Acara Hero: [`.docs/qa_desktop_acara_hero.png`](file:///C:/Users/jtoem/Repo/LandingPage_Baitani/.docs/qa_desktop_acara_hero.png)
- Desktop Acara Carousel: [`.docs/qa_desktop_acara_carousel_view.png`](file:///C:/Users/jtoem/Repo/LandingPage_Baitani/.docs/qa_desktop_acara_carousel_view.png)
- Desktop Gembala 4 Cards: [`.docs/qa_desktop_gembala_4cards.png`](file:///C:/Users/jtoem/Repo/LandingPage_Baitani/.docs/qa_desktop_gembala_4cards.png)
- Desktop KOI Hero: [`.docs/qa_desktop_koi_hero.png`](file:///C:/Users/jtoem/Repo/LandingPage_Baitani/.docs/qa_desktop_koi_hero.png)
- Mobile Acara Viewport: [`.docs/qa_mobile_acara_top.png`](file:///C:/Users/jtoem/Repo/LandingPage_Baitani/.docs/qa_mobile_acara_top.png)
