// components/forms/UnifiedForm.jsx
"use client";
import {
  useState,
  useActionState,
  useEffect,
  useRef,
  startTransition,
} from "react";
import Form from "next/form";
import { submitForm } from "@/app/actions/submitForm";
import PainSlider from "@/components/forms/PainSlider";
import DialogBox from "@/components/dialogs/InsuranceDialog";
import InsuranceCheck from "@/components/dialogs/InsuranceCheck";

// Phone formatter
function formatPhoneNumber(value) {
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

// Modern Submit Button with Loading Animation
function SubmitButton({ isPending }) {
  return (
    <button
      type="submit"
      disabled={isPending}
      data-track="form-initial-submit" // ADD THIS LINE
      className={`group relative w-full overflow-hidden rounded-xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 disabled:cursor-not-allowed ${
        isPending
          ? "bg-gradient-to-r from-green-600 to-green-700 hover:shadow-lg"
          : "bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 hover:shadow-xl"
      }`}
    >
      <div className="relative flex items-center justify-center gap-3">
        {isPending && (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        )}
        <span className={isPending ? "opacity-90" : ""}>
          {isPending ? "Submitting..." : "Submit Request"}
        </span>
      </div>

      {/* Subtle shimmer effect on hover */}
      {!isPending && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
      )}
    </button>
  );
}

