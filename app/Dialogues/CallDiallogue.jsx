import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CallDiallogue = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="">Call us at 630-301-0589</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hi, we are happy to take your call!</DialogTitle>
            <DialogDescription>
              To help us direct your call, please first select from the option
              below.
            </DialogDescription>
            <div className="flex gap-4 text-sm">
              <button className="flex items-center justify-center gap-2 p-2 font-medium text-white transition duration-200 ease-in-out bg-teal-500 rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700">
                <i class="fa-solid fa-phone"></i>
                <p>Call Dr. Brown's Office </p>{" "}
              </button>
              <button className="flex items-center gap-2 p-2 font-medium text-white transition duration-200 ease-in-out bg-red-400 rounded-md shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:bg-red-600">
                <i class="fa-solid fa-phone"></i>
                <p> Afterhours and Emergency care</p>
              </button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CallDiallogue;
