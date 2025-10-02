// components/forms/UnifiedForm.jsx
// Client Component
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
import DisplayNumber from "@/components/DisplayNumber";
import Link from "next/link";

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
function SubmitButton({ isPending, formType }) {
  return (
    <button
      type="submit"
      disabled={isPending}
      id="form-initial-submit"
      className={`group relative w-full overflow-hidden rounded-2xl px-8 py-5 text-lg font-semibold text-white shadow-xl transition-all duration-300 transform disabled:cursor-not-allowed ${
        isPending
          ? "bg-gradient-to-r from-green-600 to-green-700"
          : "bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
      }`}
    >
      <div className="relative flex items-center justify-center gap-3">
        {isPending ? (
          <>
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            <span>Processing...</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={formType === "emergency" 
                  ? "M13 10V3L4 14h7v7l9-11h-7z" // Lightning bolt for emergency
                  : "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" // Calendar for appointment
                }
              />
            </svg>
            <span>
              {formType === "emergency" ? "Request Emergency Care" : "Request Appointment"}
            </span>
          </>
        )}
      </div>

      {/* Subtle shimmer effect on hover */}
      {!isPending && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
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

  // Actually submit the form after confirmation with GTM tracking
  const handleConfirmSubmit = () => {
    setShowInsuranceDialog(false);
    if (pendingFormData) {
      // 🔥 FIRE GTM EVENT - This is the key fix!
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "generate_lead",
          form_type: formType,
          pain_level: painLevel,
          form_data: {
            firstName: pendingFormData.get("firstName"),
            lastName: pendingFormData.get("lastName"),
            email: pendingFormData.get("email"),
            phone: pendingFormData.get("phone"),
            city: pendingFormData.get("city"),
            insurance: pendingFormData.get("insurance"),
            returningPatient: pendingFormData.get("returningPatient"),
            painLevel: painLevel,
          },
          event_category: "form",
          event_action: "submit",
          event_label:
            formType === "emergency" ? "emergency_form" : "appointment_form",
          value: painLevel > 7 ? 150 : 100, // Higher value for emergency cases
          currency: "USD",
        });

        // Debug log for development
        console.log("GTM Event Fired: generate_lead", {
          form_type: formType,
          pain_level: painLevel,
        });
      }

      // Small delay to ensure GTM processes the event before form submission
      setTimeout(() => {
        startTransition(() => {
          action(pendingFormData);
        });
        setPendingFormData(null);
      }, 200); // Increased delay slightly for GTM processing
    }
  };

  // Cancel submission
  const handleCancelSubmit = () => {
    setShowInsuranceDialog(false);
    setPendingFormData(null);
  };

  // 🔥 FIRE SUCCESS EVENT TO GTM (moved outside conditional)
  useEffect(() => {
    if (
      state?.type === "success" &&
      typeof window !== "undefined" &&
      window.dataLayer
    ) {
      window.dataLayer.push({
        event: "form_success",
        form_type: formType,
        event_category: "form",
        event_action: "success",
        event_label:
          formType === "emergency"
            ? "emergency_form_success"
            : "appointment_form_success",
      });
    }
  }, [state?.type, formType]);

  // Success state with consistent styling
  if (state?.type === "success") {
    return (
      <div className="px-2 sm:px-6 lg:px-16 xl:px-24">
        {/* Success container */}
        <div className="relative">
          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-3xl bg-gray-50 dark:bg-gray-900 p-6 sm:p-10 lg:p-12 shadow-2xl ring-2 ring-green-300 dark:ring-green-700 border border-white dark:border-gray-800"
        >
          <div className="relative">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg">
                <svg
                  className="h-10 w-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {formType === "emergency"
                  ? "Emergency Request Received"
                  : "Request Successfully Sent"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">We'll contact you as soon as possible</p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-teal-50/80 to-teal-100/80 dark:from-teal-900/30 dark:to-teal-800/30 backdrop-blur-sm border border-teal-200/50 dark:border-teal-800/50 p-6 sm:p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-teal-600 dark:bg-teal-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">What happens next?</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {formType === "emergency" ? (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span className="font-semibold">Your request goes directly to Dr. Brown</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Dr. Brown often returns urgent calls personally when available</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>We'll assess your situation and may be able to see you immediately</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>For fastest response, call our emergency line: <span className="font-semibold">{displayNumber}</span></span>
                        </li>
                        <li className="flex items-start gap-2 text-red-600 dark:text-red-400 font-semibold">
                          <span className="mt-1">!</span>
                          <span>For life-threatening emergencies, call 911</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span className="font-semibold">Your request goes directly to Dr. Brown's office</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>We personally review every request and prioritize based on urgency</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>We'll contact you as soon as possible to schedule your appointment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Need immediate help? Call us directly at <span className="font-semibold">{displayNumber}</span></span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <DisplayNumber
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                showIcon={true}
              />
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

  // Main form
  return (
    <div className="px-2 sm:px-6 lg:px-16 xl:px-24">
      {/* Form container */}
      <div className="relative">
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-3xl bg-gray-50 dark:bg-gray-900 p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-200/30 dark:border-gray-700/30"
        >
          <div className="relative">
          <div className="mb-8 sm:mb-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-800 dark:to-teal-900 shadow-lg">
              <svg className="w-8 h-8 text-teal-700 dark:text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={formType === "emergency" 
                    ? "M13 10V3L4 14h7v7l9-11h-7z"
                    : "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  }
                />
              </svg>
            </div>
            <h2 className="mb-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {formType === "emergency"
                ? "Emergency Consultation & Scheduling"
                : "Request an Appointment"}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              {formType === "emergency"
                ? "Get immediate dental care when you need it most"
                : "New patients welcome! We'll assess your needs and schedule your appointment"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              <span className="text-teal-600 dark:text-teal-400">*</span> Required fields
            </p>
          </div>

          {/* Error Message */}
          {state?.type === "error" && (
            <div className="mb-6 rounded-xl border-2 border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 p-4 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50 flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-600 dark:text-red-400"
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
                <div className="flex-1">
                  <h3 className="font-semibold text-red-800 dark:text-red-300">
                    Something went wrong
                  </h3>
                  <p className="text-red-700 dark:text-red-400 text-sm mt-1">{state.message}</p>
                  <p className="text-red-600 dark:text-red-500 text-sm mt-2">
                    Please try again or call us at {displayNumber}
                  </p>
                </div>
              </div>
            </div>
          )}

          <Form action={handleFormSubmit} className="space-y-6">
            <input type="hidden" name="formType" value={formType} />
            <input type="hidden" name="painLevel" value={painLevel} />
            <input type="hidden" name="phone" value={phone} />

            {/* Name Section with modern label */}
            <div className="space-y-6 pt-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Your Information</h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    id="firstName"
                    className="w-full rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 min-h-[52px] text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-200 focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 dark:focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                    placeholder="John"
                    required
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    id="lastName"
                    className="w-full rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 min-h-[52px] text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-200 focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 dark:focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                    placeholder="Smith"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 pt-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Contact Details</h3>
              
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group sm:col-span-2 lg:col-span-1">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    className="w-full rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 min-h-[52px] text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-200 focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 dark:focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 min-h-[52px] text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-200 focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 dark:focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                    placeholder="(630) 555-1234"
                    maxLength={14}
                    required
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    City
                  </label>
                  <input
                    name="city"
                    type="text"
                    id="city"
                    defaultValue="Naperville"
                    className="w-full rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 min-h-[52px] text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-200 focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 dark:focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                    placeholder="Naperville"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Insurance & Details */}
            <div className="space-y-6 pt-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Insurance & Details</h3>

              <div className="group">
                <label
                  htmlFor="insurance"
                  className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Insurance Provider
                  <DialogBox />
                </label>
                <select
                  name="insurance"
                  id="insurance"
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 min-h-[52px] text-gray-900 dark:text-gray-100 transition-all duration-200 focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 dark:focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                  required
                >
                  <option value="">Select your insurance...</option>
                  <option value="Aetna">Aetna</option>
                  <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
                  <option value="Cigna">Cigna</option>
                  <option value="Delta Dental">Delta Dental</option>
                  <option value="Guardian">Guardian</option>
                  <option value="Humana">Humana</option>
                  <option value="MetLife">MetLife</option>
                  <option value="United Healthcare">United Healthcare</option>
                  <option value="No Insurance">No Insurance</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="group">
                <label
                  htmlFor="question"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  {formType === "emergency" ? "Describe your emergency" : "What brings you in?"}
                </label>
                <textarea
                  name="question"
                  id="question"
                  rows="3"
                  className="w-full rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-200 focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 dark:focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 resize-none"
                  placeholder={formType === "emergency"
                    ? "e.g., Severe tooth pain, broken tooth, knocked out tooth..."
                    : "e.g., Routine cleaning, tooth pain, chipped filling, cosmetic consultation..."}
                  required
                ></textarea>
              </div>

              {/* Pain Level - moved here for better flow */}
              <div className="group">
                <label className="block mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Current {formType === "emergency" ? "Pain" : "Discomfort"} Level {formType === "emergency" ? "" : "(Optional)"}
                </label>
                <div className="rounded-xl bg-gray-50/50 dark:bg-gray-800/50 p-4 transition-all duration-200">
                  <PainSlider value={painLevel} onChange={setPainLevel} />
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  {formType === "emergency" ? "This helps us prepare for your emergency visit" : "This helps us prioritize urgent cases"}
                </p>
              </div>
            </div>

            {/* Returning Patient Check */}
            <div className="space-y-6 pt-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Patient Status</h3>

              <div className="group">
                <label className="block mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Have you visited us before?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="group relative flex cursor-pointer items-center justify-center rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-4 min-h-[56px] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] hover:border-teal-500 has-[:checked]:bg-gradient-to-r has-[:checked]:from-teal-600 has-[:checked]:to-teal-700 has-[:checked]:text-white has-[:checked]:border-teal-600 has-[:checked]:ring-2 has-[:checked]:ring-teal-500/30 overflow-hidden">
                    <input
                      name="returningPatient"
                      type="radio"
                      value="yes"
                      className="sr-only peer"
                      required
                    />
                    <span className="text-base font-semibold text-gray-900 dark:text-gray-100 peer-checked:text-white transition-colors">Yes, I'm a patient</span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 peer-checked:translate-x-full"></div>
                  </label>
                  <label className="group relative flex cursor-pointer items-center justify-center rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-4 min-h-[56px] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] hover:border-teal-500 has-[:checked]:bg-gradient-to-r has-[:checked]:from-teal-600 has-[:checked]:to-teal-700 has-[:checked]:text-white has-[:checked]:border-teal-600 has-[:checked]:ring-2 has-[:checked]:ring-teal-500/30 overflow-hidden">
                    <input
                      name="returningPatient"
                      type="radio"
                      value="no"
                      className="sr-only peer"
                      required
                    />
                    <span className="text-base font-semibold text-gray-900 dark:text-gray-100 peer-checked:text-white transition-colors">I'm new here</span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 peer-checked:translate-x-full"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              <SubmitButton isPending={isPending} formType={formType} />
              <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                By submitting, you agree to be contacted regarding your appointment request.
              </p>
            </div>
          </Form>
        </div>
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
