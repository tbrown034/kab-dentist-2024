const BookAppointmentNew = () => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        New Patients
      </h2>
      <p className="mb-8 font-light lg:mb-16 dark:text-gray-400 sm:text-xl">
        Have questions about your teeth, our services, billing and financing
        options, or more? Get in touch, and our office will get back to you
        ASAP.
      </p>
      <form action="#" className="space-y-8">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="(555) 555-5555"
          />
        </div>
        {/* Continue with your form fields as necessary */}
        <button
          type="submit"
          className="block w-full px-8 py-3 text-lg font-medium text-center text-white bg-teal-500 rounded-lg shadow hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default BookAppointmentNew;
