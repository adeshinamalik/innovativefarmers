
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  threshold?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
  direction = 'up',
  distance = 20,
  threshold = 0.1
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      case 'none':
        return 'none';
      default:
        return `translateY(${distance}px)`;
    }
  };

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : getInitialTransform(),
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`
  };

  return (
    <div 
      ref={ref} 
      style={animationStyle} 
      className={cn(className)}
    >
      {children}
    </div>
  );
}
