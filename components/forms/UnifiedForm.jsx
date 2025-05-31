"use client";
import { useState } from "react";
import PainSlider from "./PainSlider";
import DialogBox from "@/components/dialogs/InsuranceDialog";
import { restrictedTerms } from "../../lib/constants/restrictedInsuranceTerms";
import DialogCheck from "@/components/dialogs/InsuranceCheck";

export default function UnifiedForm({ formType }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    insurance: "",
    question: "",
    painLevel: 5,
    returningPatient: "",
    formType: formType,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePainLevelChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      painLevel: value,
    }));
  };

  const checkRestrictedTerms = (insuranceValue) => {
    const lowerCaseInsuranceValue = insuranceValue.toLowerCase();
    return restrictedTerms.some((term) =>
      lowerCaseInsuranceValue.includes(term.toLowerCase())
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkRestrictedTerms(formData.insurance)) {
      setShowDialog(true);
      return;
    }

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const responseData = await response.json();
      console.log(responseData.message);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        insurance: "",
        question: "",
        painLevel: 5,
        returningPatient: "",
        formType: formType,
      });
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Failed to send email:", error);
    }
  };

  const handleContinue = async () => {
    setShowDialog(false);
    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const responseData = await response.json();
      console.log(responseData.message);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        insurance: "",
        question: "",
        painLevel: 5,
        returningPatient: "",
        formType: formType,
      });
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div className="flex flex-col gap-2 p-4 text-white bg-teal-800 rounded-lg shadow">
      <h2 className="text-3xl font-bold">
        {formType === "emergency"
          ? "Request Emergency Consultation"
          : "Book an Appointment"}
      </h2>
      {!isSubmitted ? (
        <>
          <p>
            {formType === "emergency"
              ? "Please fill out the form below to request an emergency consultation."
              : "Fill out the form below and we'll be in touch shortly to confirm your appointment and answer any questions you might have!"}
          </p>
          <section className="mt-8 border-t border-opacity-55 border-teal-50 text-teal-50">
            {errorMessage && (
              <p className="p-2 text-red-800">
                Error: {errorMessage}. Sorry we are having an issue, please try
                again or call our office at 630-296-8702
              </p>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
              <input type="hidden" name="formType" value={formType} />
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full p-3 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full p-3 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full p-3 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    placeholder="(555) 555-5555"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block mb-2 font-medium">
                    City
                  </label>
                  <input
                    name="city"
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="block w-full p-3 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Naperville"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="insurance" className="block mb-2 font-medium">
                  Insurance <DialogBox />
                </label>
                <input
                  name="insurance"
                  type="text"
                  id="insurance"
                  value={formData.insurance}
                  onChange={handleInputChange}
                  className="block w-full p-3 mt-2 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Insurance Provider"
                  required
                />
              </div>
              <div>
                <label htmlFor="question" className="block mb-2 font-medium">
                  Question/Issue
                </label>
                <textarea
                  name="question"
                  id="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  className="block w-full p-3 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  rows="3"
                  placeholder="Please describe your question or issue."
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="painLevel" className="block mb-2 font-medium">
                  Pain Level
                </label>
                <PainSlider
                  name="painLevel"
                  value={formData.painLevel}
                  onChange={handlePainLevelChange}
                />
              </div>

              <div>
                <label
                  htmlFor="returningPatient"
                  className="block mb-2 font-medium"
                >
                  Returning Patient?
                </label>
                <div className="flex items-center gap-2">
                  <input
                    name="returningPatient"
                    type="radio"
                    id="returningPatientYes"
                    value="yes"
                    checked={formData.returningPatient === "yes"}
                    onChange={handleInputChange}
                  />
                  Yes
                  <input
                    name="returningPatient"
                    type="radio"
                    id="returningPatientNo"
                    value="no"
                    checked={formData.returningPatient === "no"}
                    onChange={handleInputChange}
                  />
                  No
                </div>
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-700"
              >
                Submit
              </button>
            </form>
          </section>
        </>
      ) : (
        <p className="p-4 text-white">
          {formType === "emergency"
            ? "Thank you for contacting us regarding your dental emergency. We will get back to you shortly. If you do not hear from us immediately, please call our office at 630-296-8702. If this is a medical emergency, please call 911."
            : "Thank you for requesting an appointment with us! We will get back to you shortly to confirm your appointment, set up a time, and answer any questions you might have. Please call our office at 630-296-8702 if you don't hear back immediately or if this is urgent or an emergency."}
        </p>
      )}
      {showDialog && (
        <DialogCheck
          onContinue={handleContinue}
          onClose={() => setShowDialog(false)}
        />
      )}
    </div>
  );
}
