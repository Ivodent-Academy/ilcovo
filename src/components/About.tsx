import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Centered single column layout */}
        <div className="flex flex-col items-center justify-center text-center gap-8">
          {/* Text Column */}
          <div className="w-full max-w-2xl flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-pirate-teal">
              Nel cuore di Livorno
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dopo 60 anni senza vedere la luce del sole, torna a vivere un pezzo di storia della città di Livorno. Un locale dove si respirerà la tradizione livornese della cucina, in uno degli scorci più suggestivi di Livorno, ovvero sotto il ponte che introduce alla Fortezza Nuova, esattamente dove i battelli dei turisti partono per il giro nei fossi.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-1 bg-pirate-burgundy"></div>
              <p className="font-serif text-xl italic text-pirate-burgundy">
                "Il tesoro più prezioso si trova nei nostri piatti"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
