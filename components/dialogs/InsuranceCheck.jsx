// components/dialogs/InsuranceCheck.jsx
// Client Component
"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import DisplayNumber from "@/components/DisplayNumber";

export default function InsuranceCheck({ isOpen, onConfirm, onCancel }) {
  // Enhanced click handler to ensure GTM tracking
  const handleConfirmClick = () => {
    // Fire GTM event manually as backup
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "form_final_submit",
        event_category: "form",
        event_action: "submit",
        event_label: "insurance_confirmed",
      });
    }

    // Small delay to ensure GTM processes the event
    setTimeout(() => {
      onConfirm();
    }, 50);
  };

  return (
    <Dialog open={isOpen} onClose={onCancel} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/50" />
      <div className="fixed inset-0 flex w-full items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-6 rounded-xl bg-white p-8 shadow-2xl">
          <DialogTitle className="text-xl font-bold text-gray-900">
            Insurance Coverage Check
          </DialogTitle>

          <Description as="div" className="space-y-4 text-gray-600">
            <p>
              Before we submit your appointment request, we want to ensure we
              can provide the best service for your insurance coverage.
            </p>
            <p>
              <strong>We accept most insurance plans</strong>, and our insurance
              specialist will help guide you through understanding your coverage
              and payment options.
            </p>
            <p>
              However, we currently{" "}
              <strong>do not accept Medicaid or Medicare</strong>, including
              Medicaid plans from Blue Cross Community, Meridian, Aetna Better
              Health, CHIP, Illinois All Kids, DentaQuest, and Molina
              Healthcare.
            </p>
            <p>
              For specific questions about your coverage, please call our office
              at{" "}
              <DisplayNumber
                className="font-semibold text-teal-600 hover:text-teal-700 transition-colors"
              />
              {" "}to speak with our insurance specialist.
            </p>
          </Description>

          <div className="flex gap-4 pt-4">
            <button
              onClick={onCancel}
              className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={handleConfirmClick}
              id="form-final-submit"
              className="flex-1 rounded-lg bg-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors"
            >
              I Understand, Submit Request
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
