import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CallUsAtDiallogue = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="text-teal-500 underline underline-offset-4">
          630-301-0589
        </DialogTrigger>
        <DialogContent className="w-5/6 p-4">
          <DialogHeader>
            <DialogTitle>Hi, we are happy to take your call!</DialogTitle>
            <DialogDescription>
              To help us direct your call, please first select from the option
              below.
            </DialogDescription>
            <div className="flex gap-4 text-sm">
              <button className="flex items-center justify-center gap-4 p-2 px-4 font-medium text-white transition duration-200 ease-in-out bg-teal-500 rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700">
                <div>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p>Call Dr. Brown's Office </p> <p>(630-301-0589)</p>{" "}
                </div>
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

export default CallUsAtDiallogue;
