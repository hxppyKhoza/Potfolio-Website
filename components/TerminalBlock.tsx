
import React, { ReactNode } from 'react';
import { Terminal, Minus, Square, X } from 'lucide-react';

interface TerminalBlockProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
  // Fix: Added optional style property to the interface to support custom styling from parent components
  style?: React.CSSProperties;
}

const TerminalBlock: React.FC<TerminalBlockProps> = ({ title, children, className = '', id, style }) => {
  return (
    <div 
      id={id}
      // Fix: Applied the style prop to the container div
      style={style}
      className={`bg-[#1a1a1a]/90 backdrop-blur-md rounded-lg overflow-hidden border border-[#2d2d2d] shadow-2xl transition-all duration-300 hover:border-[#00FF41]/30 ${className}`}
    >
      {/* Title Bar */}
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-[#3d3d3d]">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[#00FF41]" />
          <span className="text-xs mono text-[#00FF41] font-bold tracking-widest uppercase">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-1 hover:bg-[#3d3d3d] rounded cursor-default"><Minus size={12} className="text-gray-400" /></div>
          <div className="p-1 hover:bg-[#3d3d3d] rounded cursor-default"><Square size={10} className="text-gray-400" /></div>
          <div className="p-1 hover:bg-red-500/20 rounded group cursor-default"><X size={12} className="text-gray-400 group-hover:text-red-500" /></div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-6 md:p-8">
        {children}
      </div>
    </div>
  );
};

export default TerminalBlock;
