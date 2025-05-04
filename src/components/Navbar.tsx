import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
// Button import is removed as it's no longer used
import { Facebook, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Removed isMobileMenuOpen state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed toggleMobileMenu function

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-md py-2" // Adjusted padding for scrolled state if needed
          : "bg-transparent py-4"        // Adjusted padding for initial state if needed
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo on the left */}
        <a href="#" className="flex items-center">
          <div className={cn(
            "font-serif font-bold text-2xl",
            isScrolled ? "text-pirate-burgundy" : "text-white"
          )}>
            Il Covo
          </div>
        </a>

        {/* Social Media Icons on the right */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/Ilcovolivorno"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "transition-colors duration-300 hover:text-pirate-burgundy",
              isScrolled ? "text-pirate-teal" : "text-white"
            )}
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/ilcovolivorno/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "transition-colors duration-300 hover:text-pirate-burgundy",
              isScrolled ? "text-pirate-teal" : "text-white"
            )}
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Removed Mobile Menu Button */}
      </div>

      {/* Removed Mobile Menu Dropdown */}
    </nav>
  );
};

export default Navbar;