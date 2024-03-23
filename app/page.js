import React from "react";
import sectionContents from "../sectionContent.json"; // Ensure this path is correct
import Features from "./UI/Other/Features";
import Footer from "./UI/Other/Footer";
import Header from "./UI/Header/Header";
import HeroSection from "./UI/Hero/HeroSection";
import DoctorSection from "./UI/Doctor/DoctorSection";
import TestimonialSection from "./UI/Testimonials/TestimonialSection";
import MapSection from "./UI/Map/MapSection";
import AppointmentSection from "./UI/Appointment/AppointmentSection";
import OfficeSection from "./UI/Office/OfficeSection";
import FinancialSection from "./UI/Financial/FinancialSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 p-2">
        <Header />
        <main className="flex flex-col gap-8 p-4">
          <HeroSection content={sectionContents.heroText} />
          <Features content={sectionContents.features} />
          <DoctorSection content={sectionContents.doctorSection} />
          <TestimonialSection content={sectionContents.testimonialSection} />
          <MapSection content={sectionContents.mapSection} />
          <OfficeSection content={sectionContents.officeSection} />
          <FinancialSection content={sectionContents.financialSection} />
          <AppointmentSection content={sectionContents.appointmentSection} />
        </main>
        <Footer />
      </div>
    </>
  );
}
