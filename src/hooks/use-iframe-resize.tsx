
import { useEffect } from 'react';
import { initAspectRatio } from '@/lib/aspect-ratio';

export function useIframeResize() {
  useEffect(() => {
    // Initialize aspect ratio for iframe containers
    initAspectRatio();
    
    // Re-initialize on window resize
    const handleResize = () => {
      initAspectRatio();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
}
