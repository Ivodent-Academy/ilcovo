
import { useEffect } from 'react';

declare global {
  interface Window {
    initMap: () => void;
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
        
        const location = { lat: 25.761681, lng: -80.191788 }; // Example coordinates - Miami
        
        const map = new google.maps.Map(mapElement, {
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
        
        const marker = new google.maps.Marker({
          position: location,
          map: map,
          title: "Crimson Pirate Haven"
        });
        
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-bold">Crimson Pirate Haven</h3>
              <p>123 Ocean Drive, Miami, FL</p>
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
                Map loading... If you don't see a map above, please ensure location services are enabled
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-pirate-teal">
              Find Your Way to Adventure
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Located in the heart of the city, our restaurant is easily accessible by both public transportation and private vehicles. Come discover the hidden treasure that awaits you!
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-pirate-burgundy">
              <h3 className="font-serif text-xl font-bold mb-2 text-pirate-burgundy">Address</h3>
              <p className="text-gray-700">123 Ocean Drive</p>
              <p className="text-gray-700">Miami, FL 33139</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pirate-burgundy">
              <h3 className="font-serif text-xl font-bold mb-2 text-pirate-burgundy">Hours</h3>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-gray-700">Monday - Thursday:</p>
                <p className="text-gray-700">5:00 PM - 10:00 PM</p>
                
                <p className="text-gray-700">Friday - Saturday:</p>
                <p className="text-gray-700">4:00 PM - 12:00 AM</p>
                
                <p className="text-gray-700">Sunday:</p>
                <p className="text-gray-700">4:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
