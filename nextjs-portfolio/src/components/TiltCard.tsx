"use client";

import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  delay?: number;
}

export default function TiltCard({ children, delay = 0 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-10 to 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none',
      zIndex: 10
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease',
      zIndex: 1
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        animation: `fadeUp3D 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s backwards`,
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
      className="bento-card dark 3d-card"
    >
      <div style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </div>
  );
}
