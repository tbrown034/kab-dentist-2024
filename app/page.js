import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Hero from "./UI/Hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen p-2 font-poppins ">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
