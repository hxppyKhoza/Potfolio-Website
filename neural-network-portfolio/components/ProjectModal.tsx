import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !project) return null;

  const getProjectImage = (id: number) => {
    switch (id) {
      case 1: // FloWise Chatbot
        return "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"; 
      case 2: // MaizeGuard
        return "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=1200"; 
      case 3: // StoryForge
        return "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200"; 
      case 4: // ResumeAI
        return "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200"; 
      case 5: // SentiScope
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"; 
      case 6: // JCMS Smart City
        return "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1200"; 
      default: 
        return `https://picsum.photos/seed/${id}/1200/600`;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-high rounded-2xl border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image Placeholder */}
          <div className="h-48 md:h-64 w-full bg-gradient-to-r from-background to-surface relative overflow-hidden">
             <div className="absolute inset-0 bg-black/40 z-10" />
             <img 
                src={getProjectImage(project.id)} 
                alt={project.name} 
                className="w-full h-full object-cover"
             />
             <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>
             <div className="absolute bottom-6 left-6 z-20">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">{project.name}</h2>
                <p className="text-cyan font-mono font-bold tracking-wide">{project.category}</p>
             </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main Content */}
              <div className="flex-1 space-y-6">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Project Overview</h3>
                    <p className="text-lg font-medium text-gray-200 mb-2">{project.description}</p>
                    <p className="text-muted leading-relaxed">{project.fullDescription}</p>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-white mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1 rounded-full text-sm font-medium bg-surface border border-white/10 text-cyan">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
              </div>

              {/* Sidebar / Actions */}
              <div className="md:w-64 space-y-6 flex-shrink-0">
                 <div className="flex flex-col gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-cyan text-background font-bold hover:bg-cyan/90 transition-all shadow-[0_0_15px_rgba(0,217,255,0.3)] hover:shadow-[0_0_25px_rgba(0,217,255,0.5)]"
                    >
                        <ExternalLink size={20} />
                        View Live Demo
                    </a>
                    {project.repoUrl ? (
                         <a
                         href={project.repoUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-surface border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
                       >
                           <Github size={20} />
                           View Code
                       </a>
                    ) : (
                        <button disabled className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-surface/50 border border-white/5 text-gray-500 cursor-not-allowed">
                            <Github size={20} />
                            Code Private
                        </button>
                    )}
                 </div>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="p-4 border-t border-white/10 bg-black/20 flex justify-between items-center">
            <button onClick={onPrev} className="flex items-center gap-2 text-muted hover:text-white transition-colors group">
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                Previous Project
            </button>
            <button onClick={onNext} className="flex items-center gap-2 text-muted hover:text-white transition-colors group">
                Next Project
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;