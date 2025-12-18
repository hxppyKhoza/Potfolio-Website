
import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Specific characters requested by the user
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`";
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    
    // Each drop now tracks its vertical position and its unique falling speed
    const drops = new Array(columns).fill(0).map(() => ({
      y: Math.random() * (height / fontSize),
      speed: Math.random() * 0.5 + 0.5 // Variable speeds for the "hacker" feel
    }));

    const draw = () => {
      // Create the fade trail effect using semi-transparent black
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      // Set the color for the falling characters
      ctx.fillStyle = '#00FF41';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i].y * fontSize);

        // Reset drop if it reaches the bottom, with a random delay
        if (drops[i].y * fontSize > height && Math.random() > 0.975) {
          drops[i].y = 0;
        }
        
        // Increment Y based on individual speed
        drops[i].y += drops[i].speed;
      }
    };

    // Use setInterval as requested for the 33ms timing
    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newColumns = Math.floor(width / fontSize);
      
      // Re-initialize drops on resize to fill new space
      drops.length = 0;
      for (let i = 0; i < newColumns; i++) {
        drops.push({
          y: Math.random() * (height / fontSize),
          speed: Math.random() * 0.5 + 0.5
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 pointer-events-none"
      style={{ filter: 'brightness(1.2) contrast(1.1)' }}
    />
  );
};

export default MatrixRain;
