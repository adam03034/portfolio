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
      {/* Fixed Header - bez pozadia */}
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
            
            {/* Hamburger Menu */}
            {!isMenuOpen && (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 relative group"
                aria-label="Open menu"
              >
                <div className="space-y-2">
                  <div className={`w-8 h-0.5 transition-all duration-300
                    ${isDarkTheme ? 'bg-white' : 'bg-black'}`} />
                  <div className={`w-6 h-0.5 transition-all duration-300
                    ${isDarkTheme ? 'bg-white' : 'bg-black'}`} />
                  <div className={`w-8 h-0.5 transition-all duration-300
                    ${isDarkTheme ? 'bg-white' : 'bg-black'}`} />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-all duration-500 ease-in-out z-[60]
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        {/* Close Button */}
        <div className="absolute top-6 right-6 z-[70]">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-white transition-transform duration-300 hover:rotate-90"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Menu Items */}
        <div className="h-full flex flex-col items-center justify-center">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
              className={`py-4 text-4xl sm:text-6xl lg:text-8xl transition-all duration-300
                uppercase tracking-wider
                ${activeSection === item.id ? 'text-gray-400' : 'text-white'}`}
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