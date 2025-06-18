import React from 'react';
import HeroText from './HeroText';
import HeroPic from './HeroPic';
import { motion } from 'framer-motion';

function HeroMain() {
  // Sparkle data with 1.5x larger base size and random durations
  const sparkles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    size: `${(Math.random() * 0.5 + 0.3) * 1.5}rem`, // 1.5x larger base size
    rotation: Math.random() * 360,
    duration: 1 + Math.random() * 3, // Random duration between 1-4s
  }));

  return (
    <div className='pt-40 pb-16 relative overflow-hidden'>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute opacity-0 pointer-events-none"
          style={{
            width: sparkle.size,
            height: sparkle.size,
            left: sparkle.x,
            top: sparkle.y,
            transform: `rotate(${sparkle.rotation}deg)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1.5, 0],
            rotate: [sparkle.rotation, sparkle.rotation + 20] // Subtle rotation
          }}
          transition={{
            duration: sparkle.duration, // Random duration
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        >
          {/* Star SVG with twinkle effect */}
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-full h-full drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </motion.div>
      ))}

      <div className='flex md:flex-row sm:flex max-w-[1200px] mx-auto justify-between items-center relative px-4'>
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
}

export default HeroMain;