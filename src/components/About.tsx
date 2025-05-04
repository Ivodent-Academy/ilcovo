
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-pirate-teal">
              A Legendary Dining Experience
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Crimson Pirate Haven is more than just a restaurant; it's a journey into the golden age of piracy reimagined with modern elegance. Our establishment combines rich maritime history with contemporary culinary artistry to create an unforgettable dining experience.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Each dish tells a story of adventure and discovery, crafted by our award-winning chefs using only the finest ingredients sourced from around the world. From delicate seafood preparations to robust meat dishes, our menu celebrates the spirit of exploration.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-pirate-burgundy"></div>
              <p className="font-serif text-xl italic text-pirate-burgundy">
                "The finest treasure is found on our plates"
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://player.vimeo.com/video/435010389?h=ba503835e7&title=0&byline=0&portrait=0"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Crimson Pirate Haven Restaurant"
              ></iframe>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pirate-burgundy rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-pirate-teal rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
