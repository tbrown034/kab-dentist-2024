import FeaturesSection from "@/components/layout/extra/FeaturesSection";
import HeroSection from "@/components/sections/hero/HeroSection";
import DoctorSection from "@/components/sections/doctor/DoctorSection";
import TestimonialSection from "@/components/sections/testimonials/TestimonialSection";
import MapSection from "@/components/sections/map/MapSection";
import AppointmentSection from "@/components/sections/appointment/AppointmentSection";
import FinancialSection from "@/components/sections/financial/FinancialSection";
import DentalServicesSection from "@/components/sections/dentalservices/DentalServicesSection";
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
