import Features from "./UI/Other/Features";
import Footer from "./UI/Other/Footer";
import Header from "./UI/Header/Header";
import HeroSection from "./UI/Hero/HeroSection";
import DoctorSection from "./UI/Doctor/DoctorSection";
import TestimonialSection from "./UI/Testimonials/TestimonialSection";
import MapSection from "./UI/Map/MapSection";
import AppointmentSection from "./UI/Appointment/AppointmentSection";
import FinancialSection from "./UI/Financial/FinancialSection";
import DentalServicesSection from "./UI/DentalServices/DentalServicesSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 p-2">
        <Header />
        <main className="flex flex-col gap-10 p-4">
          <HeroSection />
          <Features />
          <DoctorSection />
          <TestimonialSection />
          <MapSection />

          <FinancialSection />
          <DentalServicesSection />
          <AppointmentSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
