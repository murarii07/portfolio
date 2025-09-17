"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, ArrowRight, Cloud, Database } from 'lucide-react';
import Card from './Components/Card';
import { Achievement, Project, Skill, VisibilityState } from './state.types';
import SkillCard from './Components/Skills';
// Type definitions


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

  const skills: Skill[] = [
    { name: 'Next.js', icon: Code, color: 'from-blue-400 to-blue-600', level: 'Advanced' },
    { name: 'React', icon: Code, color: 'from-cyan-400 to-cyan-600', level: 'Proficient' },
    { name: 'Python', icon: Code, color: 'from-yellow-400 to-yellow-600', level: 'Proficient' },
    { name: 'Azure Cloud', icon: Cloud, color: 'from-blue-500 to-blue-700', level: 'Advanced' },
    { name: 'Node.js', icon: Code, color: 'from-green-400 to-green-600', level: 'Native' },
    { name: 'MongoDB', icon: Database, color: 'from-green-500 to-green-700', level: 'Proficient' },
    { name: 'Docker', icon: Code, color: 'from-blue-400 to-blue-600', level: 'Proficient' }
  ];

  const projects: Project[] = [
    {
      title: 'Excel-to-Form Conversion',
      description: 'A comprehensive web-based application that converts Excel data into dynamic, interactive web forms, revolutionizing data collection processes with enhanced efficiency and security.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Next.js', 'Azure', 'Vercel', 'Authentication', 'Blob Storage'],
      githubUrl: 'https://github.com/murarii07/excel-to-form',
      features: [
        'Dynamic form generation from Excel sheets',
        'Secure user authentication system',
        'Data encryption for privacy protection',
        'Azure Blob Storage integration',
        'Frontend deployed on Vercel, backend on Azure'
      ],
      liveUrl:"https://excel-to-form.vercel.app/"
    },
    {
      title: 'Vocal Separator',
      description: 'An intelligent web application leveraging Music.ai API to accurately separate vocals from music tracks, providing professional-grade audio processing for music producers and audio enthusiasts.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      tags: ['Python', 'Music.ai API', 'Audio Processing', 'Web App'],
      githubUrl: 'https://github.com/murarii07/Vocal_Separation_From_Music',
      features: [
        'High-quality vocal extraction using AI',
        'Intuitive file upload interface',
        'Professional-grade audio output',
        'Optimized processing pipeline',
        'Support for multiple audio formats'
      ]
    },
    {
      title: 'Text-to-Image Generator',
      description: 'A creative AI-powered application that generates stunning images from text prompts using ClipDrop.ai API, hosted on Azure with Docker for scalability and seamless deployment.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop',
      tags: ['Python', 'ClipDrop.ai API', 'Azure', 'Docker', 'AI'],
      githubUrl: 'https://github.com/murarii07/Text-to-Image',
      features: [
        'AI-powered image generation from text',
        'Docker containerization for scalability',
        'Azure cloud deployment',
        'User-friendly interface design',
        'High-resolution image output'
      ]
    }
  ];

  const achievements: Achievement[] = [
    {
      title: 'Smart India Hackathon 2024',
      description: 'Participated in India\'s premier innovation challenge, demonstrating exceptional problem-solving skills and collaborative teamwork in developing cutting-edge solutions.',
      year: '2024'
    },
    {
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      description: 'Certified in Microsoft Azure fundamentals, demonstrating comprehensive understanding of cloud services, security, and Azure architecture.',
      year: '2024'
    }
  ];

  const handleNavClick = (href: string): void => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleButtonClick = (action: string): void => {
    console.log(`${action} button clicked`);
    if (action === 'GitHub') {
      window.open('https://github.com/murarii07', '_blank');
    } else if (action === 'LinkedIn') {
      window.open('https://www.linkedin.com/in/abhay-j-6b6ab325a/', '_blank');
    } else if (action === 'Email') {
      window.open('mailto:abhayaj07@gmail.com', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Abhay Jaiswal
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick('#home')} className="hover:text-gray-300 transition-colors">Home</button>
            <button onClick={() => handleNavClick('#about')} className="hover:text-gray-300 transition-colors">About</button>
            <button onClick={() => handleNavClick('#skills')} className="hover:text-gray-300 transition-colors">Skills</button>
            <button onClick={() => handleNavClick('#projects')} className="hover:text-gray-300 transition-colors">Projects</button>
            <button onClick={() => handleNavClick('#achievements')} className="hover:text-gray-300 transition-colors">Achievements</button>
            <button onClick={() => handleNavClick('#contact')} className="hover:text-gray-300 transition-colors">Contact</button>
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
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Abhay Jaiswal
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 text-gray-300">
            <span className="inline-block">Aspiring Software Developer & </span>
            <span className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Cloud Enthusiast
            </span>
          </div>
          
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate software developer with expertise in Python, Azure, and modern web technologies. 
            Building innovative solutions that bridge creativity with cutting-edge technology, 
            specializing in cloud computing and full-stack development.
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
              onClick={() => window.open('mailto:abhayaj07@gmail.com', '_blank')}
              className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transform transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/murarii07" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transform transition-all duration-300 backdrop-blur-sm"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abhay-j-6b6ab325a/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transform transition-all duration-300 backdrop-blur-sm"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:abhayaj07@gmail.com"
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
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['about-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                I'm currently pursuing my Bachelor of Science in Information Technology at Mulund College of Commerce, 
                maintaining a strong GPA of 8.0. My journey in technology is driven by curiosity and a passion for 
                solving real-world problems through innovative software solutions.
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
                    <p>☁️ Cloud Computing</p>
                    <p>🤖 Artificial Intelligence</p>
                    <p>🎨 Creative Problem Solving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div 
            id="skills-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['skills-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Proficient in modern technologies with hands-on experience in full-stack development and cloud computing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill: Skill, index: number) => {
              const Icon = skill.icon;
              return (
                <SkillCard skill={skill} index={index} isVisible={isVisible}Icon={Icon} key={skill.name} />
            
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
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['projects-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Innovative solutions showcasing my expertise in web development, cloud computing, and AI integration
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
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['achievements-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Recognition and certifications that validate my skills and dedication to continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement: Achievement, index: number) => (
              <div
                key={achievement.title}
                id={`achievement-${index}`}
                data-animate
                className={`group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 ${
                  isVisible[`achievement-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
            className={`transition-all duration-1000 ${
              isVisible['contact-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to collaborate on innovative projects and explore new opportunities. 
              Let's build something amazing together!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:abhayaj07@gmail.com"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-2xl shadow-blue-500/20"
              >
                <span className="flex items-center gap-2">
                  Send Email
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/abhay-j-6b6ab325a/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transform transition-all duration-300 backdrop-blur-sm"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="text-gray-400">
              <p className="mb-2">📧 abhayaj07@gmail.com</p>
              <p>📍 Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Abhay Jaiswal. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;