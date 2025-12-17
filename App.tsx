import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import NeuralNetwork from './components/NeuralNetwork';
import SkillsSection from './components/SkillsSection';
import CapstoneSpotlight from './components/CapstoneSpotlight';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';
import { PROJECTS } from './data';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIndex]);
  };

  const navLinks = [
    { name: 'Projects', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Capstone', href: '#capstone' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-cyan selection:text-background">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-4 glass">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan to-purple flex items-center justify-center font-bold text-white text-lg">
              A
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">AI Engineer</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted hover:text-cyan transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background pt-24 px-6 md:hidden">
           <div className="flex flex-col gap-6 text-2xl font-heading font-bold">
            {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white hover:text-cyan cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
           </div>
        </div>
      )}

      {/* Hero / Neural Network */}
      <section id="home" className="min-h-screen pt-16 relative">
         <NeuralNetwork onProjectClick={handleProjectClick} />
         
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-xs text-muted mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-cyan rounded-full"></div>
            </div>
         </div>
      </section>

      <SkillsSection />
      
      <CapstoneSpotlight />
      
      <AboutSection />
      
      <ContactSection />

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onNext={handleNextProject}
        onPrev={handlePrevProject}
      />
    </div>
  );
};

export default App;