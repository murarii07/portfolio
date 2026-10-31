"use client"
import React, { useState, useEffect } from 'react';
import { LucideIcon, Github, Linkedin, Mail, Code, ArrowRight, Cloud, Database, Server, ExternalLink, Menu, X } from 'lucide-react';
import { VisibilityState } from './state.types';

// ---------- Local types (page.tsx no longer needs Card.tsx or Skills.tsx) ----------
interface Experience {
  role: string;
  company: string;
  period: string;
  note?: string;
  points: string[];
  tags: string[];
}

interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface Recognition {
  label: string;
  title: string;
  description?: string;
  extra?: string;
}

const GITHUB_URL = 'https://github.com/murarii07';
const LINKEDIN_URL = 'https://www.linkedin.com/in/abhayjaiswal007';
const EMAIL = 'abhayaj07@gmail.com';

// Theme: warm paper, ink text, one accent colour. Fonts come from layout.tsx.
const DISPLAY = 'font-[family-name:var(--font-display)]';
const MONO = 'font-[family-name:var(--font-mono)]';
const reveal = (visible: boolean): string =>
  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

const SectionHeader: React.FC<{
  id: string; num: string; label: string; title: string; subtitle?: string; visible: boolean;
}> = ({ id, num, label, title, subtitle, visible }) => (
  <div id={id} data-animate className={`mb-14 transition-all duration-700 ${reveal(visible)}`}>
    <p className={`${MONO} mb-4 text-xs uppercase tracking-[0.2em] text-[#C8461B]`}>
      {num} — {label}
    </p>
    <h2 className={`${DISPLAY} text-4xl leading-tight tracking-tight text-[#16140F] md:text-5xl`}>{title}</h2>
    {subtitle && <p className="mt-4 max-w-2xl text-lg text-[#6B655A]">{subtitle}</p>}
  </div>
);

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          setIsVisible((prev: VisibilityState) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el: Element) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Skills grouped by category, with no self-rated levels.
  const skillGroups: SkillGroup[] = [
    {
      title: 'Backend',
      icon: Server,
      items: ['Python', 'FastAPI', 'Django', 'Frappe', 'GraphQL', 'REST APIs', 'NestJS', 'Node.js']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      items: ['AWS', 'Docker', 'CI/CD (GitHub Actions)', 'Azure', 'Kubernetes (local practice)', 'Git & GitHub']
    },
    {
      title: 'Databases',
      icon: Database,
      items: ['PostgreSQL (multi-tenant design)', 'MongoDB']
    },
    {
      title: 'Frontend',
      icon: Code,
      items: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'HTML']
    }
  ];

  const experiences: Experience[] = [
    {
      role: 'Back End Developer',
      company: 'BayNine Ventures',
      period: 'Nov 2025 – Present',
      note: 'Intern until Feb 2026, full-time since',
      points: [
        'Own the backend end to end, from API design and business logic to the data layer, deployment and maintenance.',
        'Ship containerized services with Docker on AWS, with GitHub Actions CI/CD pipelines handling builds and releases.',
        'Designed the multi-tenant PostgreSQL schema so each tenant\'s data stays isolated while the system scales cleanly.',
        'Build REST and GraphQL APIs with FastAPI and Django, plus custom Frappe modules that support enterprise workflows.',
        'Tune authentication flows and slow database queries to keep API responses fast.'
      ],
      tags: ['Python', 'FastAPI', 'Django', 'GraphQL', 'PostgreSQL', 'Frappe', 'AWS', 'Docker']
    },
    {
      role: 'Full Stack Developer',
      company: 'Metaminds Studio',
      period: 'Aug 2025 – Oct 2025',
      points: [
        'Built features across the stack with Next.js, NestJS and Strapi, including REST APIs and authentication improvements.',
        'Helped build CI/CD pipelines and supported cloud integration and the production rollout on Azure.'
      ],
      tags: ['Next.js', 'NestJS', 'Strapi', 'Azure', 'CI/CD']
    },
    {
      role: 'Cloud Operations Assistant (Part-time)',
      company: 'U J Software & Solutions',
      period: 'May 2025 – Jul 2025',
      points: [
        'Managed cloud user access and handled monitoring and reporting to keep day-to-day operations running smoothly.'
      ],
      tags: ['Cloud Operations', 'Monitoring', 'Reporting']
    }
  ];

  const projects: ProjectItem[] = [
    {
      title: 'Excel-to-Form Conversion',
      description: 'Turns Excel data into dynamic web forms, improving data collection efficiency by 40%. The frontend runs on Vercel and the backend and Blob Storage on Azure, with automated CI/CD deployments.',
      tags: ['Next.js', 'Azure', 'Blob Storage', 'CI/CD'],
      githubUrl: 'https://github.com/murarii07/excel-to-form',
      liveUrl: 'https://excel-to-form.vercel.app/'
    },
    {
      title: 'Vocal Separator',
      description: 'Upload a track and get clean, isolated vocals back for remixing, using the Music.ai API for the AI-based separation.',
      tags: ['Python', 'Music.ai API', 'Azure'],
      githubUrl: 'https://github.com/murarii07/Vocal_Separation_From_Music'
    },
    {
      title: 'Fake News Detection Chrome Extension',
      description: 'Rates a news article\'s credibility through an ML-based API and shows a simple visual indicator. Reached the finals of the Inter-College Hackathon 2025.',
      tags: ['React', 'ML API', 'Chrome Extension'],
      githubUrl: 'https://github.com/murarii07/chromeExtension'
    },
    {
      title: 'Text-to-Image',
      description: 'Generates images from text descriptions using AI.',
      tags: ['AI', 'Image Generation'],
      githubUrl: 'https://github.com/murarii07/Text-to-Image'
    }
  ];

  const recognition: Recognition[] = [
    {
      label: 'Hackathons',
      title: 'Finalist, Inter-College Hackathon 2025 · Participant, Smart India Hackathon 2024',
      description: 'Helped build a browser-based fake news detection prototype that scores credibility with machine learning APIs, and reached the finals.'
    },
    {
      label: 'Certifications',
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      extra: 'DevOps Fundamentals'
    }
  ];

  const handleNavClick = (href: string): void => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems: { label: string; href: string }[] = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F1E8] text-[#16140F]">
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#DDD6C6] bg-[#F5F1E8]/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <button
            onClick={() => handleNavClick('#home')}
            className={`${DISPLAY} text-xl font-semibold tracking-tight`}
          >
            Abhay Jaiswal
          </button>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`${MONO} text-xs uppercase tracking-widest text-[#6B655A] transition-colors hover:text-[#C8461B]`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-[#DDD6C6] bg-[#F5F1E8] px-6 py-6 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`${MONO} text-left text-sm uppercase tracking-widest text-[#3A362E]`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-36 md:pt-48">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: 'radial-gradient(#16140F26 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'linear-gradient(to bottom, black 35%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 35%, transparent)'
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <p className={`${MONO} mb-8 text-xs uppercase tracking-[0.2em] text-[#6B655A]`}>
            Back End Developer · BayNine Ventures · Mumbai, India
          </p>
          <h1 className={`${DISPLAY} text-6xl font-medium leading-[0.92] tracking-tight sm:text-7xl md:text-9xl`}>
            Abhay<br />Jaiswal<span className="text-[#C8461B]">.</span>
          </h1>
          <p className={`${DISPLAY} mt-10 max-w-3xl text-2xl leading-snug text-[#3A362E] md:text-4xl`}>
            I build <em className="text-[#C8461B]">reliable APIs</em> and cloud deployments for enterprise applications.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6B655A]">
            I own the backend end to end, from a multi-tenant PostgreSQL schema to Dockerized AWS
            deployments, and I am building toward DevOps and MLOps.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => handleNavClick('#projects')}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#16140F] px-7 py-3.5 font-medium text-[#F5F1E8] transition-colors hover:bg-[#C8461B]"
            >
              View my projects
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-full border border-[#16140F] px-7 py-3.5 font-medium transition-colors hover:bg-[#16140F] hover:text-[#F5F1E8]"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${MONO} inline-flex items-center gap-2 text-sm text-[#6B655A] transition-colors hover:text-[#C8461B]`}
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${MONO} inline-flex items-center gap-2 text-sm text-[#6B655A] transition-colors hover:text-[#C8461B]`}
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className={`${MONO} inline-flex items-center gap-2 text-sm text-[#6B655A] transition-colors hover:text-[#C8461B]`}
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-[#DDD6C6] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            id="about-title"
            num="01"
            label="About"
            title="Reliable backends, built with care."
            visible={!!isVisible['about-title']}
          />
          <div
            id="about-body"
            data-animate
            className={`grid gap-12 transition-all duration-700 lg:grid-cols-5 ${reveal(!!isVisible['about-body'])}`}
          >
            <p className={`${DISPLAY} text-xl leading-relaxed text-[#3A362E] md:text-2xl lg:col-span-3`}>
              I turn business requirements into clean, reliable backend services. I graduated with a
              B.Sc. in Information Technology from Mulund College of Commerce and now work on
              multi-tenant systems, APIs and cloud deployments. I am growing toward MLOps and AI
              engineering, with a focus on shipping software that is tested, measurable and dependable.
            </p>
            <div className="space-y-10 lg:col-span-2">
              <div>
                <h3 className={`${MONO} mb-3 text-xs uppercase tracking-[0.2em] text-[#C8461B]`}>Education</h3>
                <p className={`${DISPLAY} text-xl`}>B.Sc. Information Technology</p>
                <p className="text-[#6B655A]">Mulund College of Commerce, 2022–2025</p>
                <p className="text-[#6B655A]">GPA 8.0 / 10</p>
              </div>
              <div>
                <h3 className={`${MONO} mb-3 text-xs uppercase tracking-[0.2em] text-[#C8461B]`}>Interests</h3>
                <ul className="space-y-1 text-[#3A362E]">
                  <li>Playing the flute</li>
                  <li>Cloud computing &amp; DevOps</li>
                  <li>MLOps, LLM apps &amp; AI agents</li>
                  <li>System design &amp; problem solving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="border-t border-[#DDD6C6] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            id="experience-title"
            num="02"
            label="Experience"
            title="Where I have worked."
            subtitle="Hands-on work across backend systems, cloud deployment and full-stack development."
            visible={!!isVisible['experience-title']}
          />
          <div className="divide-y divide-[#DDD6C6] border-y border-[#DDD6C6]">
            {experiences.map((exp: Experience, index: number) => (
              <div
                key={`${exp.company}-${exp.role}`}
                id={`experience-${index}`}
                data-animate
                className={`grid gap-6 py-10 transition-all duration-700 md:grid-cols-12 ${reveal(!!isVisible[`experience-${index}`])}`}
              >
                <div className="md:col-span-3">
                  <p className={`${MONO} text-sm text-[#3A362E]`}>{exp.period}</p>
                  {exp.note && <p className="mt-1 text-sm text-[#6B655A]">{exp.note}</p>}
                </div>
                <div className="md:col-span-9">
                  <h3 className={`${DISPLAY} text-2xl leading-tight md:text-3xl`}>{exp.role}</h3>
                  <p className="mt-1 text-lg text-[#C8461B]">{exp.company}</p>
                  <ul className="mt-5 space-y-2 text-[#3A362E]">
                    {exp.points.map((point: string) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2.5 h-px w-4 shrink-0 bg-[#C8461B]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className={`${MONO} rounded border border-[#DDD6C6] bg-[#FBF8F1] px-2.5 py-1 text-xs text-[#6B655A]`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="border-t border-[#DDD6C6] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            id="skills-title"
            num="03"
            label="Skills"
            title="What I work with."
            subtitle="Backend, cloud and DevOps tools I use day to day, with a full-stack foundation."
            visible={!!isVisible['skills-title']}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group: SkillGroup, index: number) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  id={`skill-group-${index}`}
                  data-animate
                  className={`rounded-lg border border-[#DDD6C6] bg-[#FBF8F1] p-6 transition-all duration-700 ${reveal(!!isVisible[`skill-group-${index}`])}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[#C8461B]" />
                    <h3 className={`${DISPLAY} text-xl`}>{group.title}</h3>
                  </div>
                  <ul className="space-y-2 text-[#3A362E]">
                    {group.items.map((item: string) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2.5 h-px w-3 shrink-0 bg-[#C8461B]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-[#DDD6C6] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            id="projects-title"
            num="04"
            label="Projects"
            title="Things I have built."
            subtitle="Projects that combine web development, cloud services and AI integration."
            visible={!!isVisible['projects-title']}
          />
          <div className="divide-y divide-[#DDD6C6] border-y border-[#DDD6C6]">
            {projects.map((project: ProjectItem, index: number) => (
              <div
                key={project.title}
                id={`project-${index}`}
                data-animate
                className={`grid gap-6 py-10 transition-all duration-700 md:grid-cols-12 ${reveal(!!isVisible[`project-${index}`])}`}
              >
                <p className={`${MONO} text-sm text-[#C8461B] md:col-span-2`}>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="md:col-span-10">
                  <h3 className={`${DISPLAY} text-2xl leading-tight md:text-3xl`}>{project.title}</h3>
                  <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[#6B655A]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className={`${MONO} rounded border border-[#DDD6C6] bg-[#FBF8F1] px-2.5 py-1 text-xs text-[#6B655A]`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#16140F] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[#16140F] hover:text-[#F5F1E8]"
                    >
                      <Github className="h-4 w-4" />
                      View code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#C8461B] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#16140F]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="border-t border-[#DDD6C6] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            id="achievements-title"
            num="05"
            label="Achievements"
            title="Recognition and certifications."
            visible={!!isVisible['achievements-title']}
          />
          <div className="divide-y divide-[#DDD6C6] border-y border-[#DDD6C6]">
            {recognition.map((item: Recognition, index: number) => (
              <div
                key={item.label}
                id={`achievement-${index}`}
                data-animate
                className={`grid gap-4 py-8 transition-all duration-700 md:grid-cols-12 ${reveal(!!isVisible[`achievement-${index}`])}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <p className={`${MONO} text-sm uppercase tracking-widest text-[#C8461B] md:col-span-2`}>{item.label}</p>
                <div className="md:col-span-10">
                  <h3 className={`${DISPLAY} text-xl leading-snug md:text-2xl`}>{item.title}</h3>
                  {item.extra && <p className={`${DISPLAY} mt-1 text-xl leading-snug md:text-2xl`}>{item.extra}</p>}
                  {item.description && (
                    <p className="mt-2 max-w-3xl leading-relaxed text-[#6B655A]">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#16140F] px-6 py-28 text-[#F5F1E8]">
        <div className="mx-auto max-w-6xl">
          <div
            id="contact-section"
            data-animate
            className={`transition-all duration-1000 ${reveal(!!isVisible['contact-section'])}`}
          >
            <p className={`${MONO} mb-4 text-xs uppercase tracking-[0.2em] text-[#E07A52]`}>06 — Contact</p>
            <h2 className={`${DISPLAY} text-5xl leading-[0.95] tracking-tight md:text-7xl`}>
              Let&apos;s talk<span className="text-[#E07A52]">.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#B9B2A2]">
              I am open to opportunities in backend, cloud and DevOps engineering, and always happy to
              talk about interesting projects.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8461B] px-7 py-3.5 font-medium text-white transition-colors hover:bg-[#E07A52]"
              >
                <Mail className="h-5 w-5" />
                Send email
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5F1E8]/40 px-7 py-3.5 font-medium transition-colors hover:bg-[#F5F1E8] hover:text-[#16140F]"
              >
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>

            <p className={`${MONO} mt-10 text-sm text-[#B9B2A2]`}>
              {EMAIL} · Mumbai, India
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#DDD6C6] px-6 py-8">
        <div className={`${MONO} mx-auto max-w-6xl text-center text-xs text-[#6B655A]`}>
          <p>&copy; {new Date().getFullYear()} Abhay Jaiswal. Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
