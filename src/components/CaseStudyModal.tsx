import { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import type { CaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onDiscussProject: (projectTitle: string) => void;
}

export function CaseStudyModal({ project, onClose, onDiscussProject }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
      className="fixed inset-0 z-50 bg-[#181818]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#fbf9f4] text-[#181818] border border-[#181818]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Bar */}
        <div className="sticky top-0 z-10 bg-[#fbf9f4] px-6 sm:px-10 py-5 border-b border-[#181818]/[0.14] flex items-center justify-between gap-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] tabular-nums">
            Case Archive {project.index} · {project.categoryLabel} · {project.period}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-full border border-[#181818]/[0.2] text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#e2e1db] transition-colors cursor-pointer"
          >
            <span>Close</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Hero Banner Strip */}
        <div className="bg-[#181818] text-[#fbf9f4] px-6 sm:px-10 py-10 sm:py-12 border-b border-[#181818]/[0.14]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#c8c6c5] mb-3">
            {project.organization} · {project.role}
          </p>
          <h2
            id="case-study-modal-title"
            className="font-display text-3xl sm:text-5xl uppercase tracking-tight font-bold text-[#fbf9f4]"
          >
            {project.title}
          </h2>
          <p className="font-serif-editorial italic text-xl sm:text-2xl text-[#c8c6c5] mt-2">
            {project.subtitle}
          </p>
        </div>

        {/* Outcomes 3-column hairline bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-[#181818]/[0.14] bg-[#f5f4ee]">
          {project.outcomes.map((item, idx) => (
            <div
              key={item.label}
              className={`px-6 sm:px-8 py-5 ${
                idx < project.outcomes.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[#181818]/[0.14]' : ''
              }`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                {item.label}
              </p>
              <p className="font-display text-xl uppercase tracking-tight text-[#181818] mt-1">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative & Execution */}
        <div className="px-6 sm:px-10 py-8 sm:py-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                Overview &amp; Context
              </h3>
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="font-serif-editorial text-xl leading-relaxed text-[#181818]">
                {project.summary}
              </p>
              <p className="text-[15px] leading-relaxed text-[#5f5e5a]">
                <strong className="font-semibold text-[#181818]">Core Challenge: </strong>
                {project.challenge}
              </p>
            </div>
          </div>

          <div className="border-t border-[#181818]/[0.14] pt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                Strategic Execution
              </h3>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-3">
                {project.execution.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 pb-3 border-b border-[#181818]/[0.08] last:border-b-0 last:pb-0"
                  >
                    <span className="text-[11px] font-semibold text-[#5f5e5a] tabular-nums pt-1">
                      0{index + 1}.
                    </span>
                    <span className="text-[15px] leading-relaxed text-[#181818]">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#181818]/[0.14] pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                Key Deliverables
              </h3>
            </div>
            <div className="md:col-span-8 text-[14px] text-[#5f5e5a]">
              {project.deliverables.join(' · ')}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 sm:px-10 py-6 bg-[#f5f4ee] border-t border-[#181818]/[0.14] flex flex-wrap items-center justify-between gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
            Status: {project.status}
          </span>
          <button
            type="button"
            onClick={() => onDiscussProject(project.title)}
            className="inline-flex items-center gap-3 px-7 py-3 min-h-[44px] rounded-full bg-[#181818] text-[#fbf9f4] text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#5f5e5a] transition-colors cursor-pointer"
          >
            <span>Discuss Similar Collaboration</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
