import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookAppointmentNew from "./BookAppointmentNew";
import BookAppointmentReturning from "./BookAppointmentReturning";

export function AppointmentComboTab() {
  return (
    <section className="">
      <Tabs defaultValue="new">
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
