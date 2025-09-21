import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gold-jewellery', label: 'Gold Jewellery' },
    { id: 'rates', label: 'Live Rates' },
    { id: 'branches', label: 'Branches' },
    { id: 'contact', label: 'Contact' }
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-gradient-to-r from-amber-900 to-amber-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-full border-4 border-amber-400 p-1 bg-gradient-to-br from-amber-100 to-amber-200 shadow-lg">
                <img 
                  src="/utpfundlogo.jpeg" 
                  alt="UTP Fund Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-300">UTpFUND</h1>
                <p className="text-sm text-amber-200">WE BUY GOLD</p>
              </div>
            </div>
            
            {/* 24 Section */}
            <div className="hidden sm:flex items-center space-x-2 ml-6 pl-6 border-l border-amber-600">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-amber-900 font-bold text-lg">24</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs text-amber-200 font-semibold">HOURS</p>
                <p className="text-xs text-amber-300">SERVICE</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-amber-300 focus:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300 relative px-2 py-1 rounded ${
                  activeSection === item.id 
                    ? 'text-amber-300 font-semibold' 
                    : 'text-white'
                }`}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-300 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-600">
            {/* Mobile 24 Section */}
            <div className="flex items-center justify-center space-x-3 mb-6 pb-4 border-b border-amber-600">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-amber-900 font-bold text-lg">24</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-amber-200 font-semibold">24 HOURS SERVICE</p>
                <p className="text-xs text-amber-300">Available 7 Days a Week</p>
              </div>
            </div>
            
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left hover:text-amber-300 focus:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300 py-2 px-4 rounded-lg ${
                    activeSection === item.id 
                      ? 'text-amber-300 font-semibold bg-amber-800 bg-opacity-30' 
                      : 'text-white'
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};