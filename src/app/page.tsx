"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, ArrowRight, LucideIcon } from 'lucide-react';

// Type definitions
interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface VisibilityState {
  [key: string]: boolean;
}

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
    { name: 'Frontend Development', icon: Code, color: 'from-white to-gray-400' },
    { name: 'UI/UX Design', icon: Palette, color: 'from-gray-400 to-gray-600' },
    { name: 'Mobile Development', icon: Smartphone, color: 'from-gray-200 to-gray-500' }
  ];

  const projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric auth',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      tags: ['React Native', 'Firebase', 'TypeScript']
    },
    {
      title: 'Design System',
      description: 'Comprehensive design system for enterprise applications',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop',
      tags: ['Figma', 'Storybook', 'CSS']
    }
  ];

  const handleNavClick = (href: string): void => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleButtonClick = (action: string): void => {
    console.log(`${action} button clicked`);
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick('#home')} className="hover:text-gray-300 transition-colors">Home</button>
            <button onClick={() => handleNavClick('#about')} className="hover:text-gray-300 transition-colors">About</button>
            <button onClick={() => handleNavClick('#projects')} className="hover:text-gray-300 transition-colors">Projects</button>
            <button onClick={() => handleNavClick('#contact')} className="hover:text-gray-300 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-white to-gray-400 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-4xl font-bold text-white">
                JS
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent animate-pulse">
            Abhay Jaiswal
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 text-gray-300">
            <span className="inline-block">Full Stack Developer & </span>
            <span className="inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-semibold">
              UI/UX Designer
            </span>
          </div>
          
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, functional, and user-centered digital experiences 
            with modern technologies and creative problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => handleButtonClick('View Work')}
              className="group px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-2xl shadow-white/10"
            >
              <span className="flex items-center gap-2">
                View My Work 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => handleButtonClick('Download Resume')}
              className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transform transition-all duration-300 backdrop-blur-sm"
            >
              Download Resume
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              onClick={(e: React.MouseEvent) => {e.preventDefault(); handleButtonClick('GitHub');}}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transform transition-all duration-300 backdrop-blur-sm"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              onClick={(e: React.MouseEvent) => {e.preventDefault(); handleButtonClick('LinkedIn');}}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transform transition-all duration-300 backdrop-blur-sm"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              onClick={(e: React.MouseEvent) => {e.preventDefault(); handleButtonClick('Email');}}
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
              What I Do
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized in creating exceptional digital experiences through code and design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill: Skill, index: number) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  id={`skill-${index}`}
                  data-animate
                  className={`group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 ${
                    isVisible[`skill-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Creating intuitive and engaging user experiences with cutting-edge technologies and best practices.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
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
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => (
              <div
                key={project.title}
                id={`project-${index}`}
                data-animate
                className={`group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 cursor-pointer ${
                  isVisible[`project-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => handleButtonClick(`Project: ${project.title}`)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button 
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      handleButtonClick(`External Link: ${project.title}`);
                    }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-gray-300 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => handleButtonClick('View All Projects')}
              className="px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-2xl shadow-white/10"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            id="cta-section"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleButtonClick('Contact')}
                className="group px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-2xl shadow-white/10"
              >
                <span className="flex items-center gap-2">
                  Get In Touch 
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => handleButtonClick('View Resume')}
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transform transition-all duration-300 backdrop-blur-sm"
              >
                View Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;