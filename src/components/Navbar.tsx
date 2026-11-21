import { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navbar({
  activeSection,
  isMenuOpen,
  onToggleMenu,
  onCloseMenu,
  onOpenResume,
}: NavbarProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        onCloseMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, onCloseMenu]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-[#fbf9f4]/92 backdrop-blur-md border-b border-[#181818]/[0.14]">
        <div className="max-w-[1440px] mx-auto h-16 lg:h-20 px-6 lg:px-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#"
            className="font-display text-2xl lg:text-[28px] font-semibold uppercase tracking-tight text-[#181818] hover:text-[#5f5e5a] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
          >
            NUNO
          </a>

          {/* Zone 2: 5 Concise Single-line Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-[11px] font-semibold uppercase tracking-[0.12em] py-1.5 border-b transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818] ${
                    isActive
                      ? 'text-[#181818] border-[#181818]'
                      : 'text-[#5f5e5a] border-transparent hover:text-[#181818] hover:border-[#181818]/40'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={onToggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="editorial-index-drawer"
              className="inline-flex items-center gap-3 px-5 py-2.5 min-h-[40px] rounded-full border border-[#181818]/[0.22] bg-transparent hover:bg-[#e2e1db] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#181818]"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#181818]">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
              <span className="flex flex-col justify-center gap-1 w-4" aria-hidden="true">
                <span
                  className={`block h-[1.5px] w-full bg-[#181818] transition-transform duration-200 ${
                    isMenuOpen ? 'rotate-45 translate-y-[2.5px]' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full bg-[#181818] transition-transform duration-200 ${
                    isMenuOpen ? '-rotate-45 -translate-y-[2.5px]' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Editorial Index Overlay Drawer */}
      {isMenuOpen && (
        <div
          id="editorial-index-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site index navigation"
          className="fixed inset-0 z-50 bg-[#181818] text-[#fbf9f4] flex flex-col justify-between overflow-y-auto"
        >
          <div className="max-w-[1440px] w-full mx-auto h-16 lg:h-20 px-6 lg:px-16 flex items-center justify-between border-b border-[#fbf9f4]/[0.14] shrink-0">
            <span className="font-display text-2xl lg:text-[28px] font-semibold uppercase tracking-tight">
              NUNO · Archive Index
            </span>
            <button
              type="button"
              onClick={onCloseMenu}
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full border border-[#fbf9f4]/[0.28] text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#fbf9f4] hover:text-[#181818] transition-colors cursor-pointer"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto">
            <div className="lg:col-span-7 flex flex-col divide-y divide-[#fbf9f4]/[0.14] border-t border-b border-[#fbf9f4]/[0.14]">
              {[
                { num: '01', label: 'About & Philosophy', href: '#about' },
                { num: '02', label: 'Selected Portfolio', href: '#portfolio' },
                { num: '03', label: 'Experience & MBA', href: '#experience' },
                { num: '04', label: 'Skills & Honors', href: '#skills' },
                { num: '05', label: 'Initiate Collaboration', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.num}
                  href={item.href}
                  onClick={onCloseMenu}
                  className="group py-5 lg:py-6 flex items-center justify-between gap-6 hover:pl-3 transition-all duration-200"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#858383] tabular-nums">
                      {item.num}
                    </span>
                    <span className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#fbf9f4] group-hover:text-[#e2e1db]">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-[#858383] group-hover:text-[#fbf9f4] transition-colors shrink-0" />
                </a>
              ))}
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between gap-10 lg:pl-10 lg:border-l border-[#fbf9f4]/[0.14]">
              <div className="space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#858383]">
                  Profile Dossier
                </p>
                <p className="font-serif-editorial italic text-2xl leading-relaxed text-[#e5e2e1]">
                  Anugerah Wiratama (Nuno) — Project Management Officer at PLN Icon Plus, MBA student at VIT India, IT edu creator, and founder of Kidilent.
                </p>
              </div>

              <div className="space-y-4 border-t border-[#fbf9f4]/[0.14] pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#858383]">
                  Direct Coordinates
                </p>
                <p className="text-sm text-[#e5e2e1]">Bantaeng, South Sulawesi · Jakarta, Indonesia (GMT+7)</p>
                <a
                  href="mailto:wiratamardjan@gmail.com"
                  className="inline-block text-sm text-[#fbf9f4] underline underline-offset-4 decoration-[#fbf9f4]/40 hover:decoration-[#fbf9f4]"
                >
                  wiratamardjan@gmail.com
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onCloseMenu();
                    onOpenResume();
                  }}
                  className="px-6 py-3 rounded-full bg-[#fbf9f4] text-[#181818] text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#e2e1db] transition-colors cursor-pointer"
                >
                  View CV Dossier
                </button>
                <a
                  href="#contact"
                  onClick={onCloseMenu}
                  className="px-6 py-3 rounded-full border border-[#fbf9f4]/[0.3] text-[#fbf9f4] text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#fbf9f4]/10 transition-colors"
                >
                  Send Inquiry
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16 py-6 border-t border-[#fbf9f4]/[0.14] flex flex-wrap items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#858383]">
            <span>Anugerah Wiratama · Nuno</span>
            <span>Swiss-Editorial Archive · 2025—2026</span>
          </div>
        </div>
      )}
    </>
  );
}
