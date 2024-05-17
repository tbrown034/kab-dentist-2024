import Link from "next/link";

// Define the links to be used in the navigation
const links = [
  { href: "#doctorSection", label: "Meet the Doctor" },
  { href: "#locationSection", label: "Location" },
  { href: "/dentalservices", label: "Services" },
  { href: "#appointmentSection", label: "Appointments" },
  { href: "/blog", label: "Blog" },
];

const HeaderFullNav = () => {
  return (
    <nav className="flex items-center justify-between gap-6 text-base lg:gap-8 lg:text-lg dark:text-teal-500 xl:text-xl text">
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
