"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function EmergencyForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    // Handle submitting the form data to a server or API endpoint here
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col pt-4 mt-4 border-t border-red-700">
        <h3 className="text-white">Your message has been successfully sent.</h3>
        <p className="text-gray-300">We will be in touch with you shortly.</p>
        <p className="text-gray-300">
          IMPORTANT: If you are experiencing a life-threatening emergency, call
          911 immediately or go to the nearest emergency room.
        </p>
      </div>
    );
  }

  return (
    <section className="gap-2 p-4 text-white bg-gray-600 rounded-lg ">
      <h2 className="text-2xl font-extrabold tracking-tight text-red-500">
        Emergency Hotline
      </h2>
      <p className="mb-4">
        Just fill out these quick details and we'll get the information directly
        to the doctor!
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-4"
      >
        {/* Name Field */}
        <div className="flex gap-2">
          <div className="">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-50"
            >
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="flex gap-2">
          <div className="">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-50"
            >
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
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="name@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone Field */}
        <div className="flex gap-2">
          <div className="">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-50"
            >
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
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="(555) 555-5555"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Question/Issue Field */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label
              htmlFor="question"
              className="block mb-2 text-sm font-medium text-gray-50"
            >
              Question/Issue
            </label>
            <textarea
              {...register("question", { required: "This field is required" })}
              id="question"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
            className="w-5/6 p-2 text-lg border-2 rounded-lg shadow text-gray-50 opacity-90 hover:bg-gray-500 active:bg-gray-400"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
