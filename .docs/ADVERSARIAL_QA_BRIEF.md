# Adversarial Visual QA Brief — GBI Baitani Landing Page

> Role: Verifier B (Adversarial Visual QA Auditor)
> Mode: Automated Browser Testing via Chrome DevTools MCP
> Viewports Tested: Desktop (1280x800) and Mobile (390x844)
> Target Host: http://localhost:3005

## Adversarial Audit Vectors
1. **Network & Asset 404 Hunter**:
   - Check all image requests and page assets across `/`, `/acara`, `/gembala`, `/connect-group`.
   - Any HTTP 404 on images (`/images/...`) is an immediate FAIL.
2. **Console Error Hunter**:
   - Inspect Chrome DevTools console logs for unhandled JavaScript exceptions, React hydration errors, or failed resources.
3. **Desktop Viewport Visual QA (1280x800)**:
   - Homepage (`/`): Verify Hero Carousel (Sanctuary, Family, Youth, KOI) cross-fade, Navbar official logo, ticker marquee, KOI track, location exterior photo, and footer logo.
   - Acara (`/acara`): Verify PageHero facade photo, and interactive `AcaraActivitiesCarousel` controls, active slides, and thumbnails.
   - Gembala (`/gembala`): Verify pastoral portrait face integrity (no chin/head cropping), and all 4 ministry focus cards images.
   - Connect Group (`/connect-group`): Verify KOI hero photo and 8 group cards.
4. **Mobile Viewport Visual QA (390x844)**:
   - Check hamburger menu, mobile navbar logo, hero responsive layout, carousel touch/drag, card stacking, and zero horizontal scroll overflow (`document.documentElement.scrollWidth <= window.innerWidth`).
5. **Interactive Carousel Stress Test**:
   - Simulate rapid slide transitions, thumbnail selection, and pause-on-hover behavior.
