
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1514362453360-8f94243c9996?q=80&w=2070')",
        }}
      ></div>
      
      {/* Hero content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-4 animate-fade-in">
            Welcome to <span className="text-pirate-burgundy">Crimson Pirate Haven</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 my-6 font-sans animate-fade-in">
            Where exquisite cuisine meets legendary adventure in an elegant dining experience
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-in">
            <Button className="bg-pirate-burgundy text-white hover:bg-pirate-burgundy/90 text-lg px-8 py-6">
              Reserve Your Table
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6">
              Explore Our Menu
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
