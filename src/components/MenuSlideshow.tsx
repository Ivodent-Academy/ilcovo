
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=2236",
    title: "Captain's Feast",
    description: "Premium seafood selection including lobster, crab, and prawns, served with our signature butter sauce."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069",
    title: "Blackbeard's Steak",
    description: "Perfectly aged ribeye, grilled to your preference, with herb-infused butter and truffle mashed potatoes."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1602785115306-d678195891b5?q=80&w=2070",
    title: "The Siren's Catch",
    description: "Fresh catch of the day, prepared with exotic herbs and served with seasonal vegetables."
  }
];

const MenuSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % menuItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % menuItems.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };
  
  return (
    <section id="menu" className="py-20 bg-pirate-teal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
            Our Signature Menu
          </h2>
          <div className="h-1 w-24 bg-pirate-burgundy mx-auto mt-4 mb-8"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Discover our most treasured creations, crafted with passion and the finest ingredients
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Slideshow container */}
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-[600px]" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {menuItems.map((item) => (
                <div key={item.id} className="min-w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                    <h3 className="font-serif text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-white/80 mb-6 max-w-lg">{item.description}</p>
                    <Button className="bg-pirate-burgundy hover:bg-pirate-burgundy/90 text-white">
                      View Full Menu
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-20"
            onClick={prevSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-20"
            onClick={nextSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {menuItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === currentSlide ? "bg-white" : "bg-white/40"
                )}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSlideshow;
