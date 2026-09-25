import React from 'react';
import { ministryData } from '@/data/ministryData';
import { Users, Clock, ArrowRight } from 'lucide-react';

export default function MinistryShowcase() {
  return (
    <section id="pelayanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Komunitas & Tubuh Kristus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Temukan Komunitas yang Sesuai Untuk Anda
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Gereja bukan hanya tentang gedung, melainkan keluarga rohani yang saling menopang dalam setiap tahapan kehidupan.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministryData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden group"
            >
              {/* Photo 16:9 Aspect */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[11px] font-semibold">
                  {item.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-blue-600 font-medium italic mb-3">
                    &ldquo;{item.tagline}&rdquo;
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span className="truncate">{item.meetingTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span className="truncate">Koordinator: {item.leader}</span>
                  </div>
                </div>

                <div className="mt-5 pt-2">
                  <a
                    href="#koneksi"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-slate-200 hover:border-blue-600 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-semibold transition-all min-h-[44px]"
                  >
                    <span>Gabung Komunitas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
