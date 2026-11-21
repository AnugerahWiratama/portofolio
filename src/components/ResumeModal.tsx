import { useEffect } from 'react';
import { X, Download, Printer } from 'lucide-react';
import { EXPERIENCE_INDEX, HARD_SKILLS, SOFT_SKILLS, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadTxt = () => {
    const lines = [
      'ANUGERAH WIRATAMA (NUNO)',
      'Project Management Officer @ PLN Icon Plus | MBA Student @ VIT India | Founder @ Kidilent',
      'Location: Bantaeng, South Sulawesi & Jakarta, Indonesia (GMT+7)',
      'Email: wiratamardjan@gmail.com',
      '',
      'PROFILE',
      'Project Management Officer at PLN Icon Plus and MBA student at VIT India. Outside the office, an IT edu content creator and founder of Kidilent. Delivered 50+ keynotes on technology, personal branding, self development, and women empowerment.',
      '',
      'EXPERIENCE & EDUCATION',
      ...EXPERIENCE_INDEX.map(
        (item) => `- [${item.period}] ${item.title} — ${item.organization}\n  ${item.description}`
      ),
      '',
      'HARD SKILLS',
      HARD_SKILLS.join(' · '),
      '',
      'SOFT SKILLS',
      SOFT_SKILLS.join(' · '),
      '',
      'HONORS & RECOGNITIONS',
      ...ACHIEVEMENTS.map((a) => `- ${a.title} (${a.recognition}): ${a.description}`),
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Anugerah_Wiratama_Nuno_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 bg-[#181818]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#fbf9f4] text-[#181818] border border-[#181818]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-[#fbf9f4] px-6 sm:px-8 py-4 border-b border-[#181818]/[0.14] flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
            Curriculum Vitae Dossier · 2026
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-full border border-[#181818]/[0.2] text-[11px] font-semibold uppercase tracking-[0.1em] hover:bg-[#e2e1db] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-full bg-[#181818] text-[#fbf9f4] text-[11px] font-semibold uppercase tracking-[0.1em] hover:bg-[#5f5e5a] transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV dossier"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#181818]/[0.2] hover:bg-[#e2e1db] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-8">
          <div className="border-b-2 border-[#181818] pb-6">
            <h2
              id="resume-modal-title"
              className="font-display text-3xl sm:text-4xl uppercase tracking-tight font-bold"
            >
              Anugerah Wiratama (Nuno)
            </h2>
            <p className="font-serif-editorial italic text-lg text-[#5f5e5a] mt-1">
              Project Management Officer · MBA Student · IT Edu Creator · Founder of Kidilent
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5f5e5a] mt-3">
              Bantaeng &amp; Jakarta, Indonesia · wiratamardjan@gmail.com · GMT+7
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-4">
              Experience &amp; Academic Credentials
            </h3>
            <div className="divide-y divide-[#181818]/[0.14] border-t border-b border-[#181818]/[0.14]">
              {EXPERIENCE_INDEX.map((item) => (
                <div key={item.id} className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <div className="sm:col-span-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5f5e5a] tabular-nums">
                    {item.period}
                  </div>
                  <div className="sm:col-span-9">
                    <div className="font-semibold text-[#181818]">
                      {item.title} · <span className="font-serif-editorial italic font-normal text-[#5f5e5a]">{item.organization}</span>
                    </div>
                    <p className="text-sm text-[#5f5e5a] mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-3">
                Core Capabilities
              </h3>
              <p className="text-sm text-[#181818] leading-relaxed">{HARD_SKILLS.join(' · ')}</p>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-3">
                Leadership &amp; Soft Skills
              </h3>
              <p className="text-sm text-[#181818] leading-relaxed">{SOFT_SKILLS.join(' · ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
