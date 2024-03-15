const Features = () => {
  return (
    <section className="p-4">
      <div>
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900">
          Designed for Patients Like You
        </h2>
        <p className="mb-8 text-gray-500 sm:text-xl">
          Dr. Keith Brown and our team focus on providing high-quality dental
          care with a personal touch to the Chicagoland area.
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
              <i className="fa-solid fa-hand-holding-medical fa-lg"></i>{" "}
              {/* Affordable Care Icon */}
            </div>
            <h3 className="ml-4 text-xl font-bold">Affordable Care</h3>
          </div>
          <p className="text-gray-500">
            We promise to offer the most affordable dental care possible and
            assist in finding a financing program tailored to your needs.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
              <i className="fa-solid fa-kit-medical fa-lg"></i>{" "}
              {/* Emergency Services Icon */}
            </div>
            <h3 className="ml-4 text-xl font-bold">24/7 Emergency Services</h3>
          </div>
          <p className="text-gray-500">
            We're here for you in an emergency. Give us a call, and we'll make
            sure to see you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
              <i className="fa-solid fa-location-dot fa-lg"></i>{" "}
              {/* Location Icon */}
            </div>
            <h3 className="ml-4 text-xl font-bold">Convenient Location</h3>
          </div>
          <p className="text-gray-500">
            Located on the third floor of the Fifth Third Bank at 75th St. and
            Rickert Drive in Naperville, Illinois.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
