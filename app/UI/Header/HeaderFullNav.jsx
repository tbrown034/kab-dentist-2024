import Link from "next/link";
const HeaderFullNav = () => {
  return (
    <nav className="flex items-center justify-between gap-4 text-teal-900 text">
      <Link
        className=" hover:text-teal-800 active:text-teal-700"
        href="#doctorSection"
      >
        Meet the Doctor
      </Link>
      <Link
        className=" hover:text-teal-800 active:text-teal-700"
        href="#locationServices"
      >
        Location
      </Link>
      <Link
        className=" hover:text-teal-800 active:text-teal-700"
        href="#servicesSection"
      >
        Services
      </Link>
      <Link
        className=" hover:text-teal-800 active:text-teal-700"
        href="#apptSection"
      >
        Appointments
      </Link>
    </nav>
  );
};

export default HeaderFullNav;
