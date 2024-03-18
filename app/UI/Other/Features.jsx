const Features = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Personalized Dental Excellence for{" "}
          <span className="text-teal-500">Every Smile in Chicagoland</span>
        </h2>
        <p className="text-xl">
          Dr. Keith Brown and our team focus on providing high-quality dental
          care with a personal touch to the Chicagoland area.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {/* Existing Features */}
        {/* Feature 1: Affordable Care */}
        <article className="flex flex-col">
          <div className="flex items-center mb-4">
            <div
              className="flex items-center justify-center w-12 h-12 text-white bg-teal-600 rounded-full"
              aria-hidden="true"
            >
              <i className="fa-solid fa-hand-holding-medical fa-lg"></i>
              <span className="sr-only">Affordable Care</span>
            </div>
            <h3 className="ml-4 text-xl font-bold">Affordable Care</h3>
          </div>
          <p>
            We promise to offer the most affordable dental care possible and
            assist in finding a financing program tailored to your needs.
          </p>
        </article>
        {/* Feature 2: 24/7 Emergency Services */}
        <article className="flex flex-col">
          <div className="flex items-center mb-4">
            <div
              className="flex items-center justify-center w-12 h-12 text-white bg-teal-600 rounded-full"
              aria-hidden="true"
            >
              <i className="fa-solid fa-kit-medical fa-lg"></i>
              <span className="sr-only">24/7 Emergency Services</span>
            </div>
            <h3 className="ml-4 text-xl font-bold">24/7 Emergency Services</h3>
          </div>
          <p>
            We're here for you in an emergency. Give us a call, and we'll make
            sure to see you as soon as possible.
          </p>
        </article>
        {/* Feature 3: Convenient Location */}
        <article className="flex flex-col">
          <div className="flex items-center mb-4">
            <div
              className="flex items-center justify-center w-12 h-12 text-white bg-teal-600 rounded-full"
              aria-hidden="true"
            >
              <i className="fa-solid fa-location-dot fa-lg"></i>
              <span className="sr-only">Convenient Location</span>
            </div>
            <h3 className="ml-4 text-xl font-bold">Convenient Location</h3>
          </div>
          <p>
            Located on the third floor of the Fifth Third Bank at 75th St. and
            Rickert Drive in Naperville, Illinois.
          </p>
        </article>
        {/* New Feature 4: Stress-Free Environment */}
        <article className="flex flex-col">
          <div className="flex items-center mb-4">
            <div
              className="flex items-center justify-center w-12 h-12 text-white bg-teal-600 rounded-full"
              aria-hidden="true"
            >
              <i className="fa-solid fa-spa fa-lg"></i>
              <span className="sr-only">Stress-Free Environment</span>
            </div>
            <h3 className="ml-4 text-xl font-bold">Stress-Free Environment</h3>
          </div>
          <p>
            Our office is designed to be a tranquil retreat from the stress of
            everyday life, ensuring a calm and comforting dental experience.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Features;
