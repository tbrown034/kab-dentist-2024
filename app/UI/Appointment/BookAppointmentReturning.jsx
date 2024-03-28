const BookAppointmentReturning = () => {
  return (
    <section className="mt-8 border-t border-opacity-55 border-teal-50 text-teal-50">
      <form action="#" className="flex flex-col gap-4 mt-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <label
              htmlFor="nameOrId"
              className="block mb-2 text-sm font-medium"
            >
              Name or Patient ID
            </label>
            <input
              type="text"
              id="nameOrId"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="John Doe or 123456"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="dob" className="block mb-2 text-sm font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-5/6 p-2 text-lg text-white bg-teal-600 border border-teal-500 rounded-lg shadow hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-400 dark:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookAppointmentReturning;
