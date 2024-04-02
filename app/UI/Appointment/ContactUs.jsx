"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData.message); // Assuming your API returns a success message
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      // Handle errors here, like setting an error state and displaying it in the UI
    }
  };

  if (isSubmitted) {
    // Display the success message instead of the form if submitted
    return (
      <div className="flex flex-col gap-4 pt-4 mt-4 border-t border-teal-50 ">
        <h3 className="text-xl font-bold ">
          Your message has been successfully sent!
        </h3>
        <p>We will be in touch with you shortly.</p>
      </div>
    );
  }

  return (
    <section className="mt-8 border-t border-opacity-55 border-teal-50 text-teal-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-4"
      >
        {/* Name and Phone Fields in the same row */}
        <div className="flex gap-2">
          {/* Name Field */}
          <div className="flex-1">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Field */}
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
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="(555) 555-5555"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Email Field - Full width */}
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
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
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
            className="w-5/6 p-2 text-lg text-white bg-teal-600 border-2 border-white rounded-lg shadow opacity-80 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-400 dark:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
