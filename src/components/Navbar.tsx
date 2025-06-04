import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="mr-2 text-indigo-600">
            <Brain size={32} />
          </div>
          <div>
            <span className="text-xl font-bold text-indigo-900">SensoryNeural</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <a href="/#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
          <Link to="/team" className="text-gray-700 hover:text-indigo-600 transition-colors">Team</Link>
          <a href="/#roadmap" className="text-gray-700 hover:text-indigo-600 transition-colors">Roadmap</a>
          <a href="/#faq" className="text-gray-700 hover:text-indigo-600 transition-colors">FAQ</a>
          <a href="/#signup" className="btn btn-primary">Join Waitlist</a>
        </div>

        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4 space-y-4">
            <a href="/#features" onClick={handleMobileLinkClick} className="block text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
            <Link to="/team" onClick={handleMobileLinkClick} className="block text-gray-700 hover:text-indigo-600 transition-colors">Team</Link>
            <a href="/#roadmap" onClick={handleMobileLinkClick} className="block text-gray-700 hover:text-indigo-600 transition-colors">Roadmap</a>
            <a href="/#faq" onClick={handleMobileLinkClick} className="block text-gray-700 hover:text-indigo-600 transition-colors">FAQ</a>
            <a href="/#signup" onClick={handleMobileLinkClick} className="btn btn-primary w-full justify-center">Join Waitlist</a>
          </div>
        </div>
      )}
    </nav>
  );
};