import React from 'react'; // Import React

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- Updated Data ---
  const restaurantName = "Il Covo";
  const facebookUrl = "https://www.facebook.com/Ilcovolivorno"; // From previous context
  const instagramUrl = "https://www.instagram.com/ilcovolivorno/";
  const phone = "+39 351 772 6492";
  const email = "ilcovolivorno@gmail.com";
  const addressLine1 = "Scali delle Pietre, 8";
  const addressLine2 = "57125 Livorno LI, Italia";
  // --- End Data ---

  return (
    <footer className="bg-pirate-teal text-white"> {/* Using pirate-teal as defined in previous theme */}
      <div className="container mx-auto px-4 py-16">
        {/* Changed grid to 3 columns on medium screens */}
        {/* The gap will create space between columns, including the empty middle one */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Restaurant Info & Social (Stays in the first column) */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">{restaurantName}</h3>
            <div className="flex space-x-4">
              {/* Facebook Icon Link */}
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pirate-burgundy transition-colors"
                aria-label={`Pagina Facebook ${restaurantName}`}
              >
                {/* Facebook SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              {/* Instagram Icon Link */}
              {instagramUrl && instagramUrl !== "#" && (
                 <a
                   href={instagramUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-white hover:text-pirate-burgundy transition-colors"
                   aria-label={`Pagina Instagram ${restaurantName}`}
                 >
                   {/* Instagram SVG Icon */}
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                   </svg>
                 </a>
              )}
            </div>
          </div>

          {/* Column 3: Contact Details */}
          {/* Added md:col-start-3 to force this into the third column on medium+ screens */}
          <div className="md:col-start-3">
            <h3 className="font-serif text-xl font-bold mb-6">Contattaci</h3>
            <div className="space-y-4">
              <p>
                <strong className="block mb-1">Telefono:</strong>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-pirate-burgundy transition-colors">{phone}</a>
              </p>
              <p>
                <strong className="block mb-1">Email:</strong>
                <a href={`mailto:${email}`} className="hover:text-pirate-burgundy transition-colors">{email}</a>
              </p>
              <p>
                <strong className="block mb-1">Indirizzo:</strong>
                {addressLine1},<br />{addressLine2}
              </p>
            </div>
          </div>

          {/* Note: The middle column (column 2) is implicitly left empty */}

        </div> {/* End Grid */}

        {/* Bottom Bar (remains the same) */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-white/70">
          <p>© {currentYear} {restaurantName}. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;