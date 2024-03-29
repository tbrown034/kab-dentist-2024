import Features from "./UI/Other/Features";

import HeroSection from "./UI/Hero/HeroSection";
import DoctorSection from "./UI/Doctor/DoctorSection";
import TestimonialSection from "./UI/Testimonials/TestimonialSection";
import MapSection from "./UI/Map/MapSection";
import AppointmentSection from "./UI/Appointment/AppointmentSection";
import FinancialSection from "./UI/Financial/FinancialSection";
import DentalServicesSection from "./UI/DentalServices/DentalServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-4 m-1">
      <HeroSection />
      <Features />
      <DoctorSection />
      <TestimonialSection />
      <MapSection />
      <DentalServicesSection />
      <FinancialSection />
      <AppointmentSection />
    </div>
  );
}
