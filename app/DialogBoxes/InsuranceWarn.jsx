"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const InsuranceWarn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openDialog}
        className="relative ml-2 text-gray-200 cursor-pointer -top-1"
      >
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>

      <Dialog
        open={isOpen}
        onClose={closeDialog}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          <DialogPanel className="w-full max-w-md p-6 space-y-4 bg-white rounded-lg shadow-lg">
            <DialogTitle className="text-lg font-medium text-gray-900">
              Insurance Policy Information
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              Please note that Dr. Brown's office currently does not accept
              Medicaid plans, including Blue Cross Community, Meridian, Aetna
              Better Health, CHIP, Illinois All Kids, DentaQuest, and Molina
              Healthcare. For more information, please contact our office.
            </DialogDescription>
            <div className="mt-4">
              <button
                onClick={closeDialog}
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default InsuranceWarn;
