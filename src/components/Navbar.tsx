
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className={cn(
            "font-serif font-bold text-2xl",
            isScrolled ? "text-pirate-burgundy" : "text-white"
          )}>
            Crimson Pirate Haven
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {["Home", "Menu", "Gallery", "Location", "Reservations"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "font-serif transition-colors duration-300 hover:text-pirate-burgundy",
                isScrolled ? "text-pirate-teal" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
          <Button 
            className="bg-pirate-burgundy text-white hover:bg-pirate-burgundy/90"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden focus:outline-none",
            isScrolled ? "text-pirate-burgundy" : "text-white"
          )}
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 p-4 shadow-md absolute w-full">
          <div className="flex flex-col space-y-4">
            {["Home", "Menu", "Gallery", "Location", "Reservations"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-pirate-teal hover:text-pirate-burgundy font-serif"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button 
              className="bg-pirate-burgundy text-white hover:bg-pirate-burgundy/90 w-full"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
