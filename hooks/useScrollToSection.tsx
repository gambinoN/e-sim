import { useCallback } from 'react';

export function useScrollToSection() {
  return useCallback((ref: React.RefObject<HTMLElement>) => {
    if (typeof window === 'undefined' || !ref.current) return;
    
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    setTimeout(() => {
      const offset = -100;
      const elementPosition = ref.current?.getBoundingClientRect().top ?? 0;
      const scrollPosition = window.pageYOffset + elementPosition + offset;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }, 100);
  }, []);
}