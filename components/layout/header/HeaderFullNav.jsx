import Link from "next/link";

const links = [
  { href: "/#locationSection", label: "Location" },
  { href: "/dental-services", label: "Services" }, // Fixed route name
  { href: "/appointment", label: "Appointments" },
  { href: "/blog", label: "Blog" },
  { href: "/emergency", label: "Emergency" },
];
const HeaderFullNav = () => {
  return (
    <nav className="flex items-center justify-between gap-6 text-base lg:gap-8 lg:text-lg dark:text-teal-500 xl:text-xl text">
      {links.map((link) => (
        <Link
          key={link.href}
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
