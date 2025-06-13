import HeroSection from "@/components/sections/hero/HeroSection";
import DoctorSection from "@/components/sections/doctor/DoctorSection";
import TestimonialSection from "@/components/sections/testimonials/TestimonialSection";
import MapSection from "@/components/sections/map/MapSection";
import AppointmentSection from "@/components/sections/appointment/AppointmentSection";
export default function Home() {
  return (
    <main className="flex flex-col p-4 gap-12">
      <HeroSection />
      {/* <FeaturesSection /> */}
      <DoctorSection />
      <MapSection />
      <TestimonialSection />
      <AppointmentSection />
    </main>
  );
}
