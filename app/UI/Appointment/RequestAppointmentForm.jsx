"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

const RequestAppointmentForm = () => {
  const [painLevel, setPainLevel] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      painLevel: 5,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    const formattedData = {
      ...data,
      isReturning: data.returningPatient ? true : false,
      isEmergency: data.emergency ? true : false,
    };
    try {
      const response = await fetch("/api/sendApptRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData.message);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to send appointment request:", error);
    }
  };

  const handlePainLevelChange = (event) => {
    const value = event.target.value;
    setPainLevel(value);
    setValue("painLevel", parseInt(value, 10));
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
    return (
      <div className="flex flex-col gap-4 border-t border-teal-50 ">
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
        <div className="flex gap-2">
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
              placeholder="name@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>
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
              placeholder="(630) 555-5555"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
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
            className="p-2 text-teal-900 bg-white border-2 border-gray-300 rounded-lg text border-opacity-85 hover:bg-gray-200 active:bg-gray-300"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
export default RequestAppointmentForm;
