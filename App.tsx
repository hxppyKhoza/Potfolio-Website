import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Download, BrainCircuit, Code2, Send, Play, Loader2, CheckCircle2 } from 'lucide-react';
import TerminalBlock from './components/TerminalBlock';
import BootSequence from './components/BootSequence';
import { PROJECTS, SKILLS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [booting, setBooting] = useState(true);
  const [tagline, setTagline] = useState('');
  const [expandedProjects, setExpandedProjects] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const fullTagline = "> Architecting intelligence. Decentralizing the future_";

  const capstoneProject = PROJECTS.find(p => p.id === '5') || PROJECTS[0];

  useEffect(() => {
    if (!booting) {
      let i = 0;
      const interval = setInterval(() => {
        setTagline(fullTagline.slice(0, i));
        i++;
        if (i > fullTagline.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [booting]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending || isSent) return;

    setIsSending(true);

    // Simulated network latency for hacker aesthetic
    await new Promise(resolve => setTimeout(resolve, 2000));

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:hkhoz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setIsSending(false);
    setIsSent(true);

    // Reset after some time
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen relative text-gray-200 selection:bg-[#00FF41] selection:text-[#0D0208] z-10 bg-transparent">
      {booting ? (
        <BootSequence onComplete={() => setBooting(false)} />
      ) : (
        <>
          {/* Sticky Nav */}
          <nav className="fixed top-0 left-0 w-full z-40 bg-[#0D0208]/80 backdrop-blur-md border-b border-[#2d2d2d]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 mono text-sm font-bold text-[#00FF41]">GUEST@HAPPY_KHOZA:~$</span>
              </div>
              <div className="hidden md:flex items-center gap-8 mono text-xs">
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="hover:text-[#00FF41] transition-colors"
                >./ABOUT</a>
                <a 
                  href="#skills" 
                  onClick={(e) => scrollToSection(e, 'skills')}
                  className="hover:text-[#00FF41] transition-colors"
                >./SKILLS</a>
                <a 
                  href="#capstone" 
                  onClick={(e) => scrollToSection(e, 'capstone')}
                  className="hover:text-[#b24bf3] transition-colors"
                >./CAPSTONE</a>
                <a 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, 'projects')}
                  className="hover:text-[#00FF41] transition-colors"
                >./PROJECTS</a>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="hover:text-[#00FF41] transition-colors"
                >./CONTACT</a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/hxppyKhoza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF41] transition-colors"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/happy-khoza-47847a247/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF41] transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-24 bg-transparent">
            
            {/* Hero Section */}
            <section id="hero" className="min-h-[60vh] flex flex-col justify-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mono text-[#00FF41] leading-tight tracking-tighter">
                  HAPPY_KHOZA
                </h1>
                <div className="flex items-center gap-4">
                  <span className="bg-[#00FF41] text-[#0D0208] px-3 py-1 text-sm font-bold uppercase mono">AI Specialist</span>
                  <span className="text-gray-400 mono text-sm">v4.1.0-PRODUCTION</span>
                </div>
                <p className="text-xl md:text-2xl mono text-[#00FF41]/70 h-12">
                  {tagline}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#projects" 
                    onClick={(e) => scrollToSection(e, 'projects')}
                    className="group relative px-8 py-4 bg-[#00FF41] text-[#0D0208] font-bold mono flex items-center gap-2 overflow-hidden"
                  >
                    <span className="relative z-10">ACCESS_REPOS</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                  </a>
                  <a 
                    href="https://raw.githubusercontent.com/hxppyKhoza/Potfolio-Website/main/2025%20Happy_Khoza%20%20CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="px-8 py-4 border border-[#00FF41] text-[#00FF41] font-bold mono flex items-center gap-2 hover:bg-[#00FF41]/10 transition-colors"
                  >
                    DOWNLOAD_INTEL.PDF <Download size={18} />
                  </a>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about">
              <TerminalBlock title="BIOGRAPHIC_LOG --LEVEL_1">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed text-gray-300 font-bold mono text-[#00FF41]">
                        AI/ML Developer. Prompt Engineer
                      </p>
                      <p className="text-base leading-relaxed text-gray-400">
                        I build intelligent systems that learn, adapt, and execute. Python is my weapon. Neural networks are my craft. Whether it's training transformers, deploying ML pipelines, or reverse-engineering patterns from chaos , I turn data into power.
                      </p>
                      <p className="text-base leading-relaxed text-gray-400 italic border-l-2 border-[#00FF41] pl-4">
                        The future isn't predicted. It's coded.
                      </p>
                    </div>
                    <div className="space-y-4 pt-4">
                      <div className="flex items-start gap-4">
                        <BrainCircuit className="text-[#00FF41] mt-1" size={20} />
                        <div>
                          <h4 className="font-bold text-white uppercase tracking-wider">Cognitive Systems</h4>
                          <p className="text-sm text-gray-400">Architecting neural networks that simulate domain expertise in niche sectors like agriculture and smart cities.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Code2 className="text-[#00FF41] mt-1" size={20} />
                        <div>
                          <h4 className="font-bold text-white uppercase tracking-wider">Algorithmic Integrity</h4>
                          <p className="text-sm text-gray-400">Committed to robust, ethical AI deployment with transparency in prompt engineering and model training.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF41] to-[#008f11] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-[#2d2d2d] bg-[#0D0208] flex items-center justify-center">
                      <img 
                        src="https://raw.githubusercontent.com/hxppyKhoza/Potfolio-Website/main/happy-grad.jpg.jfif" 
                        alt="Happy Mathew Khoza - Profile" 
                        className="w-full h-full object-cover object-[center_15%] opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl" 
                      />
                      <div className="absolute inset-0 bg-[#00FF41]/15 pointer-events-none z-20"></div>
                      <div className="absolute bottom-4 right-4 mono text-[10px] text-[#00FF41] animate-pulse z-30 bg-black/40 px-2 py-1 rounded">
                        UPLINK_STATUS: SECURE
                      </div>
                    </div>
                  </div>
                </div>
              </TerminalBlock>
            </section>

            {/* Technical Skills */}
            <section id="skills">
              <h2 className="text-3xl font-black mono text-[#00FF41] mb-8 flex items-center gap-4">
                <span className="opacity-30">03.</span> ./SKILL_NODES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                <TerminalBlock title="LANGUAGE_RESOURCES" className="h-fit">
                  <div className="space-y-6">
                    {SKILLS.filter(s => s.category === 'Language').map((skill) => (
                      <SkillItem key={skill.name} skill={skill} />
                    ))}
                  </div>
                </TerminalBlock>
                <TerminalBlock title="AI_&_NLP_ENGINES" className="h-fit">
                  <div className="space-y-6">
                    {SKILLS.filter(s => s.category === 'AI/ML').map((skill) => (
                      <SkillItem key={skill.name} skill={skill} />
                    ))}
                  </div>
                </TerminalBlock>
                <TerminalBlock title="DEVELOPMENT_TOOLS" className="h-fit">
                  <div className="space-y-6">
                    {SKILLS.filter(s => ['Frontend', 'Backend', 'Tool'].includes(s.category)).map((skill) => (
                      <SkillItem key={skill.name} skill={skill} />
                    ))}
                  </div>
                </TerminalBlock>
              </div>
            </section>

            {/* Capstone Showcase */}
            <section id="capstone">
              <h2 className="text-3xl font-black mono text-[#b24bf3] mb-8 flex items-center gap-4">
                <span className="opacity-30">04.</span> ./CAPSTONE_REVEAL
              </h2>
              <TerminalBlock 
                title={`CENTRAL_NODE: ${capstoneProject.title.toUpperCase()}`} 
                className="border-[#b24bf3] shadow-[0_0_30px_rgba(178,75,243,0.3)] min-h-[500px]"
              >
                <div className="grid lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-3 space-y-8">
                    <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-[#b24bf3]/50 bg-black group">
                      <img src={capstoneProject.imageUrl} alt="Capstone" className="w-full h-full object-cover opacity-50 transition-opacity group-hover:opacity-100" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <a href={capstoneProject.demoUrl} target="_blank" rel="noopener noreferrer" className="w-20 h-20 rounded-full bg-[#b24bf3]/20 border-2 border-[#b24bf3] flex items-center justify-center text-[#b24bf3] hover:scale-110 transition-transform hover:shadow-[0_0_20px_#b24bf3]">
                          <ExternalLink size={32} />
                        </a>
                      </div>
                      <div className="absolute top-6 left-6 bg-[#b24bf3] text-white text-xs px-3 py-1 font-bold mono shadow-lg">NODE_SIZE: EXTRA LARGE</div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 space-y-8 flex flex-col justify-center">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl drop-shadow-[0_0_10px_#b24bf3]">{capstoneProject.icon}</span>
                        <h3 className="text-3xl font-bold text-white mono leading-tight">{capstoneProject.title}</h3>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed">{capstoneProject.longDescription}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                       {capstoneProject.tags.map(tag => (
                        <span key={tag} className="text-xs mono px-3 py-1.5 bg-[#b24bf3]/10 text-[#b24bf3] border border-[#b24bf3]/30 uppercase">{tag}</span>
                      ))}
                    </div>
                    <div className="space-y-3 pt-6 border-t border-[#b24bf3]/20">
                      <div className="flex justify-between text-xs mono uppercase tracking-widest">
                        <span>SENTIMENT_CLASSIFICATION_ACCURACY</span>
                        <span className="text-[#b24bf3] font-bold">94.2%</span>
                      </div>
                      <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#b24bf3] via-[#b24bf3] to-[#00d9ff] w-[94.2%] animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex gap-6 pt-6">
                      <a href={capstoneProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-[#b24bf3] text-white text-center mono font-bold hover:shadow-[0_0_25px_#b24bf3] transition-all transform hover:-translate-y-1 text-sm">LIVE_UPLINK</a>
                      <a href={capstoneProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 border-2 border-[#b24bf3] text-[#b24bf3] mono font-bold hover:bg-[#b24bf3]/10 transition-all text-center text-sm">SOURCE_LOGS</a>
                    </div>
                  </div>
                </div>
              </TerminalBlock>
            </section>

            {/* Featured Projects Grid */}
            <section id="projects">
              <div className="flex items-end justify-between mb-8">
                <h2 className="text-3xl font-black mono text-[#00FF41] flex items-center gap-4">
                  <span className="opacity-30">05.</span> ./ACTIVE_REPOS
                </h2>
                <button 
                  onClick={() => setExpandedProjects(!expandedProjects)}
                  className="text-[#00FF41] mono text-sm hover:underline flex items-center gap-2"
                >
                  {expandedProjects ? 'CLOSE_DATABASE' : 'EXPAND_LOGS'} <ChevronDown size={16} className={expandedProjects ? 'rotate-180' : ''} />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.filter(p => p.id !== '5').map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {expandedProjects && (
                <div className="mt-12 animate-in fade-in slide-in-from-top-4 duration-500">
                  <TerminalBlock title="ARCHIVAL_PROJECT_INDEX">
                    <div className="overflow-x-auto">
                      <table className="w-full mono text-xs">
                        <thead>
                          <tr className="border-b border-[#3d3d3d] text-[#00FF41]">
                            <th className="text-left py-3 px-4">UID</th>
                            <th className="text-left py-3 px-4">CLASSIFICATION</th>
                            <th className="text-left py-3 px-4">HEALTH</th>
                            <th className="text-left py-3 px-4">DATA_LINK</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-400">
                          {PROJECTS.map(p => (
                            <tr key={p.id} className="border-b border-[#2d2d2d] hover:bg-[#00FF41]/5 transition-colors">
                              <td className="py-3 px-4">00{p.id}</td>
                              <td className="py-3 px-4">{p.category?.toUpperCase() || 'GENERAL'}</td>
                              <td className="py-3 px-4"><span className="text-green-500">STABLE</span></td>
                              <td className="py-3 px-4"><a href={p.demoUrl} className="text-[#00FF41] hover:underline" target="_blank">ACCESS_DEMO</a></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TerminalBlock>
                </div>
              )}
            </section>

            {/* Contact Section */}
            <section id="contact" className="max-w-2xl mx-auto">
              <TerminalBlock title="COMMUNICATION_UPLINK">
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="space-y-2">
                    <label className="mono text-xs text-[#00FF41] uppercase tracking-widest">Source Identifier</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-[#00FF41] opacity-50 mono text-sm">$</span>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="your_name" 
                        className="w-full bg-[#0D0208] border border-[#2d2d2d] rounded px-8 py-3 mono text-sm focus:outline-none focus:border-[#00FF41] transition-colors placeholder:opacity-30"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="mono text-xs text-[#00FF41] uppercase tracking-widest">Protocol (Email)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-[#00FF41] opacity-50 mono text-sm">$</span>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="secure_email" 
                        className="w-full bg-[#0D0208] border border-[#2d2d2d] rounded px-8 py-3 mono text-sm focus:outline-none focus:border-[#00FF41] transition-colors placeholder:opacity-30"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="mono text-xs text-[#00FF41] uppercase tracking-widest">Payload</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-[#00FF41] opacity-50 mono text-sm">$</span>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="message_body" 
                        className="w-full bg-[#0D0208] border border-[#2d2d2d] rounded px-8 py-3 mono text-sm focus:outline-none focus:border-[#00FF41] transition-colors placeholder:opacity-30 resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <button 
                    disabled={isSending || isSent}
                    type="submit"
                    className={`w-full group py-4 font-bold mono flex items-center justify-center gap-2 transition-all ${
                      isSent 
                        ? 'bg-green-500/20 text-green-500 border border-green-500 cursor-default' 
                        : 'bg-[#00FF41] text-[#0D0208] hover:shadow-[0_0_25px_rgba(0,255,65,0.4)]'
                    }`}
                  >
                    {isSending ? (
                      <>ENCRYPTING_AND_ROUTING... <Loader2 size={18} className="animate-spin" /></>
                    ) : isSent ? (
                      <>UPLINK_SUCCESSFUL <CheckCircle2 size={18} /></>
                    ) : (
                      <>EXECUTE_SEND <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                  {isSent && (
                    <p className="text-[10px] mono text-center text-green-500/70 animate-pulse">
                      SYSTEM_NOTE: Mail client initialization complete. Forwarding payload to hkhoz@gmail.com
                    </p>
                  )}
                </form>
              </TerminalBlock>
            </section>

          </main>

          {/* Footer */}
          <footer className="border-t border-[#2d2d2d] py-12 px-6 bg-transparent">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="mono text-xs text-gray-500">
                <p>© 2024 HAPPY MATHEW KHOZA // AI & ML ARCHITECT</p>
                <p className="mt-2 text-[#00FF41]/30 uppercase">SECURITY: END-TO-END | BUILD: STABLE_RELEASE_4.1</p>
              </div>
              <div className="flex items-center gap-6">
                <a href="https://github.com/hxppyKhoza" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#00FF41] transition-colors mono text-xs uppercase">
                  <Github size={16} /> REPOS
                </a>
                <a href="https://www.linkedin.com/in/happy-khoza-47847a247/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#00FF41] transition-colors mono text-xs uppercase">
                  <Linkedin size={16} /> CONNECT
                </a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

/* Internal Components */

const SkillItem: React.FC<{ skill: any }> = ({ skill }) => (
  <div className="space-y-2 group">
    <div className="flex justify-between items-center mono text-xs">
      <span className="text-gray-300 group-hover:text-[#00FF41] transition-colors uppercase tracking-widest">{skill.name}</span>
      <span className="text-[#00FF41]/60">{skill.level}%</span>
    </div>
    <div className="h-1 w-full bg-black/50 border border-[#2d2d2d] overflow-hidden">
      <div 
        className="h-full bg-[#00FF41] opacity-70 group-hover:opacity-100 transition-all duration-1000" 
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [flipped, setFlipped] = useState(false);
  const color = project.color || '#00FF41';

  return (
    <div 
      className={`relative h-[540px] w-full [perspective:1000px] group cursor-pointer`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* Front Face */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <TerminalBlock 
            title={`LOG:00${project.id}`} 
            className={`h-full !p-0 border-opacity-30 hover:border-opacity-100 shadow-lg flex flex-col`}
            style={{ borderColor: flipped ? 'transparent' : `${color}44` }}
          >
            <div className="h-full flex flex-col bg-transparent">
              <div className="h-44 relative overflow-hidden shrink-0">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
                <div className="absolute top-4 right-4 text-4xl opacity-80 group-hover:scale-125 transition-transform drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                  {project.icon}
                </div>
                <div className="absolute bottom-4 left-4 text-[10px] mono text-white/50 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded border border-white/10">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mono text-white mb-2 leading-tight transition-colors" style={{ color: flipped ? 'white' : color }}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-4 mono leading-relaxed mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="text-[9px] mono px-2 py-0.5 border border-[#3d3d3d] text-gray-500 rounded uppercase tracking-tighter" style={{ color: `${color}cc`, borderColor: `${color}33` }}>{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 space-y-4">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-3 bg-[#00FF41]/10 border border-[#00FF41]/40 flex items-center justify-center gap-2 mono text-xs font-bold text-[#00FF41] hover:bg-[#00FF41] hover:text-[#0D0208] transition-all"
                  >
                    <Play size={14} /> LIVE_DEMO
                  </a>
                  
                  <div className="text-[10px] mono text-[#00FF41] animate-pulse uppercase font-bold tracking-widest text-center">
                    [ CLICK_FOR_ANALYSIS ]
                  </div>
                </div>
              </div>
            </div>
          </TerminalBlock>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <TerminalBlock 
            title="DECRYPTED_METADATA" 
            className="h-full flex flex-col"
            style={{ borderColor: `${color}aa` }}
          >
            <div className="h-full flex flex-col justify-between bg-transparent">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.icon}</span>
                  <h3 className="text-lg font-bold mono text-white leading-tight">{project.title}</h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed mono">{project.longDescription}</p>
                <div className="space-y-1">
                  <p className="text-[9px] mono uppercase opacity-50" style={{ color }}>TECH_STUB:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] mono text-gray-500 bg-white/5 px-1.5 py-0.5 border border-white/5 uppercase tracking-tighter">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-6">
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3 text-center mono text-xs font-bold transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  style={{ backgroundColor: color, color: '#000' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={14} /> ACCESS_LIVE_NODE
                </a>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 border text-center mono text-xs font-bold transition-all hover:bg-white/5 flex items-center justify-center gap-2"
                  style={{ borderColor: color, color: color }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Github size={14} /> SOURCE_LOGS
                </a>
                <button 
                  className="w-full py-2 mono text-[10px] uppercase opacity-50 hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlipped(false);
                  }}
                >
                  [ RETURN_LOG ]
                </button>
              </div>
            </div>
          </TerminalBlock>
        </div>
      </div>
    </div>
  );
}

export default App;