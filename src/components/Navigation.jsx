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
        <div className={`backdrop-blur-[2px] transition-colors duration-500
          ${isDarkTheme ? 'bg-black/40' : 'bg-white/40'}`}
        >
          <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex justify-between items-center">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className={`text-xl font-bold hover:opacity-70 transition-all duration-300 cursor-pointer
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
                        className={`${index === 1 ? 'w-4 ml-auto' : 'w-6'} h-0.5 
                          ${isDarkTheme ? 'bg-white' : 'bg-black'} 
                          transform transition-all duration-300`}
                      />
                    ))}
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 transition-all duration-700 ease-in-out z-[60] 
          ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
      >
        <div className="fixed top-6 right-6 z-[70]">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:opacity-70 transition-opacity p-2"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className={`h-full flex flex-col items-center justify-center space-y-8 sm:space-y-16 
          transition-all duration-700 
          ${isMenuOpen ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8'}`}
        >
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
              className={`text-4xl sm:text-6xl lg:text-8xl hover:opacity-70 transition-all duration-300
                uppercase hover:tracking-wider transform hover:scale-105 
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                ${activeSection === item.id ? 'text-gray-400' : 'text-white'}`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
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