# Lessons Log: Integrasi Portal Jemaat GBI Baitani

## [2026-10-18 19:46] Initial Lessons & Architecture Safeguards
1. **Model Singkatan & Halusinasi AI Generatif**:
   - Model AI generatif (seperti Google Stitch) cenderung mengasumsikan akronim "GBI" di Indonesia sebagai "Gereja Bethel Indonesia".
   - Mitigasi: Di masa depan, dalam prompt desain harus secara eksplisit ditulis: *"GBI singkatan dari Gereja Baptis Indonesia, BUKAN Bethel. Sinode: Gabungan Gereja Baptis Indonesia (GGBI)"*.
2. **Kesesuaian Alamat Historis**:
   - Stitch mengarang alamat fiktif Sukabumi (`Jl. Pelabuhan II No. 124`). Selalu pasak alamat resmi gereja (`Jl. R.E. Martadinata No. 86`) di dalam aturan sistem.
3. **Viewport Desktop vs Mobile-First**:
   - Desain dashboard kompleks sering kali di-generate oleh AI dalam resolusi desktop (1200px+). Untuk guru Sekolah Minggu dan jemaat di lapangan, kita harus selalu menyediakan mode tampilan mobile-friendly 1-tap yang ringan dan cepat.
