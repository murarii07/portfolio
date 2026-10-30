"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, ArrowRight, Cloud, Database, Server, GitBranch } from 'lucide-react';
import Card from './Components/Card';
import { Achievement, Project, Skill, VisibilityState } from './state.types';
import SkillCard from './Components/Skills';

// Local type for the new Experience section (keeps state.types.ts untouched)
interface Experience {
  role: string;
  company: string;
  period: string;
  note?: string;
  points: string[];
  tags: string[];
}

const GITHUB_URL = 'https://github.com/murarii07';
// NOTE: this matches the LinkedIn URL on your profile. Your old portfolio used a different one,
// so open this link once and confirm it is the profile you want to share.
const LINKEDIN_URL = 'https://www.linkedin.com/in/abhayjaiswal007';
const EMAIL = 'abhayaj07@gmail.com';

const HomePage: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const handleScroll = (): void => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Skill levels are self-ratings. Adjust them to what you can confidently defend in an interview.
  const skills: Skill[] = [
    { name: 'Python', icon: Code, color: 'from-yellow-400 to-yellow-600', level: 'Proficient' },
    { name: 'FastAPI', icon: Server, color: 'from-teal-400 to-teal-600', level: 'Proficient' },
    { name: 'Django', icon: Server, color: 'from-emerald-400 to-emerald-600', level: 'Proficient' },
    { name: 'PostgreSQL (Multi-tenant Design)', icon: Database, color: 'from-purple-400 to-purple-600', level: 'Proficient' },
    { name: 'GraphQL & REST APIs', icon: Server, color: 'from-pink-400 to-pink-600', level: 'Proficient' },
    { name: 'AWS', icon: Cloud, color: 'from-orange-400 to-orange-600', level: 'Proficient' },
    { name: 'Docker', icon: Code, color: 'from-blue-400 to-blue-600', level: 'Proficient' },
    { name: 'CI/CD (GitHub Actions)', icon: GitBranch, color: 'from-gray-400 to-gray-600', level: 'Proficient' },
    { name: 'Azure Cloud', icon: Cloud, color: 'from-blue-500 to-blue-700', level: 'Intermediate' },
    { name: 'Next.js', icon: Code, color: 'from-slate-400 to-slate-600', level: 'Proficient' },
    { name: 'React', icon: Code, color: 'from-cyan-400 to-cyan-600', level: 'Proficient' },
    { name: 'TypeScript', icon: Code, color: 'from-indigo-400 to-indigo-600', level: 'Intermediate' }
  ];

  const experiences: Experience[] = [
    {
      role: 'Back End Developer',
      company: 'BayNine Ventures',
      period: 'Nov 2025 – Present',
      note: 'Intern from Nov 2025 to Feb 2026, full-time since Feb 2026',
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

  const projects: Project[] = [
    {
      title: 'Excel-to-Form Conversion',
      description: 'Web application that converts Excel data into dynamic, interactive web forms, improving data collection efficiency by 40% through automation.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Next.js', 'Azure', 'Vercel', 'Blob Storage', 'CI/CD'],
      githubUrl: 'https://github.com/murarii07/excel-to-form',
      features: [
        'Dynamic form generation from Excel sheets',
        'Azure Blob Storage integration',
        'Secure backend APIs',
        'Frontend deployed on Vercel, backend on Azure',
        'Automated CI/CD deployments'
      ],
      liveUrl: 'https://excel-to-form.vercel.app/'
    },
    {
      title: 'Vocal Separator',
      description: 'Web app built on the Music.ai API that lets users upload a track and get clean, isolated vocals back for production and remixing.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      tags: ['Python', 'Music.ai API', 'Azure', 'Audio Processing'],
      githubUrl: 'https://github.com/murarii07/Vocal_Separation_From_Music',
      features: [
        'AI-based vocal extraction through the Music.ai API',
        'File upload and download interface',
        'Optimized processing pipeline',
        'Azure cloud hosting',
        'Multi-format audio support'
      ]
    },
    {
      title: 'Fake News Detection Chrome Extension',
      description: 'Browser extension that rates the credibility of news articles through an ML-based API and shows the result with a simple visual indicator. Reached the finals of the Inter-College Hackathon 2025.',
      image: 'https://images.unsplash.com/photo-1526378722478-ccf3dd4b362b?w=600&h=400&fit=crop',
      tags: ['React', 'Machine Learning API', 'Chrome Extension', 'AI'],
      githubUrl: 'https://github.com/murarii07/chromeExtension',
      features: [
        'Real-time credibility scoring of news content',
        'Color-coded indicator system',
        'Lightweight Chrome extension architecture',
        'ML API integration',
        'Promotes digital media literacy'
      ]
    }
  ];

  const achievements: Achievement[] = [
    {
      title: 'Inter-College Hackathon Finalist 2025',
      description: 'Helped build a browser-based fake news detection prototype that scores credibility with machine learning APIs, and reached the finals.',
      year: '2025'
    },
    {
      title: 'Smart India Hackathon 2024',
      description: 'Participated in India\'s national innovation challenge, working in a team on creative, practical tech solutions.',
      year: '2024'
    },
    {
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      description: 'Certified in Azure fundamentals, covering cloud concepts, core services and deployment workflows.',
      year: '2024'
    }
  ];

  const handleNavClick = (href: string): void => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems: { label: string; href: string }[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Abhay Jaiswal
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-gray-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto mt-6">
          <div className="mb-6 mt-12">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-4xl font-bold text-white">
                AJ
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Abhay Jaiswal
          </h1>

          <div className="text-xl md:text-2xl mb-8 text-gray-300">
            <span className="inline-block">Back End Developer &amp; </span>
            <span className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Cloud &amp; DevOps Builder
            </span>
          </div>

          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Back End Developer at BayNine Ventures who owns the backend end to end, from API design and
            a multi-tenant PostgreSQL schema to Dockerized deployments on AWS with CI/CD. Building toward
            DevOps, MLOps and AI engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => handleNavClick('#projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-2xl shadow-blue-500/20"
            >
              <span className="flex items-center gap-2">
                View My Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => window.open(`mailto:${EMAIL}`, '_blank')}
              className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transform transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transform transition-all duration-300 backdrop-blur-sm"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transform transition-all duration-300 backdrop-blur-sm"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transform transition-all duration-300 backdrop-blur-sm"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div
            id="about-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['about-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                I turn business requirements into clean, reliable backend services. I graduated with a
                B.Sc. in Information Technology from Mulund College of Commerce and now work on
                multi-tenant systems, APIs and cloud deployments. I am growing toward MLOps and AI
                engineering, with a focus on shipping software that is tested, measurable and dependable.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Education</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <p className="font-medium">B.Sc. Information Technology</p>
                      <p className="text-sm text-gray-400">Mulund College of Commerce (2022-2025)</p>
                      <p className="text-sm text-gray-400">GPA: 8.0/10</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Interests</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>🎵 Playing the Flute</p>
                    <p>☁️ Cloud Computing &amp; DevOps</p>
                    <p>🤖 MLOps, LLM Apps &amp; AI Agents</p>
                    <p>🧩 System Design &amp; Problem Solving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div
            id="experience-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['experience-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hands-on work across backend systems, cloud deployment and full-stack development
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp: Experience, index: number) => (
              <div
                key={`${exp.company}-${exp.role}`}
                id={`experience-${index}`}
                data-animate
                className={`p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 ${isVisible[`experience-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-lg text-blue-400">{exp.company}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-gray-300 font-medium">{exp.period}</p>
                    {exp.note && <p className="text-sm text-gray-500">{exp.note}</p>}
                  </div>
                </div>

                <ul className="list-disc pl-5 space-y-2 text-gray-400 leading-relaxed mb-6">
                  {exp.points.map((point: string) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div
            id="skills-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['skills-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Backend, cloud and DevOps tools I use day to day, with a full-stack foundation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill: Skill, index: number) => {
              const Icon = skill.icon;
              return (
                <SkillCard skill={skill} index={index} isVisible={isVisible} Icon={Icon} key={skill.name} />
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div
            id="projects-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['projects-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Projects that combine web development, cloud services and AI integration
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project: Project, index: number) => (
              <Card isVisible={isVisible} project={project} index={index} key={project.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div
            id="achievements-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['achievements-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Achievements &amp; Certifications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Recognition and certifications that reflect my commitment to continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement: Achievement, index: number) => (
              <div
                key={achievement.title}
                id={`achievement-${index}`}
                data-animate
                className={`group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 ${isVisible[`achievement-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-2xl font-bold text-black">
                    {achievement.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            id="contact-section"
            data-animate
            className={`transition-all duration-1000 ${isVisible['contact-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              I am open to opportunities in backend, cloud and DevOps engineering, and always happy to
              talk about interesting projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`mailto:${EMAIL}`}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-2xl shadow-blue-500/20"
              >
                <span className="flex items-center gap-2">
                  Send Email
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transform transition-all duration-300 backdrop-blur-sm"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="text-gray-400">
              <p className="mb-2">📧 {EMAIL}</p>
              <p>📍 Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Abhay Jaiswal. Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
