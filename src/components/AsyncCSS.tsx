'use client';

import { useEffect } from 'react';

export default function AsyncCSS() {
  useEffect(() => {
    // Load non-critical CSS after initial render
    const loadCSS = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/non-critical.css';
      link.media = 'print';
      link.onload = function() {
        (this as HTMLLinkElement).media = 'all';
      };
      document.head.appendChild(link);
    };

    // Load after a short delay to prioritize critical rendering
    const timer = setTimeout(loadCSS, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return null;
}
