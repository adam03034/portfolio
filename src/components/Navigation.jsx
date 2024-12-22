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
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className={`text-xl font-bold hover:opacity-70 transition-all duration-300
              ${isDarkTheme ? 'text-white' : 'text-black'}`}
          >
            WIRTH STUDIO
          </a>
          {!isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:opacity-70 transition-all duration-300"
            >
              <div className="space-y-1.5">
                {[0, 1, 2].map((_, index) => (
                  <div
                    key={index}
                    className={`${index === 1 ? 'w-4 ml-auto' : 'w-6'} h-0.5 transform transition-all duration-300 ${
                      isDarkTheme ? 'text-white bg-white' : 'text-black bg-black'
                    }`}
                  />
                ))}
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 transition-all duration-700 ease-in-out z-50 ${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:opacity-70 transition-opacity p-2"
          >
            <X size={24} />
          </button>
        </div>
        <div className={`h-full flex flex-col items-center justify-center space-y-8 sm:space-y-16 transition-all duration-700 ${
          isMenuOpen ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8'
        }`}>
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-4xl sm:text-6xl lg:text-8xl text-white hover:opacity-70 transition-all duration-300
                uppercase hover:tracking-wider transform hover:scale-105 ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${activeSection === item.id ? 'text-blue-500' : 'text-white'}`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;