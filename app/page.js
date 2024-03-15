import Features from "./UI/Features";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Hero from "./UI/Hero/Hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen gap-4 p-2">
        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
    </>
  );
}
