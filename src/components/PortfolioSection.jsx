import React from 'react';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = ({ portfolioRef }) => {
  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="min-h-screen snap-start relative overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Centered Section Header */}
        <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
  Portfolio
</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent projects. Click on any project to view details.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.githubUrl)}
              className="group relative aspect-video sm:aspect-square bg-opacity-10 
                bg-white rounded-xl overflow-hidden cursor-pointer 
                transform transition-all duration-500 hover:scale-102 hover:shadow-xl"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 
                  group-hover:scale-105"
              />
              
              {/* Project Info Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 
                bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="transform translate-y-4 group-hover:translate-y-0 
                  transition-transform duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white text-lg sm:text-xl font-bold">
                      {project.title}
                    </h3>
                    <ExternalLink className="text-white/80 w-5 h-5" />
                  </div>
                  
                  <p className="text-white/80 text-sm mb-4 line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-white/20 rounded-full text-white 
                          backdrop-blur-sm transform transition-transform duration-300 
                          hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Projects count */}
        <div className="mt-8 sm:mt-12 text-center text-sm text-gray-500">
          Showing {projects.length} projects
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;