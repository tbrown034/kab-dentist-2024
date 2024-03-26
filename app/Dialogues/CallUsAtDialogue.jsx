import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const CallUsAtDialogue = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-4 text-xl">
          <p className="font-bold ">Or</p>
          <p className="font-semibold text-teal-800 underline underline-offset-8 hover:text-teal-700 active:text-teal-600">
            Call us at (630) 301-0589
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="w-5/6 max-w-md p-4 bg-white rounded-md shadow-lg">
        <h3 className="text-xl font-semibold">Contact Dr. Brown's Office</h3>
        <p className="mt-2">
          We're happy to take your call! To direct your call appropriately,
          please select an option below.
        </p>
        <div className="flex flex-col gap-4 mt-4">
          <button className="p-2 px-4 text-white bg-teal-500 rounded-md hover:bg-teal-600">
            General Inquiry (630-301-0589)
          </button>
          <button className="p-2 px-4 text-white bg-red-400 rounded-md hover:bg-red-500">
            Afterhours & Emergency Care
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallUsAtDialogue;
