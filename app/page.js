import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Hero from "./UI/Hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Header />
        <Hero />
        <h1 className="text-4xl ">hi</h1>
        <Footer />
      </div>
    </>
  );
}
