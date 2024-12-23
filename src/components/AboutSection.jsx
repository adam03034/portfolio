import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, FileText } from 'lucide-react';

const AboutSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [curlyBracesVisible, setCurlyBracesVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const dynamicTexts = [
    "SOFTWARE DEV",
    "DIGITAL NOMAD",
    "WEB DESIGNER"
  ];

  const simulateTypingWithError = async (text) => {
    setIsTyping(true);
    let current = "";
    
    await new Promise(resolve => setTimeout(resolve, 500));
    setCurlyBracesVisible(true);
    
    await new Promise(resolve => setTimeout(resolve, 800));

    for (let i = 0; i < text.length; i++) {
      current += text[i];
      setDisplayText(current);
      await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 100));
      
      if (i === Math.floor(text.length * 0.7)) {
        current += "G";
        setDisplayText(current);
        await new Promise(resolve => setTimeout(resolve, 400));
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        current = current.slice(0, -1);
        setDisplayText(current);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    while (current.length > 0) {
      current = current.slice(0, -1);
      setDisplayText(current);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    setIsTyping(false);
    setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
  };

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    if (!isTyping && isLoaded) {
      simulateTypingWithError(dynamicTexts[currentTextIndex]);
    }
  }, [currentTextIndex, isTyping, isLoaded]);

  return (
    <div className="w-full min-h-[100dvh] flex items-center justify-center">
      <div className={`max-w-3xl w-full mx-auto px-6 py-12 flex flex-col transition-all duration-1000 
        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Profile Image */}
          <div className={`transform transition-all duration-1000 
            ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <div className="relative">
              <img
                src={`https://github.com/adam03034/portfolio/blob/main/public/images/Adamko.jpeg?raw=true`}
                alt="Profile"
                className="relative w-32 h-40 sm:w-40 sm:h-52 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Dynamic Text */}
          <div className="text-center relative">
            <div className="relative">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-2">
                <span className={`text-gray-400 transition-all duration-500 
                  ${curlyBracesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  {"{"}
                </span>
                <span className="min-w-[2ch] text-center">
                  {displayText}
                  <span className={`inline-block w-[2px] h-8 sm:h-10 bg-gray-800 ml-1 
                    ${isTyping ? 'animate-blink' : 'opacity-0'}`} />
                </span>
                <span className={`text-gray-400 transition-all duration-500 
                  ${curlyBracesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                  {"}"}
                </span>
              </h1>
            </div>

            <p className={`text-sm sm:text-base md:text-lg opacity-60 max-w-xl mx-auto mb-6 transition-all duration-1000 delay-300
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Based in Europe, I create digital experiences that combine creativity with technical excellence.
            </p>
          </div>

          {/* Resume Button and Social Links Container */}
          <div className="flex flex-row items-center gap-4 sm:gap-6">
            {/* Resume Button */}
            <a
              href="/path/to/resume.pdf"
              download
              className="flex items-center justify-center gap-2 px-6 py-2 rounded-xl 
                bg-gray-100 hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 group"
            >
              <FileText 
                size={18} 
                className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
              />
              <span>Resume</span>
            </a>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/adam03034"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-black/5 hover:bg-black/10 backdrop-blur-lg
                  transform hover:scale-110 transition-all duration-300 group"
              >
                <Github 
                  size={20} 
                  className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/adam-wirth-983727254"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-black/5 hover:bg-blue-500/10 backdrop-blur-lg
                  transform hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin 
                  size={20} 
                  className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/wirth_adam/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-black/5 hover:bg-pink-500/10 backdrop-blur-lg
                  transform hover:scale-110 transition-all duration-300 group"
              >
                <Instagram 
                  size={20} 
                  className="text-gray-600 group-hover:text-pink-500 transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;