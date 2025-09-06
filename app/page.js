import HeroSection from "@/components/sections/hero/HeroSection";
import DoctorSection from "@/components/sections/doctor/DoctorSection";
import TestimonialSection from "@/components/sections/testimonials/TestimonialSection";
import MapSection from "@/components/sections/map/MapSection";
import AppointmentSection from "@/components/sections/appointment/AppointmentSection";
export default function Home() {
  return (
    <main className="flex flex-col overflow-x-clip">
      {/* Hero gets full width without padding */}
      <HeroSection />
      
      {/* Content sections with consistent spacing */}
      <div className="flex flex-col gap-20 px-4 py-16 sm:gap-24 sm:px-6 sm:py-20 lg:gap-32 lg:px-8 lg:py-24">
        {/* <FeaturesSection /> */}
        <DoctorSection />
        <TestimonialSection />
        <MapSection />
        <AppointmentSection />
      </div>
    </main>
  );
}
