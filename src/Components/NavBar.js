import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 shadow-2xl fixed top-0 left-0 right-0 z-50 border-b border-gray-700 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            &lt;/AlgoFlick&gt;
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/searching', label: 'Searching' },
              { path: '/sorting', label: 'Sorting' },
              { path: '/stack', label: 'Stack' },
              { path: '/queue', label: 'Queue' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 group ${
                  isActive(item.path) 
                    ? 'text-white' 
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
                
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-600"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 rounded-lg mt-2 p-4 border border-gray-700 backdrop-blur-lg">
            <div className="flex flex-col space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/searching', label: 'Searching' },
                { path: '/sorting', label: 'Sorting' },
                { path: '/stack', label: 'Stack' },
                { path: '/queue', label: 'Queue' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-blue-200 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="ml-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse inline-block"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}