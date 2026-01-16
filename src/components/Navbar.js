import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold heading-gradient">
              Explore India
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-accent-orange transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="text-white hover:text-accent-orange transition-colors duration-300 font-medium"
            >
              About
            </a>
            <Link 
              to="/#map" 
              className="text-white hover:text-accent-orange transition-colors duration-300 font-medium"
            >
              States
            </Link>
            <a 
              href="#contact" 
              className="text-white hover:text-accent-orange transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-accent-orange rounded p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={toggleMenu}
                className="text-white hover:text-accent-orange transition-colors duration-300 font-medium px-4 py-2"
              >
                Home
              </Link>
              <a 
                href="#about" 
                onClick={toggleMenu}
                className="text-white hover:text-accent-orange transition-colors duration-300 font-medium px-4 py-2"
              >
                About
              </a>
              <Link 
                to="/#map" 
                onClick={toggleMenu}
                className="text-white hover:text-accent-orange transition-colors duration-300 font-medium px-4 py-2"
              >
                States
              </Link>
              <a 
                href="#contact" 
                onClick={toggleMenu}
                className="text-white hover:text-accent-orange transition-colors duration-300 font-medium px-4 py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;