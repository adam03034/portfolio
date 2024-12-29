import React from 'react';
import { X } from 'lucide-react';

const Navigation = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  isDarkTheme
}) => {
  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <a
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className={`text-xl font-bold cursor-pointer
                ${isDarkTheme ? 'text-white' : 'text-black'}`}
            >
              WIRTH STUDIO
            </a>

            {/* Hamburger Menu Button */}
            {!isMenuOpen && (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 relative group"
                aria-label="Open menu"
              >
                <div className="space-y-2">
                  <div className={`w-8 h-0.5 transform transition-all duration-300 origin-right
                    ${isDarkTheme ? 'bg-white' : 'bg-black'}
                    group-hover:scale-x-100 scale-x-100`} />
                  <div className={`w-6 h-0.5 transform transition-all duration-300 origin-right
                    ${isDarkTheme ? 'bg-white' : 'bg-black'}
                    group-hover:scale-x-100 scale-x-75 ml-auto`} />
                  <div className={`w-8 h-0.5 transform transition-all duration-300 origin-right
                    ${isDarkTheme ? 'bg-white' : 'bg-black'}
                    group-hover:scale-x-100 scale-x-100`} />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Menu Overlay with Right Side Animation */}
      <div
        className={`fixed inset-0 transition-transform duration-700 ease-in-out z-[60]
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Black Background with Opacity Animation */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-700
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Close Button */}
        <div className={`absolute top-6 right-6 z-[70] transition-transform duration-500 delay-300
          ${isMenuOpen ? 'translate-x-0 rotate-0' : 'translate-x-full rotate-180'}`}>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-white transition-transform duration-300 hover:rotate-90"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items with Staggered Animation */}
        <div className="h-full flex flex-col items-center justify-center relative z-[65]">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
              className={`py-4 text-4xl sm:text-6xl lg:text-8xl transition-all duration-500
                uppercase tracking-wider transform
                ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                ${activeSection === item.id ? 'text-gray-400' : 'text-white'}`}
              style={{
                transitionDelay: `${index * 100 + 200}ms`
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;