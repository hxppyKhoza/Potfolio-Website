import React from 'react';
import { PROJECTS } from '../data';
import { ExternalLink, FileText, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CapstoneSpotlight: React.FC = () => {
  const capstone = PROJECTS.find(p => p.id === 5); // SentiScope

  if (!capstone) return null;

  // Specific tech image for Sentiment Analysis Dashboard
  const capstoneImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600";

  return (
    <section id="capstone" className="w-full py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-background opacity-80 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-purple/5 blur-[120px] -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Visual Side */}
          <div className="w-full lg:w-3/5">
             <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-cyan/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src={capstoneImage}
                  alt="Dashboard Preview" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-white/10 z-20">
                   <span className="text-cyan font-mono text-sm flex items-center gap-2">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                     Live Classification Active
                   </span>
                </div>
             </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-2/5 space-y-8">
             <div>
                <span className="inline-block px-3 py-1 bg-purple/20 text-purple border border-purple/30 rounded-full text-sm font-bold mb-4">
                  🏆 CAPSTONE PROJECT
                </span>
                <h2 className="text-4xl font-heading font-bold text-white leading-tight mb-4">
                  {capstone.name}
                </h2>
                <p className="text-lg text-muted leading-relaxed">
                  {capstone.fullDescription}
                </p>
             </div>

             <div className="space-y-4">
                <div className="flex items-start gap-3">
                   <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                   <div>
                      <h4 className="font-bold text-white">Multi-Class Sentiment</h4>
                      <p className="text-sm text-muted">Classifies text into 5+ emotional categories with high confidence.</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                   <div>
                      <h4 className="font-bold text-white">Batch Processing</h4>
                      <p className="text-sm text-muted">Handles large datasets via CSV upload for bulk analysis.</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                   <div>
                      <h4 className="font-bold text-white">Real-Time Viz</h4>
                      <p className="text-sm text-muted">Interactive charts powered by Plotly and Streamlit.</p>
                   </div>
                </div>
             </div>

             <div className="flex gap-4 pt-4">
                <a 
                  href={capstone.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple to-cyan text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
                >
                  <ExternalLink size={20} />
                  Explore Dashboard
                </a>
                <button 
                  disabled
                  className="flex-1 bg-surface border border-white/10 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors cursor-not-allowed opacity-70"
                >
                  <FileText size={20} />
                  Tech Report
                </button>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CapstoneSpotlight;