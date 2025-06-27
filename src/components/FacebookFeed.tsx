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
        // Check if FB object is available
        if (window.FB) {
            try {
                window.FB.init({
                    xfbml      : true,
                    version    : 'v19.0' // Or your desired version
                });
                // Crucially, parse the specific container or the whole document
                // Parsing the specific container can sometimes be more reliable after initial load
                const fbContainer = document.getElementById('fb-feed-container');
                if (fbContainer) {
                    window.FB.XFBML.parse(fbContainer);
                    console.log('Facebook SDK Initialized and Parsed specific container.');
                } else {
                    window.FB.XFBML.parse(); // Fallback to parse whole document
                     console.log('Facebook SDK Initialized and Parsed document.');
                }
            } catch (error) {
                 console.error("Error initializing/parsing Facebook SDK:", error);
            }
        } else {
             console.warn("FB SDK not ready for init/parse when called.");
             // Optional: Retry mechanism or log for debugging
             // setTimeout(initializeAndParseFacebook, 500); // Example retry
        }
    };

    // Check if SDK script already exists
    if (document.getElementById('facebook-jssdk')) {
        // If script exists, FB object might be ready or might load soon
        // Use fbAsyncInit *if* FB isn't ready yet, otherwise initialize directly
        if (window.FB && window.FB.XFBML) { // Check if FB and XFBML are ready
             console.log("FB SDK already loaded, initializing directly.");
            initializeAndParseFacebook(); // Initialize and parse immediately
        } else {
            console.log("FB SDK script exists, but FB object not ready, assigning fbAsyncInit.");
            // Ensure fbAsyncInit isn't overwritten if multiple components use it
            const existingFbAsyncInit = window.fbAsyncInit;
            window.fbAsyncInit = () => {
                if (existingFbAsyncInit) {
                    existingFbAsyncInit(); // Call previous init function if exists
                }
                initializeAndParseFacebook(); // Call our init function
            };
             // If the script exists but FB isn't ready, fbAsyncInit *should* be called by the SDK when ready.
             // If it *still* doesn't work, FB might have loaded and errored, or fbAsyncInit was called before this assignment.
        }
        return; // Don't load script again
    }

    // If script doesn't exist, load it and assign callback
    console.log("FB SDK script not found, loading script and assigning fbAsyncInit.");
    // Ensure fbAsyncInit isn't overwritten if multiple components use it
    const existingFbAsyncInit = window.fbAsyncInit;
    window.fbAsyncInit = () => {
        if (existingFbAsyncInit) {
            existingFbAsyncInit(); // Call previous init function if exists
        }
        initializeAndParseFacebook(); // Call our init function
    };


    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; } // Double check
        js = d.createElement(s); js.id = id;
        // Let FB.init handle xfbml/version params - Set autoLogAppEvents to true for insights
        js.src = "https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v19.0&autoLogAppEvents=1"; // Added params for clarity and potential benefits
        if (fjs && fjs.parentNode) {
            fjs.parentNode.insertBefore(js, fjs);
        } else {
            // Fallback for cases where fjs is null (e.g., script run very early)
            (d.head || d.body || d.documentElement).appendChild(js);
        }
    }(document, 'script', 'facebook-jssdk'));

    // Cleanup function (optional but good practice)
    // return () => {
    //   // Potentially remove the fbAsyncInit function if this component unmounts
    //   // Be careful if other components rely on the same global function
    //   // window.fbAsyncInit = undefined; // Use with caution
    // };

  }, []); // Empty dependency array ensures this runs only once on mount

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
          - Changed w-[500px] to w-full max-w-[500px] for responsiveness
          - Kept mx-auto for centering the block when it's narrower than the container
          - Kept styling classes (rounded-lg, overflow-hidden, shadow-xl)
          - Added id="fb-feed-container" for specific parsing target (optional but can help)
        */}
        <div
            id="fb-feed-container" // Added ID for specific parsing
            className="w-full max-w-[500px] mx-auto rounded-lg overflow-hidden shadow-xl border border-gray-200"
        >
          {/* The Facebook Page Plugin Div */}
          <div
            className="fb-page" // w-full is not needed here, parent dictates width
            data-href="https://www.facebook.com/Ilcovolivorno"
            data-tabs="timeline"
            data-width="500" // Keep data-width as a hint/max for the plugin
            data-height="600"
            data-small-header="false"
            data-adapt-container-width="true" // *** CHANGED TO TRUE ***
            data-hide-cover="false"
            data-show-facepile="true"
            // Add lazy loading attribute for potential performance improvement
            data-lazy="true"
          >
            {/* Fallback content */}
            <blockquote
              cite="https://www.facebook.com/Ilcovolivorno"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/Ilcovolivorno">Il Covo Livorno</a>
            </blockquote>
          </div>

          {/* Fallback Link - Inside the styled wrapper */}
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