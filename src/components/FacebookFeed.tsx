import React, { useEffect } from 'react'; // Import React

declare global {
  interface Window {
    FB?: any;
    fbAsyncInit?: () => void;
  }
}

const FacebookFeed = () => {
  useEffect(() => {
    // Function to initialize FB SDK if needed and parse XFBML
    const initializeAndParseFacebook = () => {
        if (window.FB) {
            window.FB.init({
                xfbml      : true,
                version    : 'v19.0'
            });
            window.FB.XFBML.parse(); // Explicitly parse after init/load
            console.log('Facebook SDK Initialized and Parsed.');
        } else {
             console.warn("FB SDK not ready for init/parse.");
        }
    };

    // Check if SDK script already exists
    if (document.getElementById('facebook-jssdk')) {
        // If script exists, FB object might be ready or might load soon
        if (window.FB) {
            initializeAndParseFacebook(); // Initialize and parse immediately
        } else {
            window.fbAsyncInit = initializeAndParseFacebook; // Assign callback for when it loads
        }
        return; // Don't load script again
    }

    // If script doesn't exist, load it and assign callback
    window.fbAsyncInit = initializeAndParseFacebook; // Assign function to global callback

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        // Let FB.init handle xfbml/version params
        js.src = "https://connect.facebook.net/it_IT/sdk.js";
        if (fjs && fjs.parentNode) {
            fjs.parentNode.insertBefore(js, fjs);
        } else {
            (d.head || d.body || d.documentElement).appendChild(js);
        }
    }(document, 'script', 'facebook-jssdk'));

  }, []);

  return (
    <section id="social" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header remains the same */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pirate-teal">
             La Nostra Comunità su Facebook
          </h2>
          <div className="h-1 w-24 bg-pirate-burgundy mx-auto mt-4 mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Segui le novità, gli eventi speciali e tutte le offerte esclusive direttamente dal nostro profilo ufficiale.
          </p>
        </div>

        {/* Container Wrapper for the Facebook Feed */}
        {/*
          - Removed max-w-3xl
          - Added w-[500px] to match the fb-page data-width
          - Kept mx-auto for centering the 500px block
          - Kept styling classes (rounded-lg, overflow-hidden, shadow-xl)
        */}
        <div className="w-[500px] mx-auto rounded-lg overflow-hidden shadow-xl border border-gray-200">
          {/* The Facebook Page Plugin Div */}
          <div
            className="fb-page" // No need for w-full here as parent dictates size
            data-href="https://www.facebook.com/Ilcovolivorno"
            data-tabs="timeline"
            data-width="500" // Keep fixed width
            data-height="600" // Keep fixed height
            data-small-header="false"
            data-adapt-container-width="false" // Set to false as we use fixed width
            data-hide-cover="false"
            data-show-facepile="true"
          >
            {/* Fallback content */}
            <blockquote
              cite="https://www.facebook.com/Ilcovolivorno"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/Ilcovolivorno">Il Covo Livorno</a>
            </blockquote>
          </div>

          {/* Fallback Link - Consider adding padding inside the wrapper */}
          <div className="flex justify-center p-4 bg-gray-50 text-center">
             <p className="text-gray-500 text-sm">
               Non vedi il feed?{' '}
               <a href="https://www.facebook.com/Ilcovolivorno" className="text-pirate-burgundy hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                 Visita la nostra pagina Facebook!
               </a>
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookFeed;