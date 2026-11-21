import { useState } from 'react';

export function HeroArchPlate() {
  const [plateMode, setPlateMode] = useState<'monograph' | 'dossier'>('monograph');

  return (
    <div className="relative w-full max-w-[360px] sm:max-w-[390px] lg:max-w-[410px] mx-auto">
      {/* Outer Architectural Hairline Frame */}
      <div
        className="absolute -inset-3 border border-[#181818]/[0.1] pointer-events-none"
        style={{ borderRadius: '0px 0px 220px 220px' }}
      />

      {/* Main Arch Vessel */}
      <div
        className="relative overflow-hidden bg-[#181818] text-[#fbf9f4] border border-[#181818] h-[460px] sm:h-[500px] lg:h-[530px] flex flex-col justify-between p-7 sm:p-8"
        style={{ borderRadius: '0px 0px 210px 210px' }}
      >
        {/* Subtle Architectural Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#fbf9f4 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        {/* Top Plate Header + Interactive Toggle */}
        <div className="relative z-10 flex items-center justify-between gap-2 border-b border-[#fbf9f4]/[0.16] pb-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#c8c6c5] tabular-nums">
            Plate 01 · 2026
          </span>
          <div className="inline-flex items-center p-0.5 rounded-full bg-[#fbf9f4]/[0.1]">
            <button
              type="button"
              onClick={() => setPlateMode('monograph')}
              className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors cursor-pointer ${
                plateMode === 'monograph'
                  ? 'bg-[#fbf9f4] text-[#181818]'
                  : 'text-[#c8c6c5] hover:text-[#fbf9f4]'
              }`}
            >
              Portrait
            </button>
            <button
              type="button"
              onClick={() => setPlateMode('dossier')}
              className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors cursor-pointer ${
                plateMode === 'dossier'
                  ? 'bg-[#fbf9f4] text-[#181818]'
                  : 'text-[#c8c6c5] hover:text-[#fbf9f4]'
              }`}
            >
              Dossier
            </button>
          </div>
        </div>

        {/* Centerpiece Content */}
        {plateMode === 'monograph' ? (
          <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-2">
            {/* Architectural Geometric Portrait / Monogram Crest */}
            <div className="relative w-48 h-56 sm:w-52 sm:h-60 flex items-center justify-center mb-5">
              <svg
                viewBox="0 0 220 260"
                className="w-full h-full"
                role="img"
                aria-label="Architectural monogram silhouette for Anugerah Wiratama Nuno"
              >
                {/* Structural blueprint crosshairs */}
                <line x1="110" y1="8" x2="110" y2="252" stroke="#fbf9f4" strokeOpacity="0.16" strokeWidth="1" />
                <line x1="16" y1="118" x2="204" y2="118" stroke="#fbf9f4" strokeOpacity="0.16" strokeWidth="1" />
                {/* Concentric architectural arch */}
                <path
                  d="M36 244 L36 112 A74 74 0 0 1 184 112 L184 244"
                  fill="none"
                  stroke="#fbf9f4"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <path
                  d="M52 244 L52 114 A58 58 0 0 1 168 114 L168 244"
                  fill="#262523"
                  stroke="#fbf9f4"
                  strokeOpacity="0.55"
                  strokeWidth="1.25"
                />
                {/* Minimalist editorial head & shoulders silhouette */}
                <circle cx="110" cy="96" r="24" fill="#fbf9f4" fillOpacity="0.92" />
                <path
                  d="M66 218 C66 168 84 146 110 146 C136 146 154 168 154 218 Z"
                  fill="#fbf9f4"
                  fillOpacity="0.92"
                />
                {/* Architectural accent collar line */}
                <path
                  d="M94 149 L110 172 L126 149"
                  fill="none"
                  stroke="#181818"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            <p className="font-serif-editorial italic text-xl text-[#fbf9f4] leading-snug">
              Anugerah Wiratama
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c8c6c5] mt-1.5">
              Nuno · Bantaeng &amp; Jakarta
            </p>
          </div>
        ) : (
          <div className="relative z-10 my-auto space-y-5 px-2 text-left">
            <div className="border-b border-[#fbf9f4]/[0.16] pb-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#858383]">
                Current Enterprise Role
              </p>
              <p className="font-display text-xl uppercase tracking-tight text-[#fbf9f4] mt-1">
                Project Management Officer
              </p>
              <p className="font-serif-editorial italic text-sm text-[#c8c6c5]">
                PLN Icon Plus · Strategic Technology
              </p>
            </div>

            <div className="border-b border-[#fbf9f4]/[0.16] pb-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#858383]">
                Graduate Studies
              </p>
              <p className="font-display text-xl uppercase tracking-tight text-[#fbf9f4] mt-1">
                MBA Candidate (2024—2026)
              </p>
              <p className="font-serif-editorial italic text-sm text-[#c8c6c5]">
                Vellore Institute of Technology, India
              </p>
            </div>

            <div className="pb-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#858383]">
                Venture &amp; Media
              </p>
              <p className="font-display text-xl uppercase tracking-tight text-[#fbf9f4] mt-1">
                Founder of Kidilent · 50+ Keynotes
              </p>
              <p className="font-serif-editorial italic text-sm text-[#c8c6c5]">
                IT Education &amp; Youth Empowerment
              </p>
            </div>
          </div>
        )}

        {/* Bottom Arch Caption */}
        <div className="relative z-10 text-center pb-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c8c6c5]">
            5°32&apos;S · 119°56&apos;E · GMT+7
          </span>
        </div>
      </div>
    </div>
  );
}
