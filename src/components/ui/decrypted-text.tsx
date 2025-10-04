'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface DecryptedTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export function DecryptedText({
  children,
  delay = 0,
  duration = 50,
  className,
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Characters to use for the decryption effect
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  useEffect(() => {
    // Initial delay before starting animation
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
    }, delay);
    
    return () => clearTimeout(startTimer);
  }, [delay]);
  
  useEffect(() => {
    if (!isAnimating) return;
    
    if (currentIndex < children.length) {
      const timeout = setTimeout(() => {
        // Show random characters during the decryption effect
        const randomChars = Array(children.length - currentIndex)
          .fill('')
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join('');
        
        setDisplayText(children.slice(0, currentIndex) + randomChars);
        
        // Gradually slow down the animation as it progresses
        const speedFactor = 1 + (currentIndex / children.length) * 3;
        const currentDuration = Math.min(duration * speedFactor, 200); // Cap at 200ms
        
        const nextCharTimer = setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
        }, currentDuration);
        
        return () => clearTimeout(nextCharTimer);
      }, 30); // Small delay between character updates
      
      return () => clearTimeout(timeout);
    } else if (displayText !== children) {
      // Ensure the final text is set correctly
      setDisplayText(children);
      setIsAnimating(false);
    }
  }, [currentIndex, children, duration]);
  
  // Reset the effect when children change
  useEffect(() => {
    setCurrentIndex(0);
    setDisplayText('');
  }, [children]);
  
  return (
    <span 
      className={cn('inline-block', className)}
      {...props}
    >
      {displayText}
    </span>
  );
}
