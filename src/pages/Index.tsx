
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSlideshow from "@/components/MenuSlideshow";
import FacebookFeed from "@/components/FacebookFeed";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MenuSlideshow />
      <FacebookFeed />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
