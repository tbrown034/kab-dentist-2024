import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookAppointmentNew from "./BookAppointmentNew";
import BookAppointmentReturning from "./BookAppointmentReturning";

export function AppointmentComboTab() {
  return (
    <section className="p-2 bg-teal-800 border-2 border-teal-800 rounded-lg shadow border-opacity-40 text-teal-50 ">
      <Tabs defaultValue="new" className="">
        <TabsList>
          <TabsTrigger value="new">New Patients</TabsTrigger>
          <TabsTrigger value="password">Returning Patients</TabsTrigger>
        </TabsList>
        <TabsContent value="new">
          <BookAppointmentNew />
        </TabsContent>
        <TabsContent value="password">
          <BookAppointmentReturning />
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default AppointmentComboTab;
