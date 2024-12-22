import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, FileText, Download } from 'lucide-react';

const AboutSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [curlyBracesVisible, setCurlyBracesVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const dynamicTexts = [
    "DIGITAL ARTIST",
    "CREATIVE DEVELOPER",
    "PROBLEM SOLVER",
    "UI/UX DESIGNER"
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
        current += "E";
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
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className={`max-w-4xl w-full mx-auto px-6 py-20 flex flex-col transition-all duration-1000 
        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex-grow flex flex-col items-center justify-center space-y-12 mb-24">
          {/* Profile Image */}
          <div className={`relative group transform transition-all duration-1000 
            ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
              opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
              opacity-10 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-500" />
            <img
              src={`https://github.com/adam03034/portfolio/blob/main/public/images/Adamko.jpeg?raw=true`}
              alt="Profile"
              className="relative w-48 h-64 object-cover rounded-2xl transform transition-all duration-500 
                group-hover:scale-105 group-hover:shadow-xl"
            />
          </div>

          {/* Dynamic Text */}
          <div className="text-center relative">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 flex items-center justify-center gap-2">
                <span className={`text-gray-400 transition-all duration-500 
                  ${curlyBracesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  {"{"}
                </span>
                <span className="min-w-[2ch] text-center">
                  {displayText}
                  <span className={`inline-block w-[2px] h-12 bg-gray-800 ml-1 
                    ${isTyping ? 'animate-blink' : 'opacity-0'}`} />
                </span>
                <span className={`text-gray-400 transition-all duration-500 
                  ${curlyBracesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                  {"}"}
                </span>
              </h1>
            </div>

            <p className={`text-lg md:text-xl opacity-60 max-w-2xl mx-auto transition-all duration-1000 delay-300
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Based in Europe, I create digital experiences that combine creativity with technical excellence.
            </p>
          </div>

          {/* Social Links & Downloads */}
          <div className={`flex flex-col items-center gap-8 transition-all duration-1000 delay-500 mt-8
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/adam03034"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-black/5 hover:bg-black/10 backdrop-blur-lg
                  transform hover:scale-110 transition-all duration-300 group"
              >
                <Github 
                  size={24} 
                  className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300" 
                />
              </a>
              <a
                href="https://www.linkedin.com/in/adam-wirth-983727254"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-black/5 hover:bg-blue-500/10 backdrop-blur-lg
                  transform hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin 
                  size={24} 
                  className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300" 
                />
              </a>
              <a
                href="https://www.instagram.com/wirth_adam/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-black/5 hover:bg-pink-500/10 backdrop-blur-lg
                  transform hover:scale-110 transition-all duration-300 group"
              >
                <Instagram 
                  size={24} 
                  className="text-gray-600 group-hover:text-pink-500 transition-colors duration-300" 
                />
              </a>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="/path/to/resume.pdf"
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
                  bg-gray-100 hover:bg-gray-200
                  transform hover:scale-105 transition-all duration-300 group"
              >
                <FileText 
                  size={20}
                  className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
                />
                <span>Resume</span>
              </a>
              <a
                href="/path/to/portfolio.pdf"
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                  bg-gray-100 hover:bg-gray-200
                  transform hover:scale-105 transition-all duration-300
                  group"
              >
                <Download 
                  size={20} 
                  className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300" 
                />
                <span>Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;