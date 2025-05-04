
import { useEffect } from 'react';

declare global {
  interface Window {
    google?: any;
    initMap?: () => void;
  }
}

const Location = () => {
  useEffect(() => {
    // Load Google Maps API
    const loadGoogleMapsAPI = () => {
      if (window.google?.maps) {
        window.initMap();
        return;
      }
      
      window.initMap = function() {
        const mapElement = document.getElementById('map') as HTMLElement;
        if (!mapElement) return;
        
        const location = { lat: 41.902782, lng: 12.496366 }; // Rome, Italy coordinates
        
        const map = new window.google.maps.Map(mapElement, {
          zoom: 15,
          center: location,
          styles: [
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{"color": "#385863"}]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{"color": "#f5f5f5"}]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [{"color": "#f2f2f2"}]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{"color": "#e7e7e7"}]
            }
          ]
        });
        
        const marker = new window.google.maps.Marker({
          position: location,
          map: map,
          title: "Rifugio del Pirata Cremisi"
        });
        
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-bold">Rifugio del Pirata Cremisi</h3>
              <p>Via dei Fori Imperiali 123, Roma, Italia</p>
            </div>
          `
        });
        
        marker.addListener("click", () => {
          infoWindow.open({
            anchor: marker,
            map,
          });
        });
      };
      
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    };
    
    loadGoogleMapsAPI();
  }, []);
  
  return (
    <section id="location" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden h-96">
              <div id="map" className="w-full h-full"></div>
              <div className="p-4 text-center text-sm text-gray-500">
                Caricamento mappa... Se non vedi una mappa sopra, assicurati che i servizi di localizzazione siano abilitati
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-pirate-teal">
              Trova la Via per l'Avventura
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Situato nel cuore della città, il nostro ristorante è facilmente accessibile sia con i mezzi pubblici che con mezzi privati. Vieni a scoprire il tesoro nascosto che ti aspetta!
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-pirate-burgundy">
              <h3 className="font-serif text-xl font-bold mb-2 text-pirate-burgundy">Indirizzo</h3>
              <p className="text-gray-700">Via dei Fori Imperiali 123</p>
              <p className="text-gray-700">Roma, Italia</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pirate-burgundy">
              <h3 className="font-serif text-xl font-bold mb-2 text-pirate-burgundy">Orari</h3>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-gray-700">Lunedì - Giovedì:</p>
                <p className="text-gray-700">17:00 - 22:00</p>
                
                <p className="text-gray-700">Venerdì - Sabato:</p>
                <p className="text-gray-700">16:00 - 24:00</p>
                
                <p className="text-gray-700">Domenica:</p>
                <p className="text-gray-700">16:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
