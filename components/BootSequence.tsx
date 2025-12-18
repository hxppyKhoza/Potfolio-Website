
import React, { useState, useEffect } from 'react';
import { BOOT_MESSAGES } from '../constants';

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < BOOT_MESSAGES.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, BOOT_MESSAGES[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, Math.random() * 400 + 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onComplete]);

  return (
    <div className="fixed inset-0 bg-[#0D0208] z-[9999] flex flex-col items-start justify-start p-10 mono overflow-hidden">
      <div className="max-w-4xl w-full">
        <div className="mb-4 text-[#00FF41] opacity-50 text-xs">
          [ SYSTEM BOOTLOADER v3.1.4 ]
        </div>
        {messages.map((msg, i) => (
          <div key={i} className="mb-2 text-[#00FF41] flex gap-2 items-center">
            <span className="text-xs opacity-50">[{new Date().getTime().toString().slice(-6)}]</span>
            <span className="typing-cursor">{msg}</span>
          </div>
        ))}
        {currentIndex < BOOT_MESSAGES.length && (
          <div className="w-1 h-5 bg-[#00FF41] animate-pulse inline-block mt-2"></div>
        )}
      </div>
      
      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-[#1a1a1a]">
        <div 
          className="h-full bg-[#00FF41] transition-all duration-300" 
          style={{ width: `${(currentIndex / BOOT_MESSAGES.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default BootSequence;
