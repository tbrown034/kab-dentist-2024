import Features from "./UI/Other/Features";
import Footer from "./UI/Other/Footer";
import Header from "./UI/Other/Header";
import Hero from "./UI/Hero/Hero";
import Doctor from "./UI/Doctor/Doctor";
import Testimonials from "./UI/TestimonialSection";
import MapSection from "./UI/Map/MapSection";
import AppointmentSection from "./UI/Appointment.jsx/AppointmentSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 p-2 ">
        <Header />
        <main className="flex flex-col gap-8 p-2 px-4">
          <Hero />
          <Features />
          <Doctor />
          <Testimonials />
          <MapSection />
          <AppointmentSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
