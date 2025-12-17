import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface NeuralNetworkProps {
  onProjectClick: (project: Project) => void;
}

const NeuralNetwork: React.FC<NeuralNetworkProps> = ({ onProjectClick }) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate actual pixel positions based on percentage
  const getPosition = (x: number, y: number) => {
    // For mobile, we might want a different layout (linear or grid)
    // But for "interactive neural network", we'll try to keep relative positions scaled
    const isMobile = windowSize.width < 768;
    const padding = isMobile ? 40 : 100;
    
    // Increased offset to prevent overlap with the heading text
    const topOffset = isMobile ? 180 : 240;
    
    const availableWidth = windowSize.width - padding * 2;
    // Adjusted height calculation to fit within screen with larger top offset
    const availableHeight = Math.min(windowSize.height * 0.6, 600); 
    
    return {
      cx: (x / 100) * availableWidth + padding,
      cy: (y / 100) * availableHeight + topOffset
    };
  };

  // Define connections (edges)
  const connections = [
    { from: 1, to: 4 }, // Chatbot <-> Resume (GPT)
    { from: 1, to: 5 }, // Chatbot <-> Sentiment (NLP)
    { from: 2, to: 6 }, // Maize <-> JCMS (AI for Good)
    { from: 2, to: 5 }, // Maize <-> Sentiment (Analysis)
    { from: 3, to: 4 }, // Story <-> Resume (GenAI)
    { from: 3, to: 5 }, // Story <-> Sentiment (NLP)
    { from: 5, to: 6 }, // Sentiment <-> JCMS (Classification)
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {connections.map((conn, idx) => {
              const startProj = PROJECTS.find(p => p.id === conn.from);
              const endProj = PROJECTS.find(p => p.id === conn.to);
              
              if (!startProj || !endProj) return null;

              const startPos = getPosition(startProj.x, startProj.y);
              const endPos = getPosition(endProj.x, endProj.y);

              const isHovered = hoveredProject === conn.from || hoveredProject === conn.to;
              
              return (
                <g key={`${conn.from}-${conn.to}`}>
                  <line
                    x1={startPos.cx}
                    y1={startPos.cy}
                    x2={endPos.cx}
                    y2={endPos.cy}
                    stroke={isHovered ? startProj.color : "rgba(255,255,255,0.1)"}
                    strokeWidth={isHovered ? 2 : 1}
                    className="transition-all duration-500 ease-in-out"
                  />
                  {isHovered && (
                     <circle r="3" fill="#fff" filter="url(#glow)">
                        <animateMotion 
                          dur="1s" 
                          repeatCount="indefinite"
                          path={`M${startPos.cx},${startPos.cy} L${endPos.cx},${endPos.cy}`}
                        />
                     </circle>
                  )}
                </g>
              );
            })}
          </svg>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
          {PROJECTS.map((project) => {
            const pos = getPosition(project.x, project.y);
            const isHovered = hoveredProject === project.id;
            
            // Dynamic Icon
            const IconComponent = (LucideIcons as any)[project.icon] || LucideIcons.HelpCircle;

            // Size classes
            let sizeClass = "w-16 h-16";
            if (project.nodeSize === "large") sizeClass = "w-20 h-20 md:w-24 md:h-24";
            if (project.nodeSize === "extra-large") sizeClass = "w-24 h-24 md:w-32 md:h-32";

            return (
              <div 
                key={project.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                style={{ left: pos.cx, top: pos.cy }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => onProjectClick(project)}
              >
                <motion.div
                   animate={{ 
                     scale: isHovered ? 1.2 : 1,
                     boxShadow: isHovered ? `0 0 30px ${project.color}` : `0 0 0px ${project.color}`
                   }}
                   className={`${sizeClass} rounded-full bg-surface border-2 flex items-center justify-center relative z-20 transition-colors duration-300`}
                   style={{ borderColor: project.color }}
                >
                    <IconComponent 
                      color={isHovered ? "#fff" : project.color} 
                      size={project.nodeSize === 'extra-large' ? 48 : 32} 
                      className="transition-colors duration-300"
                    />
                    
                    {/* Ring Pulse for Center Node */}
                    {project.nodeSize === 'extra-large' && (
                        <div className="absolute inset-0 rounded-full border-2 border-purple animate-pulse-slow opacity-50" style={{ transform: 'scale(1.4)' }}></div>
                    )}
                </motion.div>

                {/* Tooltip Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isHovered ? 1 : 0.6, y: isHovered ? 15 : 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center w-48 pointer-events-none"
                >
                   <h3 className={`font-heading font-bold ${project.nodeSize === 'extra-large' ? 'text-lg text-cyan' : 'text-sm text-text'}`}>
                     {project.shortName}
                   </h3>
                   {isHovered && (
                     <div className="flex flex-wrap justify-center gap-1 mt-1">
                        {project.techStack.slice(0,3).map(t => (
                          <span key={t} className="text-[10px] bg-black/40 px-1.5 py-0.5 rounded text-muted">{t}</span>
                        ))}
                     </div>
                   )}
                </motion.div>
              </div>
            );
          })}
      </div>
      
      {/* Introduction Overlay */}
      <div className="absolute top-24 md:top-32 left-0 w-full text-center pointer-events-none z-0 px-4">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan via-white to-purple opacity-90">
          Neural Network Journey
        </h1>
        <p className="mt-4 text-muted max-w-lg mx-auto">
          Explore the interactive nodes below to discover my AI/ML projects.
        </p>
      </div>
    </div>
  );
};

export default NeuralNetwork;