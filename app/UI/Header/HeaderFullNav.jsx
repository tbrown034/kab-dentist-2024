import Link from "next/link";

// Define the links to be used in the navigation
const links = [
  { href: "#doctorSection", label: "Meet the Doctor" },
  { href: "#locationSection", label: "Location" },
  { href: "#servicesSection", label: "Services" },
  { href: "#appointmentSection", label: "Appointments" },
];

const HeaderFullNav = () => {
  return (
    <nav className="flex items-center justify-between gap-6 text-base text-teal-900 lg:gap-8 lg:text-lg xl:text-xl text">
      {links.map((link) => (
        <Link
          key={link.href} // Key for each child in a list
          href={link.href}
          className="hover:text-teal-800 active:text-teal-700"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderFullNav;
