import React from 'react'; // Make sure React is imported if not already

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* The main flex container centers its items vertically on large screens (items-center) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/*
            1. Added `text-center` here: This centers the inline content (text)
               within this div (<h1>, <p>).
            2. Added `flex flex-col items-center` to ensure the block-level
               quote div is also centered within this container.
          */}
          <div className="lg:w-1/2 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-pirate-teal">
              Nel cuore di Livorno
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dopo 60 anni senza vedere la luce del sole, torna a vivere un pezzo di storia della città di Livorno. Un locale dove si respirerà la tradizione livornese della cucina, in uno degli scorci più suggestivi di Livorno, ovvero sotto il ponte che introduce alla Fortezza Nuova, esattamente dove i battelli dei turisti partono per il giro nei fossi.
            </p>
            {/*
              3. Added `justify-center` to the inner flex container for the quote
                 to center the horizontal rule and the text relative to each other.
            */}
              <div className="w-12 h-1 bg-pirate-burgundy"></div>
              <p className="font-serif text-xl italic text-pirate-burgundy">
               "Il tesoro più prezioso si trova nei nostri piatti"
              </p>
            
          </div>

          {/* Optional: If you had another column (e.g., an image) in the lg:flex-row,
              it would go here as another lg:w-1/2 div. Added justify-center
              to the parent flex container to center the content block itself
              when it's only one column */}
          {/* Example placeholder for a second column if needed later:
          <div className="lg:w-1/2">
             <img src="/path/to/your/image.jpg" alt="About us image" className="rounded-lg shadow-md"/>
          </div>
          */}

        </div>
      </div>
    </section>
  );
};

export default About;