import React, { useState, useEffect, useRef } from 'react';

const ScrollAnimationWrapper = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform translate-y-4 opacity-0 ${className}`}
      style={isVisible ? { 
        transform: 'translateY(0)', 
        opacity: 1 
      } : {}}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;