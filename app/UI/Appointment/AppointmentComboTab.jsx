import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RequestAppointmentForm from "./RequestAppointmentForm";
import ContactUs from "./ContactUs";

export function AppointmentComboTab() {
  return (
    <section className="">
      <Tabs defaultValue="appointment">
        <TabsList>
          <TabsTrigger value="appointment">Request Appointment</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>

        <TabsContent value="appointment">
          <RequestAppointmentForm />
        </TabsContent>

        <TabsContent value="contact">
          <ContactUs />
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default AppointmentComboTab;
