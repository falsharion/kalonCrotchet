"use client"
import React, { useState } from 'react';
import { Star } from 'lucide-react';

const AnimatedStars = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className=" inline-flex items-center transition-all duration-300 mx-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
      }}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={23}
          className="text-yellow-400 transition-all duration-300"
          style={{
            transform: isHovered ? `translateX(${(star - 3) * 4}px)` : 'translateX(0)',
            fill: 'currentColor',
            stroke: 'white',
            strokeWidth: 1.5,
            marginLeft: '-10px' // Adjust overlap
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedStars;
