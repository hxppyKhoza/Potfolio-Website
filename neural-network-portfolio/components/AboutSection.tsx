import React from 'react';
import { TIMELINE } from '../data';
import { Download, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Profile Card (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="glass rounded-2xl p-8 sticky top-24 border border-white/5">
              
              {/* Profile Image - Large Portrait Format for Graduation Photo */}
              <div className="relative w-64 mx-auto mb-8 group">
                 {/* Glowing Gradient Border */}
                 <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan via-purple to-cyan opacity-50 group-hover:opacity-100 blur transition-all duration-500 animate-pulse-slow"></div>
                 
                 {/* Image Container */}
                 <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 bg-surface aspect-[3/4]">
                    <img 
                      src="https://raw.githubusercontent.com/hxppyKhoza/Potfolio-Website/refs/heads/main/happy-grad.jpg.jfif" 
                      alt="Happy Mathew Khoza - Graduation" 
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Prevent infinite loop
                        target.onerror = null; 
                        // Fallback to placeholder if remote image fails
                        target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";
                      }}
                    />
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
                 </div>
              </div>
              
              <div className="text-center mb-8">
                 <h2 className="text-2xl font-bold font-heading text-white">Happy Mathew Khoza</h2>
                 <p className="text-cyan font-medium">AI/ML Engineer</p>
                 <p className="text-sm text-muted mt-1">Johannesburg, South Africa</p>
              </div>

              <div className="space-y-4 mb-8 text-sm text-gray-300 leading-relaxed">
                 <p>
                   Passionate about building intelligent solutions that solve real-world problems. 
                 </p>
                 <p>
                   Recently completed an intensive 8-week AI bootcamp at CAPACITI, mastering the end-to-end ML pipeline from data ingestion to deployment.
                 </p>
                 <p>
                   Seeking opportunities to apply expertise in Python, Generative AI, and Computer Vision to innovative projects.
                 </p>
              </div>

              <div className="flex flex-col gap-4">
                 <button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold flex items-center justify-center gap-2 transition-colors">
                    <Download size={18} />
                    Download Resume
                 </button>
                 
                 <div className="flex justify-center gap-4 pt-4 border-t border-white/10">
                    <a 
                      href="https://www.linkedin.com/in/happy-khoza-47847a247/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-surface text-cyan hover:bg-cyan hover:text-background transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/hxppyKhoza" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-surface text-white hover:bg-white hover:text-background transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="mailto:hkhozx@gmail.com" 
                      className="p-2 rounded-full bg-surface text-purple hover:bg-purple hover:text-white transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline (Right) */}
          <div className="lg:col-span-8">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
             >
                <h3 className="text-3xl font-heading font-bold text-white mb-10 pl-4 border-l-4 border-cyan">
                   Bootcamp Neural Pathway
                </h3>

                <div className="relative space-y-12 pl-8 border-l-2 border-white/10 ml-4">
                   {TIMELINE.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative"
                      >
                         {/* Timeline Dot */}
                         <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background ${item.projectId === 5 ? 'bg-purple w-6 h-6 -left-[43px]' : 'bg-cyan'}`}></div>
                         
                         <div className={`glass p-6 rounded-xl border transition-colors ${item.projectId === 5 ? 'border-purple/50 bg-purple/10' : 'border-white/5 hover:border-cyan/30'}`}>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                               <span className="text-xs font-bold uppercase tracking-wider text-muted">Week {item.week}</span>
                               {item.projectId && (
                                 <span className="text-xs px-2 py-0.5 rounded bg-black/30 text-cyan">Project Completed</span>
                               )}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-muted">{item.description}</p>
                            
                            {item.projectId && (
                               <div className="mt-4 flex items-center gap-2 text-sm text-cyan font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                  View Details <ArrowRight size={14} />
                               </div>
                            )}
                         </div>
                      </motion.div>
                   ))}
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;