import { FormEvent, useEffect, useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Copy, FileText } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroArchPlate } from './components/HeroArchPlate';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import {
  ACHIEVEMENTS,
  ALLIANCES,
  CASE_STUDIES,
  CORE_FOCUS_DOMAINS,
  DAILY_TOOLKIT,
  DISCIPLINE_PILLARS,
  EXPERIENCE_INDEX,
  HARD_SKILLS,
  HERO_METRICS,
  SOFT_SKILLS,
  type CaseStudy,
  type ProjectCategory,
} from './data/portfolioData';

const PORTFOLIO_CATEGORIES: ProjectCategory[] = [
  'All',
  'Venture & EdTech',
  'Enterprise PMO',
  'Speaking & Advocacy',
];

type ExperienceFilter = 'all' | 'experience' | 'education';

const INQUIRY_TOPICS = [
  'Keynote Speaking',
  'Enterprise PMO / Advisory',
  'Kidilent / EdTech Partnership',
  'IT Edu Content Collaboration',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('portfolio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedAllianceId, setSelectedAllianceId] = useState<string>(ALLIANCES[0].id);
  const [portfolioFilter, setPortfolioFilter] = useState<ProjectCategory>('All');
  const [experienceFilter, setExperienceFilter] = useState<ExperienceFilter>('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Contact form state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryTopic, setInquiryTopic] = useState(INQUIRY_TOPICS[0]);
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquiryError, setInquiryError] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  useEffect(() => {
    const sectionIds = ['about', 'portfolio', 'experience', 'skills', 'achievements', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id === 'achievements' ? 'skills' : entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.01 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const selectedAlliance = useMemo(
    () => ALLIANCES.find((item) => item.id === selectedAllianceId) ?? ALLIANCES[0],
    [selectedAllianceId]
  );

  const filteredProjects = useMemo(() => {
    if (portfolioFilter === 'All') return CASE_STUDIES;
    return CASE_STUDIES.filter((project) => project.category === portfolioFilter);
  }, [portfolioFilter]);

  const filteredExperience = useMemo(() => {
    if (experienceFilter === 'all') return EXPERIENCE_INDEX;
    return EXPERIENCE_INDEX.filter((item) => item.type === experienceFilter);
  }, [experienceFilter]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('wiratamardjan@gmail.com');
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleDiscussProject = (projectTitle: string) => {
    setActiveCaseStudy(null);
    setInquiryTopic('Enterprise PMO / Advisory');
    if (projectTitle.toLowerCase().includes('kidilent') || projectTitle.toLowerCase().includes('edu')) {
      setInquiryTopic('Kidilent / EdTech Partnership');
    } else if (projectTitle.toLowerCase().includes('keynote')) {
      setInquiryTopic('Keynote Speaking');
    }
    setInquiryMessage(`Hello Nuno, I would like to discuss a collaboration related to ${projectTitle}.`);
    setInquirySubmitted(false);
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim() || !inquiryMessage.trim()) {
      setInquiryError('Please complete your name, email address, and project brief.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiryEmail.trim())) {
      setInquiryError('Please enter a valid email address.');
      return;
    }
    setInquiryError('');
    setInquirySubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f4] text-[#181818] flex flex-col">
      <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onCloseMenu={() => setIsMenuOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="flex-1 w-full pt-16 lg:pt-20">
        {/* ============================================================== */}
        {/* 1. HERO SECTION                                                */}
        {/* ============================================================== */}
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-16 pt-8 lg:pt-12 pb-16">
          {/* Top Architectural Canvas Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#181818]/[0.14] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
            <span className="text-[#181818] tabular-nums">Index · 2025—2026 Edition</span>
            <span className="hidden md:inline">
              Architectural Minimalism · Jakarta &amp; Bantaeng (GMT+7)
            </span>
            <span>Available for Collaboration</span>
          </div>

          {/* 12-Column Asymmetric Core Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-stretch py-12 lg:py-16">
            {/* Left Column: Typographic Monolith */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="font-serif-editorial italic text-xl text-[#5f5e5a] mb-3">
                “YoooMannnn!!!”
              </p>

              <h1 className="flex flex-col select-none">
                <span className="font-display text-[clamp(3.25rem,5.5vw,5.5rem)] leading-[0.9] font-bold uppercase tracking-tight text-[#181818] whitespace-nowrap">
                  ANUGERAH
                </span>
                <span className="font-serif-editorial italic text-[clamp(2.35rem,3.8vw,3.75rem)] leading-[1.08] font-normal text-[#181818] pl-1 my-1">
                  Wiratama
                </span>
                <span className="font-display text-[clamp(3rem,5vw,5rem)] leading-[0.9] font-bold uppercase tracking-tight text-[#181818] whitespace-nowrap">
                  PORTFOLIO
                </span>
              </h1>

              <p className="text-[17px] leading-[1.65] text-[#5f5e5a] mt-7 max-w-md">
                A Project Management Officer at PLN Icon Plus and an MBA student at VIT India. Outside the office I&apos;m an IT edu content creator and the founder of Kidilent.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3.5 bg-[#181818] text-[#fbf9f4] px-7 py-3.5 min-h-[44px] rounded-full hover:bg-[#5f5e5a] transition-colors whitespace-nowrap shrink-0"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                    Contact Me
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#fbf9f4] text-[#181818] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex items-center px-6 py-3.5 min-h-[44px] rounded-full border border-[#181818]/[0.22] hover:bg-[#e2e1db] transition-colors text-[11px] font-semibold uppercase tracking-[0.12em] text-[#181818] whitespace-nowrap shrink-0"
                >
                  Explore Archive
                </a>
              </div>
            </div>

            {/* Center Column: Architectural Arch Studio Plate */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <HeroArchPlate />
            </div>

            {/* Right Column: Metrics Vertical Monolith */}
            <div className="lg:col-span-3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#181818]/[0.14] pt-8 lg:pt-0 lg:pl-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-6 lg:mb-8">
                Metric Specification
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-7">
                {HERO_METRICS.map((metric) => (
                  <div key={metric.label} className="space-y-0.5">
                    <div className="font-display text-4xl lg:text-[44px] leading-none font-semibold tracking-tight text-[#181818] tabular-nums">
                      {metric.value}
                    </div>
                    <div className="font-serif-editorial italic text-lg text-[#5f5e5a]">
                      {metric.label}
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#747878]">
                      {metric.sublabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Hero 4-Column Pillars */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#181818]/[0.14] mt-4">
            {DISCIPLINE_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.index}
                className={`p-6 lg:p-7 flex flex-col justify-between hover:bg-[#e2e1db]/45 transition-colors ${
                  idx < 3 ? 'border-b lg:border-b-0 lg:border-r border-[#181818]/[0.14]' : ''
                } ${idx === 0 || idx === 2 ? 'sm:border-r border-[#181818]/[0.14]' : ''}`}
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-4 tabular-nums">
                  {pillar.index}. {pillar.kicker}
                </span>
                <div>
                  <h2 className="font-display text-2xl lg:text-[26px] leading-tight font-medium uppercase tracking-tight text-[#181818] mb-2">
                    {pillar.title}
                  </h2>
                  <p className="text-[14px] leading-relaxed text-[#5f5e5a]">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. ECOSYSTEM ALLIANCES (#affiliations)                         */}
        {/* ============================================================== */}
        <section
          id="affiliations"
          className="w-full bg-[#f5f4ee] border-t border-b border-[#181818]/[0.14]"
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-5 border-b border-[#181818]/[0.14]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-2">
                  Ecosystem Alliances
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight font-semibold text-[#181818] text-balance">
                  Collaborated With
                </h2>
              </div>
              <p className="font-serif-editorial italic text-lg sm:text-xl text-[#5f5e5a]">
                Organizations, academic institutes, communities &amp; state partners.
              </p>
            </div>

            {/* 2x4 Interactive Hairline Bordered Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#181818]/[0.14]">
              {ALLIANCES.map((alliance) => {
                const isSelected = alliance.id === selectedAllianceId;
                return (
                  <button
                    key={alliance.id}
                    type="button"
                    onClick={() => setSelectedAllianceId(alliance.id)}
                    aria-pressed={isSelected}
                    className={`text-left h-32 border-r border-b border-[#181818]/[0.14] p-6 flex flex-col justify-between transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#181818] text-[#fbf9f4]'
                        : 'bg-transparent text-[#181818] hover:bg-[#e2e1db]'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-[0.12em] tabular-nums ${
                        isSelected ? 'text-[#c8c6c5]' : 'text-[#5f5e5a]'
                      }`}
                    >
                      {alliance.index} · {alliance.domain}
                    </span>
                    <span className="font-display text-2xl lg:text-[26px] leading-none uppercase tracking-tight font-medium">
                      {alliance.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Alliance Detail Strip */}
            <div className="border-x border-b border-[#181818]/[0.14] bg-[#fbf9f4] px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                  Alliance Brief · {selectedAlliance.name} · {selectedAlliance.location}
                </p>
                <p className="text-[15px] text-[#181818]">{selectedAlliance.collaboration}</p>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] whitespace-nowrap shrink-0">
                Select cell to inspect
              </span>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. EDITORIAL ABOUT STATEMENT (#about)                          */}
        {/* ============================================================== */}
        <section id="about" className="w-full border-b border-[#181818]/[0.14]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
              {/* Left Column: Monumental Identity */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-4">
                    Profile · Archive Note
                  </p>
                  <h2 className="font-display text-5xl sm:text-6xl lg:text-[68px] leading-[0.94] uppercase tracking-tight font-bold text-[#181818]">
                    Anugerah
                    <br />
                    Wiratama
                    <br />— Nuno
                  </h2>
                </div>

                <div className="mt-10 pt-7 border-t border-[#181818]/[0.14] space-y-3">
                  <p className="text-[15px] text-[#181818]">
                    Bantaeng, South Sulawesi · Indonesia
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="mailto:wiratamardjan@gmail.com"
                      className="text-[15px] text-[#181818] underline underline-offset-4 decoration-[#181818]/30 hover:decoration-[#181818] transition-colors"
                    >
                      wiratamardjan@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#181818]/[0.2] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#181818] hover:bg-[#e2e1db] transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] pt-1">
                    Timezone: GMT+7 (WITA / WIB)
                  </p>
                </div>
              </div>

              {/* Right Column: Editorial Narrative */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pl-10 lg:border-l border-[#181818]/[0.14]">
                <blockquote className="font-serif-editorial text-2xl sm:text-[26px] leading-[1.46] text-[#181818]">
                  “A Project Management Officer at PLN Icon Plus and an MBA student at VIT India. Outside the office I&apos;m an IT edu content creator and the founder of Kidilent.”
                </blockquote>

                <p className="font-serif-editorial italic text-[19px] leading-[1.68] text-[#5f5e5a]">
                  I&apos;ve spoken at 50+ events on technology, personal branding, self development, and women&apos;s empowerment. My operational philosophy merges disciplined project governance frameworks with creative technological education that bridges the gap between complex enterprise infrastructures and everyday human growth.
                </p>

                <div className="pt-6 border-t border-[#181818]/[0.14]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-3">
                    Core Focus Domains
                  </p>
                  <p className="text-[14px] font-medium text-[#181818] leading-relaxed">
                    {CORE_FOCUS_DOMAINS.join('  ·  ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. PORTFOLIO SHOWCASE (#portfolio)                             */}
        {/* ============================================================== */}
        <section id="portfolio" className="w-full border-b border-[#181818]/[0.14]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:py-28">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#181818]/[0.14]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-2">
                  Selected Works · Case Archives
                </p>
                <h2 className="font-display text-5xl sm:text-6xl lg:text-[72px] leading-none uppercase tracking-tight font-bold text-[#181818]">
                  Portfolio
                </h2>
              </div>

              {/* Interactive Category Filter Segmented Control */}
              <div
                role="tablist"
                aria-label="Filter portfolio case studies"
                className="flex flex-wrap items-center gap-1.5 p-1 bg-[#efeee9] border border-[#181818]/[0.12] rounded-full self-start lg:self-auto"
              >
                {PORTFOLIO_CATEGORIES.map((category) => {
                  const isActive = portfolioFilter === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setPortfolioFilter(category)}
                      className={`px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#181818] text-[#fbf9f4]'
                          : 'text-[#5f5e5a] hover:text-[#181818]'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sharp 0px Architectural Case Study Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {filteredProjects.map((project) => {
                const isDark = project.theme === 'dark';
                const isCharcoal = project.theme === 'charcoal';
                const frameClasses = isDark
                  ? 'bg-[#181818] text-[#fbf9f4]'
                  : isCharcoal
                  ? 'bg-[#30312e] text-[#fbf9f4]'
                  : 'bg-[#e2e1db] text-[#181818]';
                const mutedFrameText = isDark || isCharcoal ? 'text-[#c8c6c5]' : 'text-[#5f5e5a]';

                return (
                  <article
                    key={project.id}
                    className="flex flex-col bg-[#f5f4ee] border border-[#181818]/[0.16] hover:border-[#181818] transition-colors group"
                  >
                    {/* 16:9 Architectural Studio Preview Frame */}
                    <div
                      className={`relative w-full aspect-[16/9] ${frameClasses} overflow-hidden p-6 sm:p-9 flex flex-col justify-between border-b border-[#181818]/[0.14]`}
                    >
                      <div
                        className="absolute inset-0 opacity-[0.12] pointer-events-none"
                        style={{
                          backgroundImage:
                            isDark || isCharcoal
                              ? 'radial-gradient(#fbf9f4 1px, transparent 1px)'
                              : 'radial-gradient(#181818 1px, transparent 1px)',
                          backgroundSize: '16px 16px',
                        }}
                      />

                      <div className={`relative z-10 flex justify-between items-center text-[11px] font-semibold uppercase tracking-[0.12em] ${mutedFrameText}`}>
                        <span className="tabular-nums">Case Study {project.index}</span>
                        <span>{project.role}</span>
                      </div>

                      <div className="relative z-10 my-auto text-center px-2">
                        <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight font-bold leading-none transition-transform duration-200 group-hover:scale-[1.02]">
                          {project.organization}
                        </h3>
                        <p className={`font-serif-editorial italic text-lg sm:text-xl mt-2 ${mutedFrameText}`}>
                          {project.subtitle}
                        </p>
                      </div>

                      <div className={`relative z-10 flex justify-between items-center text-[10px] font-semibold uppercase tracking-[0.12em] ${mutedFrameText}`}>
                        <span>{project.categoryLabel}</span>
                        <span className="tabular-nums">{project.period}</span>
                      </div>
                    </div>

                    {/* Details Bay */}
                    <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                          <span>{project.categoryLabel}</span>
                          <span className="tabular-nums">{project.period}</span>
                        </div>
                        <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-tight font-medium text-[#181818]">
                          {project.title}
                        </h4>
                        <p className="text-[15px] leading-relaxed text-[#5f5e5a]">
                          {project.summary}
                        </p>
                      </div>

                      <div className="pt-6 mt-7 border-t border-[#181818]/[0.12] flex items-center justify-between gap-4">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                          Status · {project.status}
                        </span>
                        <button
                          type="button"
                          onClick={() => setActiveCaseStudy(project)}
                          className="inline-flex items-center gap-2 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#181818] hover:text-[#5f5e5a] transition-colors cursor-pointer"
                        >
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. EDUCATION & EXPERIENCE INDEX (#experience)                  */}
        {/* ============================================================== */}
        <section
          id="experience"
          className="w-full bg-[#f5f4ee]/65 border-b border-[#181818]/[0.14]"
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:py-28">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-[#181818]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-2">
                  Curriculum Vitae
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight font-semibold text-[#181818] text-balance">
                  Education &amp; Experience Index
                </h2>
              </div>

              <div className="inline-flex items-center gap-1 p-1 bg-[#e9e8e3] border border-[#181818]/[0.12] rounded-full self-start lg:self-auto">
                {[
                  { id: 'all', label: 'All Records' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'education', label: 'Academia' },
                ].map((tab) => {
                  const isActive = experienceFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setExperienceFilter(tab.id as ExperienceFilter)}
                      className={`px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#181818] text-[#fbf9f4]'
                          : 'text-[#5f5e5a] hover:text-[#181818]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="divide-y divide-[#181818]/[0.14] border-b border-[#181818]/[0.14]">
              {filteredExperience.map((item) => (
                <div
                  key={item.id}
                  className="py-6 px-4 -mx-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#e2e1db] transition-colors duration-100"
                >
                  <div className="md:col-span-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] tabular-nums">
                    {item.period} · {item.type === 'experience' ? 'Role' : 'Academic'}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-lg font-semibold text-[#181818]">{item.title}</h3>
                    <p className="font-serif-editorial italic text-[17px] text-[#5f5e5a]">
                      {item.organization}
                    </p>
                  </div>
                  <div className="md:col-span-5 text-[15px] leading-relaxed text-[#5f5e5a]">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. SKILLS, TOOLKIT & ACHIEVEMENTS (#skills, #achievements)     */}
        {/* ============================================================== */}
        <section id="skills" className="w-full border-b border-[#181818]/[0.14]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:py-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-6 border-b border-[#181818]/[0.14]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-2">
                  Capabilities &amp; Honors
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight font-semibold text-[#181818] text-balance">
                  Skills, Toolkit &amp; Achievements
                </h2>
              </div>
              <p className="font-serif-editorial italic text-lg sm:text-xl text-[#5f5e5a]">
                Engineered execution, strategic empathy &amp; verified track record.
              </p>
            </div>

            {/* 3-Column Hairline Box Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 border border-[#181818]/[0.16] mb-20">
              {/* Col 1: Hard Skills */}
              <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-[#181818]/[0.16] bg-[#fbf9f4]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-4">
                  01 · Disciplinary
                </p>
                <h3 className="font-display text-3xl uppercase tracking-tight font-medium text-[#181818] mb-7">
                  Hard Skills
                </h3>
                <ul className="divide-y divide-[#181818]/[0.08] text-[15px] text-[#181818]">
                  {HARD_SKILLS.map((skill) => (
                    <li key={skill} className="py-3 first:pt-0 last:pb-0">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2: Daily Toolkit */}
              <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-[#181818]/[0.16] bg-[#fbf9f4]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-4">
                  02 · Stack
                </p>
                <h3 className="font-display text-3xl uppercase tracking-tight font-medium text-[#181818] mb-7">
                  Daily Toolkit
                </h3>
                <ul className="divide-y divide-[#181818]/[0.08] text-[15px] text-[#181818]">
                  {DAILY_TOOLKIT.map((tool) => (
                    <li
                      key={tool.name}
                      className="py-3 first:pt-0 last:pb-0 flex items-baseline justify-between gap-4"
                    >
                      <span>{tool.name}</span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5f5e5a] whitespace-nowrap">
                        {tool.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Soft Skills */}
              <div className="p-8 sm:p-10 bg-[#fbf9f4]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-4">
                  03 · Interpersonal
                </p>
                <h3 className="font-display text-3xl uppercase tracking-tight font-medium text-[#181818] mb-7">
                  Soft Skills
                </h3>
                <ul className="divide-y divide-[#181818]/[0.08] text-[15px] text-[#181818]">
                  {SOFT_SKILLS.map((skill) => (
                    <li key={skill} className="py-3 first:pt-0 last:pb-0">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Achievements & Recognitions */}
            <div id="achievements">
              <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-1">
                  Milestones
                </p>
                <h3 className="font-display text-3xl uppercase tracking-tight font-medium text-[#181818]">
                  Honors &amp; Recognitions
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ACHIEVEMENTS.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="bg-[#f5f4ee] p-8 border-t-2 border-[#181818] flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] tabular-nums">
                        {achievement.index} · {achievement.category}
                      </p>
                      <h4 className="font-display text-2xl uppercase tracking-tight font-medium text-[#181818] leading-tight">
                        {achievement.title}
                      </h4>
                      <p className="text-[15px] leading-relaxed text-[#5f5e5a]">
                        {achievement.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#181818]/[0.12] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#181818]">
                      {achievement.recognition}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. LET'S CONNECT & INTERACTIVE INQUIRY (#contact)              */}
        {/* ============================================================== */}
        <section id="contact" className="w-full bg-[#efeee9]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
              {/* Left Column: Call to Action & Channels */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-4">
                    Initiate Collaboration
                  </p>
                  <h2 className="font-display text-5xl sm:text-6xl lg:text-[72px] uppercase tracking-tight font-bold leading-[0.94] text-[#181818] text-balance">
                    Let&apos;s Build Something Extraordinary
                  </h2>
                  <p className="font-serif-editorial text-xl sm:text-2xl leading-relaxed text-[#5f5e5a] mt-6 max-w-xl">
                    Open for collaborations, keynote speaking engagements, advisory, and digital projects. Reach out directly via email or send a structured inquiry.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-3.5">
                  <a
                    href="mailto:wiratamardjan@gmail.com"
                    className="group inline-flex items-center gap-3.5 bg-[#181818] text-[#fbf9f4] px-7 py-3.5 min-h-[44px] rounded-full hover:bg-[#5f5e5a] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Email Direct
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#fbf9f4] text-[#181818] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 min-h-[44px] rounded-full border border-[#181818]/[0.22] bg-[#fbf9f4] hover:bg-[#e2e1db] transition-colors text-[11px] font-semibold uppercase tracking-[0.12em] text-[#181818] whitespace-nowrap shrink-0"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 min-h-[44px] rounded-full border border-[#181818]/[0.22] bg-[#fbf9f4] hover:bg-[#e2e1db] transition-colors text-[11px] font-semibold uppercase tracking-[0.12em] text-[#181818] whitespace-nowrap shrink-0"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-3.5 min-h-[44px] rounded-full border border-[#181818]/[0.22] bg-[#fbf9f4] hover:bg-[#e2e1db] transition-colors text-[11px] font-semibold uppercase tracking-[0.12em] text-[#181818] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Resume Dossier</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Architectural Inquiry Form */}
              <div className="lg:col-span-6 bg-[#fbf9f4] border border-[#181818]/[0.16] p-7 sm:p-10">
                {inquirySubmitted ? (
                  <div className="h-full flex flex-col justify-between space-y-6 py-4">
                    <div className="space-y-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                        Inquiry Logged
                      </p>
                      <h3 className="font-display text-3xl uppercase tracking-tight font-medium text-[#181818]">
                        Thank you, {inquiryName}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-[#5f5e5a]">
                        Your brief regarding <strong className="text-[#181818]">{inquiryTopic}</strong> has been prepared. You can also dispatch it immediately to your mail client below.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#181818]/[0.14]">
                      <a
                        href={`mailto:wiratamardjan@gmail.com?subject=${encodeURIComponent(
                          `[${inquiryTopic}] Inquiry from ${inquiryName}`
                        )}&body=${encodeURIComponent(
                          `Name: ${inquiryName}\nEmail: ${inquiryEmail}\nTopic: ${inquiryTopic}\n\n${inquiryMessage}`
                        )}`}
                        className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-[#181818] text-[#fbf9f4] text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#5f5e5a] transition-colors"
                      >
                        <span>Open in Mail App</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setInquirySubmitted(false);
                          setInquiryName('');
                          setInquiryEmail('');
                          setInquiryMessage('');
                        }}
                        className="px-6 py-3 min-h-[44px] rounded-full border border-[#181818]/[0.22] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#181818] hover:bg-[#e2e1db] transition-colors cursor-pointer"
                      >
                        Send Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} noValidate className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#181818]/[0.14] pb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#181818]">
                        Direct Brief Form
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                        Response within 24h
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="inquiry-name"
                          className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          id="inquiry-name"
                          type="text"
                          value={inquiryName}
                          onChange={(e) => setInquiryName(e.target.value)}
                          placeholder="Your name"
                          className="w-full bg-transparent border-b border-[#181818]/30 focus:border-[#181818] py-2.5 text-[15px] text-[#181818] placeholder:text-[#747878] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="inquiry-email"
                          className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          id="inquiry-email"
                          type="email"
                          value={inquiryEmail}
                          onChange={(e) => setInquiryEmail(e.target.value)}
                          placeholder="you@organization.com"
                          className="w-full bg-transparent border-b border-[#181818]/30 focus:border-[#181818] py-2.5 text-[15px] text-[#181818] placeholder:text-[#747878] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-topic"
                        className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-2"
                      >
                        Collaboration Scope
                      </label>
                      <select
                        id="inquiry-topic"
                        value={inquiryTopic}
                        onChange={(e) => setInquiryTopic(e.target.value)}
                        className="w-full bg-transparent border-b border-[#181818]/30 focus:border-[#181818] py-2.5 text-[15px] text-[#181818] focus:outline-none transition-colors cursor-pointer"
                      >
                        {INQUIRY_TOPICS.map((topic) => (
                          <option key={topic} value={topic}>
                            {topic}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-message"
                        className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a] mb-2"
                      >
                        Project / Event Brief
                      </label>
                      <textarea
                        id="inquiry-message"
                        rows={3}
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        placeholder="Share event dates, goals, or advisory scope..."
                        className="w-full bg-transparent border-b border-[#181818]/30 focus:border-[#181818] py-2.5 text-[15px] text-[#181818] placeholder:text-[#747878] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {inquiryError && (
                      <p role="alert" className="text-xs font-medium text-[#ba1a1a]">
                        {inquiryError}
                      </p>
                    )}

                    <div className="pt-2 flex items-center justify-between gap-4">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5f5e5a]">
                        wiratamardjan@gmail.com
                      </span>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-3 px-7 py-3.5 min-h-[44px] rounded-full bg-[#181818] text-[#fbf9f4] text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-[#5f5e5a] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>Prepare Inquiry</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================== */}
      {/* UNIFIED EDITORIAL FOOTER                                       */}
      {/* ============================================================== */}
      <footer className="w-full bg-[#f5f4ee] border-t border-[#181818]/[0.14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <p className="font-display text-2xl uppercase tracking-tight font-medium text-[#181818]">
                  Anugerah Wiratama — Nuno
                </p>
                <p className="font-serif-editorial italic text-lg text-[#5f5e5a] mt-1">
                  PMO at PLN Icon Plus · MBA Student at VIT India · Founder of Kidilent
                </p>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                © 2026 Anugerah Wiratama. All rights reserved.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                Coordinates
              </p>
              <div className="text-[15px] text-[#181818] space-y-1">
                <p>Bantaeng, South Sulawesi · Jakarta</p>
                <p className="text-[#5f5e5a]">GMT+7 Timezone</p>
              </div>
            </div>

            <div className="md:col-span-2 space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                Communications
              </p>
              <ul className="text-[14px] space-y-2">
                <li>
                  <a
                    href="mailto:wiratamardjan@gmail.com"
                    className="text-[#181818] hover:text-[#5f5e5a] transition-colors"
                  >
                    wiratamardjan@gmail.com
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(true)}
                    className="text-[#5f5e5a] hover:text-[#181818] transition-colors cursor-pointer"
                  >
                    Curriculum Vitae
                  </button>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2 flex flex-col md:items-end space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5e5a]">
                Navigation
              </p>
              <div className="flex flex-col md:items-end gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]">
                <a href="#portfolio" className="text-[#5f5e5a] hover:text-[#181818] transition-colors">
                  Index
                </a>
                <a href="#experience" className="text-[#5f5e5a] hover:text-[#181818] transition-colors">
                  Archive
                </a>
                <a href="#" className="text-[#181818] hover:text-[#5f5e5a] transition-colors pt-1">
                  Back to Top ↑
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onDiscussProject={handleDiscussProject}
      />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
