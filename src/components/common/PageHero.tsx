import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  category: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  breadcrumbCurrent: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PageHero({
  category,
  title,
  titleAccent,
  subtitle,
  breadcrumbCurrent,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative pt-16 pb-10 sm:pt-20 sm:pb-12 overflow-hidden bg-[#fbf9f6] text-[#1b1c1a] border-b border-[#e8e2d5] select-none">
      {/* Warm paper radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,86,0,0.07),rgba(251,249,246,0))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: text content */}
          <div>
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-[11px] sm:text-xs font-mono tracking-wider text-[#625e54]">
              <Link href="/" className="hover:text-[#785600] transition-colors">
                BERANDA
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#c5beb3] flex-shrink-0" />
              <span className="text-[#785600] font-semibold uppercase truncate">{breadcrumbCurrent}</span>
            </nav>

            {/* Category Badge Pill */}
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e8e2d5] bg-[#f5f3f0] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#785600] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#785600] uppercase">
                {category}
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-normal uppercase leading-[1.15] mb-4" style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              <span className="block text-[#1b1c1a]">
                {title}
              </span>
              {titleAccent && (
                <span className="block text-[#785600] text-xl sm:text-2xl md:text-3xl mt-1 not-italic font-normal tracking-normal">
                  {titleAccent}
                </span>
              )}
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-sm sm:text-sm md:text-base text-[#625e54] font-light leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Right: editorial photo pane */}
          <div className="relative w-full" style={{ minHeight: '280px' }}>
            <div className="relative w-full overflow-hidden rounded-2xl border border-[#e8e2d5] shadow-md" style={{ minHeight: '280px' }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Warm unobtrusive overlay frame */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(120,86,0,0.10)] pointer-events-none" />
              {/* FOTO ILUSTRASI label */}
              <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[rgba(251,249,246,0.85)] backdrop-blur-sm border border-[#e8e2d5]">
                <span className="text-[9px] sm:text-[10px] font-mono font-semibold tracking-widest text-[#785600] uppercase select-none">
                  FOTO ILUSTRASI
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
