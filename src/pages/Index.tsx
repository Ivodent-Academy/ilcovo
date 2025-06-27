
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSlideshow from "@/components/MenuSlideshow";
import FacebookFeed from "@/components/FacebookFeed";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import VimeoEmbed from "@/components/VimeoEmbed";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <VimeoEmbed />
      <MenuSlideshow />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
