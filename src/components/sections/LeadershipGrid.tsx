import React from 'react';
import { leadershipData } from '@/data/leadershipData';
import { Mail } from 'lucide-react';

export default function LeadershipGrid() {
  return (
    <section id="tim" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Pelayan Firman & Penggembalaan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Tim Pastoral Gereja Baitani
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Hamba-hamba Tuhan yang siap melayani, mendoakan, dan berjalan bersama Anda dalam perjalanan iman.
          </p>
        </div>

        {/* 3-Col Desktop Grid / 1-Col Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipData.map((leader) => (
            <div
              key={leader.id}
              className="bg-slate-800/90 rounded-2xl border border-slate-700/70 p-8 flex flex-col items-center text-center hover:border-blue-500/50 hover:shadow-xl transition-all duration-200 group"
            >
              {/* Circular 1:1 Photo (Component 2.7 spec) */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-blue-600/30 group-hover:ring-blue-500 transition-all flex-shrink-0 bg-slate-700">
                <img
                  src={leader.imageUrl}
                  alt={leader.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Title & Name */}
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                {leader.role}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                {leader.name}
              </h3>
              
              {/* Bio */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                {leader.bio}
              </p>

              {/* Social / Contact Icons Row */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700/60 w-full justify-center">
                {leader.socials?.email && (
                  <a
                    href={`mailto:${leader.socials.email}`}
                    className="w-9 h-9 rounded-full bg-slate-700 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                    aria-label={`Kirim email ke ${leader.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
                {leader.socials?.instagram && (
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-700 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                    aria-label={`Instagram ${leader.name}`}
                  >
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
