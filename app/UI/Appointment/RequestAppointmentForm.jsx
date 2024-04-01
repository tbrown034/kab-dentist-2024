"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

const RequestAppointmentForm = () => {
  const [painLevel, setPainLevel] = useState(5); // Default pain level set to 5
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to manage submission status

  const {
    register,
    handleSubmit,
    setValue, // Import setValue from useForm
    formState: { errors },
  } = useForm({
    defaultValues: {
      painLevel: 5, // Set the default value for painLevel
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true); // Set submission status to true

    // Handle submitting the form data to your server or API endpoint here
  };

  // Update the painLevel state and sync it with React Hook Form
  const handlePainLevelChange = (event) => {
    const value = event.target.value;
    setPainLevel(value);
    setValue("painLevel", parseInt(value, 10)); // Sync with React Hook Form
  };

  const painDescriptions = {
    1: { text: "No pain", emoji: "😄" },
    2: { text: "Very mild pain, barely noticeable", emoji: "🙂" },
    3: { text: "Minor pain", emoji: "😐" },
    4: { text: "Noticeable pain", emoji: "🙁" },
    5: { text: "Moderate pain", emoji: "😖" },
    6: { text: "Moderately strong pain", emoji: "😣" },
    7: { text: "Strong pain", emoji: "😫" },
    8: { text: "Very strong pain", emoji: "😡" },
    9: { text: "A whole lot of pain", emoji: "😵" },
    10: { text: "Extreme or unbearable pain", emoji: "🤯" },
  };

  if (isSubmitted) {
    // Display the success message instead of the form if submitted
    return (
      <div className="flex flex-col gap-4 pt-4 mt-4 border-t border-teal-50 ">
        <h3 className="text-xl font-bold ">
          Your appointmentrequest has been successfully sent!
        </h3>
        <p>We will be in touch with you shortly.</p>
        <p>Need immeidate assistance? Call our office at 630-301-089. </p>
      </div>
    );
  }

  return (
    <section className="mt-8 border-t border-opacity-55 border-teal-50 text-teal-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-4"
      >
        {/* Name Field */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              id="email"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone Field */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Phone
            </label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Invalid phone number, must be 10 digits",
                },
              })}
              type="tel"
              id="phone"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="(555) 555-5555"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Insurance Field */}
          <div className="flex-1">
            <label
              htmlFor="insurance"
              className="block mb-2 text-sm font-medium"
            >
              Insurance
            </label>
            <input
              {...register("insurance")}
              type="text"
              id="insurance"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Add if Known"
            />

            {errors.insurance && (
              <p className="text-red-500">{errors.insurance.message}</p>
            )}
          </div>
        </div>

        {/* Pain Level Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="painLevel" className="block mb-2 text-sm font-medium">
            Pain Level
          </label>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Low</span>
            <input
              {...register("painLevel")}
              type="range"
              min="1"
              max="10"
              id="painLevel"
              value={painLevel}
              onChange={handlePainLevelChange}
              className="block w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <span className="text-sm font-medium">Very High</span>
          </div>
          <div className="text-center">
            <p></p>
            Current Level: {painLevel}
            <p className="text-sm font-medium">
              {painDescriptions[painLevel].text}
            </p>
            <p></p>
            {painDescriptions[painLevel].emoji}
          </div>
        </div>

        {/* Checkboxes */}
        <div className="flex gap-4">
          <div className="flex items-center">
            <input
              {...register("returningPatient")}
              type="checkbox"
              id="returningPatient"
            />
            <label
              htmlFor="returningPatient"
              className="ml-2 text-sm font-medium"
            >
              Are you a returning patient?
            </label>
          </div>

          <div className="flex items-center">
            <input {...register("emergency")} type="checkbox" id="emergency" />
            <label htmlFor="emergency" className="ml-2 text-sm font-medium">
              Is this an emergency?
            </label>
          </div>
        </div>
        {/* Question/Issue Field */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label
              htmlFor="question"
              className="block mb-2 text-sm font-medium"
            >
              Question/Issue
            </label>
            <textarea
              {...register("question", { required: "This field is required" })}
              id="question"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows="3"
              placeholder="Please describe your question or issue."
            ></textarea>
            {errors.question && (
              <p className="text-red-500">{errors.question.message}</p>
            )}
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

export default RequestAppointmentForm;
