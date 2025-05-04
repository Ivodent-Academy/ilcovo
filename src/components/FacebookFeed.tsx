
import { useEffect } from 'react';

declare global {
  interface Window {
    FB?: any;
    fbAsyncInit?: () => void;
  }
}

const FacebookFeed = () => {
  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      if (window.FB) return;
      
      window.fbAsyncInit = function() {
        window.FB.init({
          xfbml: true,
          version: 'v19.0'
        });
      };
      
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v19.0';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };
    
    loadFacebookSDK();
  }, []);
  
  return (
    <section id="social" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pirate-teal">
            Entra nella Nostra Comunità
          </h2>
          <div className="h-1 w-24 bg-pirate-burgundy mx-auto mt-4 mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Segui le nostre avventure, eventi speciali e offerte esclusive sui social media
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <div 
            className="fb-page" 
            data-href="https://www.facebook.com/facebook"
            data-tabs="timeline" 
            data-width="500" 
            data-height="600" 
            data-small-header="false"
            data-adapt-container-width="true" 
            data-hide-cover="false" 
            data-show-facepile="true"
          >
            <blockquote 
              cite="https://www.facebook.com/facebook" 
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/facebook">Facebook</a>
            </blockquote>
          </div>
          <div className="flex justify-center mt-6">
            <p className="text-gray-500 text-sm">
              Feed di Facebook non caricato? <a href="https://www.facebook.com/facebook" className="text-pirate-burgundy hover:underline" target="_blank" rel="noopener noreferrer">Visita la nostra pagina direttamente</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookFeed;
