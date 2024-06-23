import FeaturesSection from "./UI/Other/FeaturesSection";
import HeroSection from "./UI/Hero/HeroSection";
import DoctorSection from "./UI/Doctor/DoctorSection";
import TestimonialSection from "./UI/Testimonials/TestimonialSection";
import MapSection from "./UI/Map/MapSection";
import AppointmentSection from "./UI/Appointment/AppointmentSection";
import FinancialSection from "./UI/Financial/FinancialSection";
import DentalServicesSection from "./UI/DentalServices/DentalServicesSection";

export const metadata = {
  title: "Home | Keith Brown DDS, FAGD",
  description:
    "Welcome to Naperville Dental, your home for trusted, modern dentistry. Dr. Keith A. Brown DDS, FAGD has provided expert care for Naperville and the Chicagoland area for more than 30 years. Start your journey towards excellent care today!",
  openGraph: {
    title: "Home | Keith Brown DDS, FAGD",
    description:
      "Welcome to Naperville Dental, your home for trusted, modern dentistry. Dr. Keith A. Brown DDS, FAGD has provided expert care for Naperville and the Chicagoland area for more than 30 years. Start your journey towards excellent care today!",
    url: "https://keithbrowndds.com",
    images: [
      {
        url: "https://keithbrowndds.com/og-image-home.jpg",
        width: 800,
        height: 600,
        alt: "Keith Brown DDS - Comprehensive and Emergency Dental Care",
      },
    ],
    site_name: "Keith Brown DDS",
    locale: "en_US",
    type: "website",
  },
};

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
