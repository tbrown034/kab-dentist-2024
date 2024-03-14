import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Hero from "./UI/Hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
