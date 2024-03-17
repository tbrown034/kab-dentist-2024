import Features from "./UI/Features";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Hero from "./UI/Hero/Hero";
import Doctor from "./UI/Doctor/Doctor";
import Testimonials from "./UI/Testimonials";
import MapSection from "./UI/Map/MapSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen gap-4 p-2">
        <Header />
        <Hero />
        <Features />
        <Doctor />
        <Testimonials />
        <MapSection />
        <Footer />
      </div>
    </>
  );
}
