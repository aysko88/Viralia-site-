import React, { useState, useEffect } from 'react';
import { Bot, Zap, Star } from 'lucide-react';

const FloatingCharacter = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const icons = [Bot, Zap, Star];
  const CurrentIcon = icons[currentIcon];

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Smooth following with delay
      const delay = 0.1;
      const targetX = e.clientX;
      const targetY = e.clientY;
      
      setPosition(prev => ({
        x: prev.x + (targetX - prev.x) * delay,
        y: prev.y + (targetY - prev.y) * delay
      }));
    };

    const handleScroll = () => {
      // Hide on scroll, show when scroll stops
      setIsVisible(false);
      clearTimeout(window.scrollTimer);
      window.scrollTimer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    };

    // Icon rotation
    const iconInterval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
    }, 3000);

    // Check if it's desktop
    const isDesktop = window.innerWidth > 768;
    
    if (isDesktop) {
      document.addEventListener('mousemove', handleMouseMove);
    }
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(iconInterval);
      clearTimeout(window.scrollTimer);
    };
  }, []);

  const handleClick = () => {
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 300);
  };

  return (
    <div
      className={`fixed pointer-events-none z-40 transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`relative pointer-events-auto cursor-pointer transition-all duration-300 ${
          isHovered ? 'scale-125' : 'scale-100'
        }`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-60 animate-pulse" />
        
        {/* Character container */}
        <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center border-2 border-white/20 shadow-2xl">
          {/* Animated background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 opacity-20 animate-spin-slow" />
          
          {/* Icon */}
          <CurrentIcon 
            className={`w-6 h-6 text-white relative z-10 transition-all duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Floating particles */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1 -left-2 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Speech bubble - appears on hover */}
        {isHovered && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-dark-800 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap border border-purple-500/30 animate-fadeIn">
            <div className="relative">
              Salut ! Je suis ton assistant IA 🤖
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-dark-800" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingCharacter;