"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

const PainSlider = ({ register, value }) => {
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

  return (
    <div className="flex flex-col ">
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        id="painLevel"
        {...register("painLevel")}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <div className="flex justify-between w-full mt-2 text-xs">
        <span>No Pain</span>
        <span>Severe Pain</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 font-semibold">
        <p>Value: {value}</p>
        <p>
          {painDescriptions[value]?.text} {painDescriptions[value]?.emoji}
        </p>
      </div>
    </div>
  );
};

export default function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const methods = useForm({ defaultValues: { painLevel: 5 } });
  const {
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    register,
  } = methods;

  const onSubmit = async (data, event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/appointmentForm", {
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
      console.log(responseData.message);
      setIsSubmitted(true);
      reset(); // Clear the form fields after successful submission
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Failed to send email:", error);
    }
  };

  const painLevel = watch("painLevel");

  if (isSubmitted) {
    return (
      <div className="flex flex-col gap-4 pt-4 mt-4 border-t border-teal-50">
        <h3 className="text-xl font-bold">
          Your message has been successfully sent!
        </h3>
        <p>We will be in touch with you shortly.</p>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <section className="mt-8 border-t border-opacity-55 border-teal-50 text-teal-50">
        {errorMessage && (
          <p className="p-2 text-red-800">
            Error: {errorMessage}. Sorry we are having an issue, please try
            again or call our office at 630-296-8702
          </p>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-4"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 "
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex gap-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
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
                className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 "
                placeholder="name@example.com"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
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
                className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 "
                placeholder="(555) 555-5555"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="city" className="block mb-2 text-sm font-medium">
                City
              </label>
              <input
                {...register("city", {
                  required: "City is required",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Invalid city name",
                  },
                })}
                type="text"
                id="city"
                className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                placeholder="Naperville"
              />
              {errors.city && (
                <p className="text-red-500">{errors.city.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="question"
              className="block mb-2 text-sm font-medium"
            >
              Question/Issue
            </label>
            <textarea
              {...register("question", { required: "This field is required" })}
              id="question"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 "
              rows="3"
              placeholder="Please describe your question or issue."
            ></textarea>
            {errors.question && (
              <p className="text-red-500">{errors.question.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="returningPatient"
              className="block mb-2 text-sm font-medium"
            >
              Returning Patient?
            </label>
            <div>
              <div className="flex items-center">
                <input
                  {...register("returningPatient", {
                    required: "Please select an option",
                  })}
                  type="radio"
                  id="returningPatientYes"
                  value="yes"
                  className="mr-2"
                />
                <label htmlFor="returningPatientYes" className="mr-4">
                  Yes
                </label>
                <input
                  {...register("returningPatient", {
                    required: "Please select an option",
                  })}
                  type="radio"
                  id="returningPatientNo"
                  value="no"
                  className="mr-2"
                />
                <label htmlFor="returningPatientNo">No</label>
              </div>
            </div>
            {errors.returningPatient && (
              <p className="text-red-500">{errors.returningPatient.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="insurance"
              className="block mb-2 text-sm font-medium"
            >
              Insurance
            </label>
            <input
              {...register("insurance", { required: "Insurance is required" })}
              type="text"
              id="insurance"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 e"
              placeholder="Insurance Provider"
            />
            {errors.insurance && (
              <p className="text-red-500">{errors.insurance.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="painLevel"
              className="block mb-2 text-sm font-medium"
            >
              Pain Level
            </label>
            <PainSlider register={register} value={painLevel} />
            {errors.painLevel && (
              <p className="text-red-500">{errors.painLevel.message}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-5/6 p-2 text-lg text-white bg-teal-600 border-teal-500 rounded-lg shadow hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-400 dark:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </FormProvider>
  );
}
