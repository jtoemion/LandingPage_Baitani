# System Patterns & Redline Rules — Landing Page Baitani

## Styling & Design Tokens
- Never use AI-generic gradients (purple-to-blue / `#7c3aed`, `#6366f1`).
- Strictly adhere to Deep Obsidian (`#050505`) and Sacred Gold (`#D4AF37`).
- Never use untinted pure-black shadows (`rgba(0,0,0,...)`). Use obsidian tint (`rgba(5,5,5,...)`) and gold tint (`rgba(212,175,55,...)`).
- Never use static `min-h-screen` or `100vh`; always use `min-h-dvh` to ensure mobile Safari hygiene.
- Avoid arbitrary Tailwind bracketed pixel numbers (`text-[10px]`, `min-h-[44px]`). Use standard Tailwind scales (`text-xs`, `min-h-11`).
- Avoid repetitive uniformity (vary corner radii between `rounded-lg`, `rounded-2xl`, and `rounded-3xl`; vary padding `p-7`, `p-8`).
