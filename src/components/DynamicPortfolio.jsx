import React, { useState, useEffect, useRef } from 'react';
import Navigation from './Navigation';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';

const DynamicPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTextTransitioning, setIsTextTransitioning] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = container.clientHeight; // Zmenené z window.innerHeight
      const fullHeight = container.scrollHeight - windowHeight;
      const progress = (scrollPosition / fullHeight) * 100;
      setScrollProgress(progress);
  
      // Nová logika pre detekciu aktuálnej sekcie
      const sections = ['about', 'portfolio', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Ak je sekcia viditeľná aspoň z polovice
          if (rect.top <= windowHeight/2 && rect.bottom >= windowHeight/2) {
            // Portfolio sekcia má vždy čiernu, contact bielu, about závisí od pozície
            if (sectionId === 'portfolio') {
              setIsDarkTheme(true);
            } else if (sectionId === 'contact') {
              setIsDarkTheme(false);
            } else {
              // Pre about sekciu používame pôvodnú logiku
              const sectionProgress = Math.abs(rect.top) / rect.height;
              setIsDarkTheme(sectionProgress > 0.5);
            }
            break;
          }
        }
      }
    };
  
    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: containerRef.current,
      threshold: 0.5,
      rootMargin: '-5% 0px -5% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = [aboutRef, portfolioRef, contactRef];
    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation - upravené pre transparentné pozadie */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Navigation 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isDarkTheme={isDarkTheme}
        />
      </div>

      <main 
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        {[
          { id: 'about', ref: aboutRef, Component: AboutSection },
          { id: 'portfolio', ref: portfolioRef, Component: PortfolioSection },
          { id: 'contact', ref: contactRef, Component: ContactSection }
        ].map(({ id, ref, Component }) => (
          <section 
  key={id}
  id={id}
  ref={ref}
  className={`min-h-screen w-full snap-start transition-colors duration-700 flex items-center justify-center ${
    id === 'portfolio' ? 'bg-black text-white' : 
    id === 'contact' ? 'bg-white text-black' : 
    isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'
  }`}
>
            <Component 
              isLoaded={isLoaded}
              currentTextIndex={currentTextIndex}
              isTextTransitioning={isTextTransitioning}
            />
          </section>
        ))}
      </main>
    </div>
  );
};

export default DynamicPortfolio;