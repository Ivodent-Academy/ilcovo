import React from 'react'; // Keep React import

// Removed: No need for useEffect
// Removed: No need for declare global

const Location = () => {
  // Removed: No need for the entire useEffect hook

  return (
    <section id="location" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Map Column */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            {/* Container div controlling the map's appearance (shadow, rounded corners, height) */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden h-96 lg:h-[450px]"> {/* Adjusted height slightly for larger screens */}

              {/* The Google Maps Embed iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1746370985415!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHEzT2lsX2dF!2m2!1d43.55346668303216!2d10.31087228954375!3f91.18292009381167!4f-8.755936002704999!5f0.7820865974627469"
                className="w-full h-full border-0" // Use classes for sizing and border
                allowFullScreen={true} // Use camelCase for React props
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" // Use camelCase for React props
                title="Google Maps Location Il Covo" // Added title for accessibility
              ></iframe>

              {/* Removed the old map div and loading text */}
            </div>
          </div>

          {/* Text/Info Column (remains mostly the same) */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-pirate-teal">
              Trova la Via per l'Avventura {/* Changed Header */}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Il Covo ti aspetta nel cuore pulsante di Livorno, facilmente raggiungibile per iniziare la tua esperienza culinaria.
            </p>

            {/* Address Box - Update with actual address */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-pirate-burgundy">
              <h3 className="font-serif text-xl font-bold mb-2 text-pirate-burgundy">Indirizzo</h3>
              <p className="text-gray-700">Scali delle Pietre, 8</p> {/* Example Address */}
              <p className="text-gray-700">57125 Livorno LI, Italia</p> {/* Example Address */}
            </div>

            {/* Opening Hours Box - Update with actual hours */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pirate-burgundy">
              <h3 className="font-serif text-xl font-bold mb-2 text-pirate-burgundy">Orari</h3>
              <div className="grid grid-cols-2 gap-2">
                 {/* Update with your actual opening hours */}
                <p className="text-gray-700">Tutti i giorni</p>
                <p className="text-gray-700">18:00 - 01:30</p>
                 {/* Add more rows if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;