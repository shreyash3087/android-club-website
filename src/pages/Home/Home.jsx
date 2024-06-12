
import HeroSection from "/src/components/Homepage/HeroSection";
import FeatureSection from "/src/components/Homepage/FeatureSection";
import Workflow from "/src/components/Homepage/Workflow";
import Footer from "/src/components/Homepage/Footer";
import Gallery from "/src/components/Homepage/Gallery";
import Testimonials from "/src/components/Homepage/Testimonials";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Gallery />
        <FeatureSection />
        <Workflow />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Home;
