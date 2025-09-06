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
      <div className="flex flex-col gap-24 px-6 py-20 sm:gap-28 sm:px-8 sm:py-24 lg:gap-32 lg:px-12 lg:py-32">
        {/* <FeaturesSection /> */}
        <DoctorSection />
        <TestimonialSection />
        <MapSection />
        <AppointmentSection />
      </div>
    </main>
  );
}
