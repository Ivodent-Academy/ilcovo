import React from 'react';

// --- Import the images using relative paths ---
// Assuming Hero.tsx is in 'src/components/' and images are in 'src/components/images/'
import logoSrc from './images/logo-il-covo-white.png';
import backgroundSrc from './images/DJI_0010.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Background image - Use the imported variable */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" // Consider bg-cover for full screen
        style={{
          // Use the imported variable in a template literal for the background image URL
          backgroundImage: `url(${backgroundSrc})`,
          // Optional: Add a fallback background color if the image fails to load
          backgroundColor: '#333',
        }}
      ></div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Centered Logo - Use the imported variable */}
        <img
          // Use the imported variable directly as the src attribute value
          src={logoSrc}
          alt="Il Covo Logo"
          className="w-48 h-auto mb-6 animate-fade-in"
          // Add error handling for the image if needed
          onError={(e) => {
            const target = e.target as HTMLImageElement; // Type assertion
            target.style.display = 'none'; /* Hide if broken */
            // Optionally log an error or show a placeholder
            // The target.src here will likely show the processed/hashed URL if the import worked but loading failed later
            console.error("Failed to load logo image:", target.src);
           }}
        />

        {/* Text under the logo */}
        <p className="text-lg md:text-xl text-white/95 font-sans max-w-2xl animate-fade-in">
          Tradizione, piatti tipici e cultura: la vecchia Cantina Avvalorati riemerge e diventa “Il Covo”
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;