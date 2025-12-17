import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Footer Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Let's Build the Future with AI</h2>
        <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
           I am currently seeking AI/ML opportunities where I can apply my skills in generative AI, computer vision, and NLP to solve meaningful problems.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
           <a 
             href="https://www.linkedin.com/in/happy-khoza-47847a247/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-3 px-8 py-4 bg-cyan text-background font-bold rounded-full hover:scale-105 transition-transform"
           >
              <Linkedin size={24} />
              Connect on LinkedIn
           </a>
           <a 
             href="mailto:hkhozx@gmail.com" 
             className="flex items-center gap-3 px-8 py-4 bg-surface border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
           >
              <Mail size={24} />
              Send Email
           </a>
           <a 
             href="https://github.com/hxppyKhoza" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-3 px-8 py-4 bg-surface border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
           >
              <Github size={24} />
              GitHub Profile
           </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted mb-8">
           <MapPin size={16} />
           <span>Johannesburg, South Africa</span>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;