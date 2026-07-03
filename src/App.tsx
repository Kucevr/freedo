import { useState, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { Hero } from './components/sections/Hero'
import { Preloader } from './components/layout/Preloader'
import { Navbar } from './components/layout/Navbar'
import { GridLines } from './components/layout/GridLines'
import { CaseStudies } from './components/sections/CaseStudies'
import { ServicesSection } from './components/sections/ServicesSection'
import { ShowreelSection } from './components/sections/ShowreelSection'
import { ManifestoSection } from './components/sections/ManifestoSection'
import { Footer } from './components/sections/Footer'
import { Projects } from './components/pages/Projects'
import { About } from './components/pages/About'
import { Contacts } from './components/pages/Contacts'
import { ServicesPage } from './components/pages/ServicesPage'
import { FutureVision } from './components/pages/FutureVision'

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false)
  const [pages, setPages] = useState<{ path: string; key: string }[]>([
    { path: window.location.pathname, key: Date.now().toString() }
  ]);
  const pageRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isTransitioningRef = useRef(false)

  // Wait for react render then start animation
  useEffect(() => {
    if (pages.length > 1 && isTransitioningRef.current) {
      const prevKey = pages[pages.length - 2].key;
      const newKey = pages[pages.length - 1].key;
      
      const prevContainer = pageRefs.current[prevKey];
      const nextContainer = pageRefs.current[newKey];
      
      if (prevContainer && nextContainer) {
        // Prepare next container
        gsap.set(nextContainer, {
          clipPath: 'inset(100% 0% 0% 0%)',
          opacity: 1,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100svh', // to avoid mobile browser issues
          zIndex: 10,
          overflow: 'hidden', // prevent scrolling during transition
        });

        // Set origin to improve the scaling visual
        gsap.set(prevContainer, { transformOrigin: 'top center' });
        
        const tl = gsap.timeline({
          onComplete: () => {
             // Let the new page become the static flow, clear fixed styles
             gsap.set(nextContainer, { clearProps: 'all' });
             window.scrollTo(0, 0); // Jump scroll to top instantly
             setPages([pages[pages.length - 1]]); // Keep only the new page
             isTransitioningRef.current = false;
          }
        });

        tl.to(
          prevContainer,
          {
            y: '-30vh',
            opacity: 0.4,
            scale: 0.8,
            duration: 0.9,
            ease: 'expo.inOut'
          },
          0
        )
        .to(
          nextContainer,
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.9,
            ease: 'expo.inOut'
          },
          0
        );
      }
    }
  }, [pages]);

  useEffect(() => {
    const handlePopState = () => {
       const newPath = window.location.pathname;
       if (isTransitioningRef.current) return;
       isTransitioningRef.current = true;
       setPages(prev => [...prev, { path: newPath, key: Date.now().toString() }]);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleTransition = (e: Event) => {
      const { targetPath } = (e as CustomEvent<{ targetPath: string; label: string }>).detail;
      const cleanPath = targetPath.startsWith('#') ? targetPath.substring(1) : targetPath;
      
      if (isTransitioningRef.current || pages[pages.length - 1].path === cleanPath) return;
      isTransitioningRef.current = true;
      
      window.history.pushState(null, '', cleanPath);
      setPages(prev => [...prev, { path: cleanPath, key: Date.now().toString() }]);
    };
    
    window.addEventListener('page-transition', handleTransition);
    return () => window.removeEventListener('page-transition', handleTransition);
  }, [pages]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const onPathChange = () => {
      if (!isTransitioningRef.current) {
        lenis.scrollTo(0, { immediate: true });
      }
    };
    window.addEventListener('popstate', onPathChange);

    return () => {
      window.removeEventListener('popstate', onPathChange);
      lenis.destroy()
    }
  }, [])

  const renderPage = (path: string) => {
    if (path === '/') {
      return (
        <main className="bg-black min-h-[200vh] text-white w-full select-none selection:bg-white text-base selection:text-black font-sans antialiased relative">
          <GridLines />
          {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
          <Navbar />
          <Hero ready={preloaderDone} />
          <CaseStudies />
          <ServicesSection />
          <ShowreelSection />
          <ManifestoSection />
          <Footer />
        </main>
      )
    }
    if (path === '/projects') return <Projects />
    if (path === '/about') return <About />
    if (path === '/future-vision') return <FutureVision />
    if (path === '/contacts') return <Contacts />
    if (path === '/services') return <ServicesPage />
    return null;
  }

  return (
    <>
      {pages.map((page, index) => (
        <div 
          key={page.key} 
          ref={el => { pageRefs.current[page.key] = el }}
          className="page-transition-container"
          style={{
            position: index === pages.length - 1 && pages.length === 1 ? 'relative' : 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'black', // prevent seeing through edges on scale down
            zIndex: index // Natural stacking
          }}
        >
          {renderPage(page.path)}
        </div>
      ))}
    </>
  )
}

export default App

