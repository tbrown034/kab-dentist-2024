"use client";

import { Dialog } from "@headlessui/react";

export default function InsuranceValidation({ isOpen, onClose, onSubmit }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg p-6 space-y-4 bg-white border rounded-lg shadow-xl">
          <Dialog.Title className="text-lg font-medium text-gray-900">
            Insurance Policy Information
          </Dialog.Title>
          <Dialog.Description>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">
                We do not accept Medicaid or Medicare.
              </p>
              <p className="text-sm text-gray-500">
                If you have these insurance plans, please call our office at
                630-296-8702 to discuss alternative options.
              </p>
            </div>
          </Dialog.Description>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-white bg-teal-600 rounded-md shadow-inner hover:bg-teal-700 focus:outline-none"
            >
              Go Back
            </button>
            <button
              onClick={onSubmit}
              className="px-4 py-2 text-sm font-semibold text-white bg-teal-600 rounded-md shadow-inner hover:bg-teal-700 focus:outline-none"
            >
              I Understand, Send Form
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
