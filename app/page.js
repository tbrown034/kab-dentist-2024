import Features from "./UI/Other/Features";
import Footer from "./UI/Other/Footer";
import Header from "./UI/Header/Header";
import Hero from "./UI/Hero/Hero";
import Doctor from "./UI/Doctor/Doctor";
import TestimonialSection from "./UI/Testimonials/TestimonialSection";
import MapSection from "./UI/Map/MapSection";
import AppointmentSection from "./UI/Appointment.jsx/AppointmentSection";
import OfficeSection from "./UI/Office/OfficeSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 p-2 ">
        <Header />
        <main className="flex flex-col gap-12 p-4 ">
          <Hero />
          <Features />
          <Doctor />
          <TestimonialSection />
          <MapSection />
          <AppointmentSection />
          <OfficeSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
