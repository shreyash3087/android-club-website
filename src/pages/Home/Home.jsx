import HeroSection from "/src/components/Homepage/HeroSection";
import FeatureSection from "/src/components/Homepage/FeatureSection";
import Workflow from "/src/components/Homepage/Workflow";
import Gallery from "/src/components/Homepage/Gallery";
import Testimonials from "/src/components/Homepage/Testimonials";

const Home = () => {
  return (
    <>
      <div className="mx-auto mt-16">
        <HeroSection />
        <Gallery />
        <FeatureSection />
        <Workflow />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
