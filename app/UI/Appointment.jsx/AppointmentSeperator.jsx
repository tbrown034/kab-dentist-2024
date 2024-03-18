import { Separator } from "@/components/ui/separator";

const AppointmentSeperator = () => {
  return (
    <div>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <li>Contact Us</li>
          <li>New Patients</li>
          <li>Returning Patients</li>
        </ul>
      </nav>
      <Separator />
      {/* Your content here */}
    </div>
  );
};

export default AppointmentSeperator;
