
import React from 'react';

const VimeoEmbed = () => {
  return (
    <section id="video" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pirate-teal">
            La Nostra Storia
          </h2>
          <div className="h-1 w-24 bg-pirate-burgundy mx-auto mt-4 mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Immergiti nell'atmosfera unica del Rifugio del Pirata Cremisi
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://player.vimeo.com/video/435010389?background=1&autoplay=1&loop=1&byline=0&title=0" 
              frameBorder="0"
              allow="autoplay; fullscreen" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="bg-gray-50 p-6">
            <p className="text-gray-700 text-lg italic">
              "Un'esperienza culinaria che unisce la tradizione italiana con l'avventura dei pirati"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VimeoEmbed;
