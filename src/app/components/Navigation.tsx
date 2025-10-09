'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Theme management
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    const nextTheme = saved === 'light' || saved === 'dark' ? saved : (prefersDark ? 'dark' : 'light');
    setTheme(nextTheme);
    if (typeof document !== 'undefined') {
      document.body.classList.remove('light-theme', 'dark-theme');
      document.body.classList.add(nextTheme === 'dark' ? 'dark-theme' : 'light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (typeof document !== 'undefined') {
      document.body.classList.remove('light-theme', 'dark-theme');
      document.body.classList.add(next === 'dark' ? 'dark-theme' : 'light-theme');
      localStorage.setItem('theme', next);
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Show navbar when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      
      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  // NEW: mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/70 backdrop-blur-md border-b border-gray-400/30 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between p-4 md:p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className="relative">
            <div className="w-20 h-20 md:w-12 md:h-12 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/images/1.png"
                alt="ANAYANEX Logo"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
            </div>
            {/* <div className="absolute inset-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-white-400/20 via-blue-500/20 to-purple-600/20 rounded-xl blur-md -z-10">
            </div> */}
          </div>
          
          {/* Company name */}
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-[var(--foreground)] ml-[-6px]">ANAYANEX</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[var(--foreground)] hover:opacity-80 transition-colors">Home</Link>
          <Link href="/about" className="text-[var(--foreground)] hover:opacity-80 transition-colors">About Us</Link>
          <Link href="/portfolio" className="text-[var(--foreground)] hover:opacity-80 transition-colors">Portfolio</Link>
          <Link href="/services" className="text-[var(--foreground)] hover:opacity-80 transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
          <Link href="/blog" className="text-[var(--foreground)] hover:opacity-80 transition-colors">Blog</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="border border-[var(--foreground)] text-[var(--foreground)] w-9 h-9 md:w-10 md:h-10 rounded-full grid place-items-center hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
          >
            {theme === 'dark' ? (
              // Sun icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              // Moon icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>
          <Link
            href="/join"
            className="hidden md:inline-block border border-[var(--foreground)] text-[var(--foreground)] px-5 py-2 rounded-full font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
          >
            Join Our Team
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden border border-[var(--foreground)] text-[var(--foreground)] w-10 h-10 rounded-lg grid place-items-center"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            {/* Simple hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-400/30 bg-[var(--background)]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            <Link href="/" className="block text-[var(--foreground)] py-2">Home</Link>
            <Link href="/about" className="block text-[var(--foreground)] py-2">About Us</Link>
            <Link href="/portfolio" className="block text-[var(--foreground)] py-2">Portfolio</Link>
            <Link href="/services" className="block text-[var(--foreground)] py-2">Services</Link>
            <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
            <Link href="/blog" className="block text-[var(--foreground)] py-2">Blog</Link>
            <Link
              href="/join"
              className="block border border-[var(--foreground)] text-[var(--foreground)] px-4 py-2 rounded-full font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
            >
              Join Our Team
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
}