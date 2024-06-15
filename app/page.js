import FeaturesSection from "./UI/Other/FeaturesSection";
import HeroSection from "./UI/Hero/HeroSection";
import DoctorSection from "./UI/Doctor/DoctorSection";
import TestimonialSection from "./UI/Testimonials/TestimonialSection";
import MapSection from "./UI/Map/MapSection";
import AppointmentSection from "./UI/Appointment/AppointmentSection";
import FinancialSection from "./UI/Financial/FinancialSection";
import DentalServicesSection from "./UI/DentalServices/DentalServicesSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-3 py-5 md:py-10 md:gap-10 lg:gap-12">
      <HeroSection />
      <FeaturesSection />
      <DoctorSection />
      <MapSection />
      <DentalServicesSection />
      <TestimonialSection />
      <FinancialSection />
      <AppointmentSection />
    </main>
  );
}
