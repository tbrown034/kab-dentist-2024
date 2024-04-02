import Link from "next/link";

// Define the links to be used in the navigation
const links = [
  { href: "#doctorSection", label: "Meet the Doctor" },
  { href: "#locationSection", label: "Location" },
  { href: "#servicesSection", label: "Services" },
  { href: "#appointmentSection", label: "Appointments" },
  { href: "#financialSection", label: "Financial" }, // Included the "Financial" section
];

const HeaderFullNav = () => {
  return (
    <nav className="flex items-center justify-between gap-4 text-sm text-teal-900 text">
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
