import React from 'react';
import { SKILLS } from '../data';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="min-h-screen w-full py-20 px-6 relative z-10 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Technical Neural Pathways</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {categories.map((category, idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-xl p-6 md:p-8 hover:bg-surface/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-cyan mb-6 flex items-center gap-3">
                 <span className="w-2 h-8 bg-cyan rounded-full"></span>
                 {category}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name} className="group relative">
                    <div 
                      className={`
                        px-4 py-2 rounded-lg border transition-all duration-300
                        ${skill.isPrimary 
                          ? 'bg-surface border-cyan/40 text-white shadow-[0_0_10px_rgba(0,217,255,0.1)]' 
                          : 'bg-transparent border-muted/30 text-muted hover:border-white/30 hover:text-white'
                        }
                      `}
                    >
                      <span className="font-mono text-sm font-semibold">{skill.name}</span>
                      
                      {/* Proficiency Bar (Tooltip) */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black/90 p-2 rounded text-xs border border-white/10 z-20">
                        <div className="flex justify-between mb-1">
                           <span className="text-muted">Proficiency</span>
                           <span className="text-cyan">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                           <div className="h-full bg-gradient-to-r from-cyan to-purple" style={{ width: `${skill.proficiency}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
