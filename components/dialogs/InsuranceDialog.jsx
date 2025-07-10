"use client";

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { officeNumber } from "@/lib/constants/constants";

export default function DialogBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        onClick={() => setIsOpen(true)}
        className="w-5 h-5 ml-2 text-gray-300 cursor-pointer hover:text-gray-500"
      />

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg p-6 space-y-4 bg-white border rounded-lg shadow-xl">
            <Dialog.Title className="text-lg font-medium text-gray-900">
              Insurance Policy Information
            </Dialog.Title>
            <Dialog.Description as="div" className="space-y-2">
              <p className="text-sm text-gray-500">
                We accept most insurance plans. Our insurance specialist will
                help guide you through understanding your coverage, payment
                plans, and any out-of-pocket expenses.
              </p>
              <p className="text-sm text-gray-500">
                However, we currently do not accept <b>Medicaid or Medicare</b>,
                including Medicaid plans from Blue Cross Community, Meridian,
                Aetna Better Health, CHIP, Illinois All Kids, DentaQuest, and
                Molina Healthcare.
              </p>
              <p className="text-sm text-gray-500">
                For more details, please call our office at{" "}
                <a
                  href={`tel:${officeNumber.replace(/[^\d]/g, "")}`}
                  className="text-teal-600 underline"
                  data-track="phone-click"
                >
                  {officeNumber}
                </a>
                to speak with our dedicated insurance specialist.
              </p>
            </Dialog.Description>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-semibold text-white bg-teal-600 rounded-md shadow-inner hover:bg-teal-700 focus:outline-none"
              >
                I understand
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
