'use client';

import { useEffect } from 'react';

/**
 * A hook that fixes the 100vh viewport issue on mobile browsers
 * where the URL bar takes up space not accounted for in vh units.
 */
export default function useMobileViewportFix() {
  useEffect(() => {
    // Function to set viewport height CSS variable
    function setViewportHeight() {
      // Create a CSS variable to use instead of 100vh
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    // Set initial value
    setViewportHeight();
    
    // Update on resize and orientation change
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);
}