export default function UnifiedForm({ formType = "appointment" }) {
  const [state, action, isPending] = useActionState(submitForm, null);
  const [painLevel, setPainLevel] = useState(5);
  const [phone, setPhone] = useState("");
  const [showInsuranceDialog, setShowInsuranceDialog] = useState(false);
  const [pendingFormData, setPendingFormData] = useState(null);
  const containerRef = useRef(null);

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  // Scroll to success message when form is successfully submitted
  useEffect(() => {
    if (state?.type === "success" && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [state?.type]);

  // Intercept form submission to show insurance dialog
  const handleFormSubmit = (formData) => {
    setPendingFormData(formData);
    setShowInsuranceDialog(true);
  };

  // Actually submit the form after confirmation
  const handleConfirmSubmit = () => {
    setShowInsuranceDialog(false);
    if (pendingFormData) {
      startTransition(() => {
        action(pendingFormData);
      });
      setPendingFormData(null);
    }
  };

  // Cancel submission
  const handleCancelSubmit = () => {
    setShowInsuranceDialog(false);
    setPendingFormData(null);
  };

  // Success state with consistent styling
  if (state?.type === "success") {
    return (
      <div className="px-2 sm:px-6 lg:px-16 xl:px-24">
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 p-4 sm:p-8 text-white shadow-2xl"
        >
          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500 shadow-lg">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  {formType === "emergency"
                    ? "Emergency Request Received"
                    : "Appointment Request Sent"}
                </h2>
                <p className="text-teal-200">We'll be in touch shortly</p>
              </div>
            </div>

            <div className="rounded-xl bg-teal-600 p-4 sm:p-6 text-white">
              <p className="text-base sm:text-lg leading-relaxed">
                {formType === "emergency"
                  ? "Thank you for contacting us regarding your dental emergency. We will get back to you shortly. If you do not hear from us immediately, please call our office at (630) 296-8702. If this is a medical emergency, please call 911."
                  : "Thank you for requesting an appointment with us! We will get back to you shortly to confirm your appointment, set up a time, and answer any questions you might have. Please call our office at (630) 296-8702 if you don't hear back immediately or if this is urgent or an emergency."}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main form
  return (
    <div className="px-2 sm:px-6 lg:px-16 xl:px-24">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 p-4 sm:p-8 text-white shadow-2xl"
      >
        <div className="relative">
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-3 text-3xl sm:text-4xl font-bold tracking-tight">
              {formType === "emergency"
                ? "Emergency Consultation"
                : "Book Your Visit"}
            </h2>
            <p className="text-lg sm:text-xl text-teal-100">
              {formType === "emergency"
                ? "Get immediate dental care when you need it most"
                : "Start your journey to better oral health today"}
            </p>
          </div>

          {/* Error Message */}
          {state?.type === "error" && (
            <div className="mb-6 rounded-xl border border-red-400 bg-red-50 p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <svg
                    className="h-5 w-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-red-800">
                    Something went wrong
                  </h3>
                  <p className="text-red-700">{state.message}</p>
                </div>
              </div>
            </div>
          )}

          <Form action={handleFormSubmit} className="space-y-8">
            <input type="hidden" name="formType" value={formType} />
            <input type="hidden" name="painLevel" value={painLevel} />
            <input type="hidden" name="phone" value={phone} />

            {/* First Name & Last Name */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-lg font-semibold text-white"
                >
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  className="w-full rounded-xl border border-slate-300 bg-white px-6 py-4 text-lg text-gray-900 placeholder:text-gray-500 transition-all duration-300 focus:bg-white focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
                  placeholder="John"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-lg font-semibold text-white"
                >
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  className="w-full rounded-xl border border-slate-300 bg-white px-6 py-4 text-lg text-gray-900 placeholder:text-gray-500 transition-all duration-300 focus:bg-white focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
                  placeholder="Smith"
                  required
                />
              </div>
            </div>

            {/* Contact Information Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-white"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="w-full rounded-xl border border-slate-300 bg-white px-6 py-4 text-lg text-gray-900 placeholder:text-gray-500 transition-all duration-300 focus:bg-white focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-lg font-semibold text-white"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-6 py-4 text-lg text-gray-900 placeholder:text-gray-500 transition-all duration-300 focus:bg-white focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
                  placeholder="(630) 555-1234"
                  maxLength={14}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="city"
                  className="block text-lg font-semibold text-white"
                >
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  id="city"
                  className="w-full rounded-xl border border-slate-300 bg-white px-6 py-4 text-lg text-gray-900 placeholder:text-gray-500 transition-all duration-300 focus:bg-white focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
                  placeholder="Naperville"
                  required
                />
              </div>
            </div>

            {/* Insurance */}
            <div className="space-y-2">
              <label
                htmlFor="insurance"
                className="flex items-center gap-2 text-lg font-semibold text-white"
              >
                Insurance
                <DialogBox />
              </label>
              <input
                name="insurance"
                type="text"
                id="insurance"
                className="w-full rounded-xl border border-slate-300 bg-white px-6 py-4 text-lg text-gray-900 placeholder:text-gray-500 transition-all duration-300 focus:bg-white focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
                placeholder="Blue Cross Blue Shield, Aetna, etc."
                required
              />
            </div>

            {/* Question/Issue */}
            <div className="space-y-2">
              <label
                htmlFor="question"
                className="block text-lg font-semibold text-white"
              >
                Details
              </label>
              <textarea
                name="question"
                id="question"
                rows="5"
                className="w-full rounded-xl border border-slate-300 bg-white px-6 py-4 text-lg text-gray-900 placeholder:text-gray-500 transition-all duration-300 focus:bg-white focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200 resize-none"
                placeholder="Please describe your dental concern or what type of appointment you need..."
                required
              ></textarea>
            </div>

            {/* Pain Level */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-white">
                Pain Level
              </label>
              <div className="rounded-xl border border-slate-300 bg-slate-100 p-6">
                <PainSlider value={painLevel} onChange={setPainLevel} />
              </div>
            </div>

            {/* Returning Patient */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-white">
                Are you a returning patient?
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 bg-slate-100 px-4 py-4 transition-all duration-300 hover:bg-slate-200 hover:border-teal-300">
                  <input
                    name="returningPatient"
                    type="radio"
                    value="yes"
                    className="h-5 w-5 text-teal-600 focus:ring-2 focus:ring-teal-200"
                    required
                  />
                  <span className="text-lg font-medium text-gray-900">Yes</span>
                </label>
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 bg-slate-100 px-4 py-4 transition-all duration-300 hover:bg-slate-200 hover:border-teal-300">
                  <input
                    name="returningPatient"
                    type="radio"
                    value="no"
                    className="h-5 w-5 text-teal-600 focus:ring-2 focus:ring-teal-200"
                    required
                  />
                  <span className="text-lg font-medium text-gray-900">No</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <SubmitButton isPending={isPending} />
            </div>
          </Form>
        </div>
      </div>

      {/* Insurance Confirmation Dialog */}
      <InsuranceCheck
        isOpen={showInsuranceDialog}
        onConfirm={handleConfirmSubmit}
        onCancel={handleCancelSubmit}
      />
    </div>
  );
}
