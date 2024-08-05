"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { restrictedInsuranceTerms } from "@/app/insurance/restrictedTerms";
import NewPainSlider from "@/app/UI/Other/NewPainSlider"; // Update the path as needed
import DialogBox from "@/app/DialogBoxes/DialogBox";
import DialogBoxCheck from "@/app/DialogBoxes/DialogCheck";

const checkInsurance = (insurance) => {
  const lowercasedInsurance = insurance.toLowerCase();
  return restrictedInsuranceTerms.some((term) =>
    lowercasedInsurance.includes(term)
  );
};

export default function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  s;
  const methods = useForm({ defaultValues: { painLevel: 5 } });
  const {
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    register,
  } = methods;

  const handleContinue = () => {
    setIsDialogOpen(false);
    setInsuranceCheckComplete(true);
    methods.handleSubmit(onSubmit)(new Event("submit"));
  };

  const onSubmit = async (data, event) => {
    event.preventDefault();

    // First check for restricted insurance terms
    if (checkInsurance(data.insurance) && !insuranceCheckComplete) {
      setIsDialogOpen(true); // Show dialog if restricted terms are found
      return;
    }

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
    <>
      {isDialogOpen && (
        <DialogBoxCheck
          onContinue={handleContinue}
          onClose={() => setIsDialogOpen(false)}
        />
      )}

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
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
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
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium"
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
                  className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 "
                  placeholder="(555) 555-5555"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium"
                >
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
                {...register("question", {
                  required: "This field is required",
                })}
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
                <p className="text-red-500">
                  {errors.returningPatient.message}
                </p>
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
                {...register("insurance", {
                  required: "Insurance is required",
                })}
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
              <NewPainSlider register={register} value={painLevel} />
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
    </>
  );
}
