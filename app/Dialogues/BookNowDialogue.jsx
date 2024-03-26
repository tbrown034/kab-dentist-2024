import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AppointmentComboTab from "../UI/Appointment/AppointmentComboTab";

const BookNowDialogue = () => {
  return (
    <>
      {" "}
      <Dialog>
        <DialogTrigger className="px-8 py-3 text-lg font-medium text-white bg-teal-500 rounded-md hover:bg-teal-600">
          Book Now
        </DialogTrigger>
        <DialogContent>
          <AppointmentComboTab />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default BookNowDialogue;
