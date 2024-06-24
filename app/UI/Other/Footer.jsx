import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { address, trackingNumber, officeNumber, email } from "@/lib/constants";

const footerLinks = [
  { href: "/#home", label: "Home" },
  { href: "/dentalservices", label: "Dental Services" },
  { href: "/emergency", label: "Emergency Care" },
  { href: "/#appointmentSection", label: "Appointment" },
];

const Footer = () => {
  return (
    <footer className="px-10 py-12 text-gray-600 dark:text-gray-200 ">
      <div className="grid grid-cols-1 gap-8 ">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Contact</h2>
          <a
            href="https://maps.app.goo.gl/mdUmVC7ukmrKS1ER8"
            className="block hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </a>
          <div className="flex flex-col gap-2">
            <a href={`tel:${officeNumber}`} className="hover:underline">
              Office Number: {officeNumber}
            </a>
            <a href={`tel:${trackingNumber}`} className="hover:underline">
              New Patient and Afterhours Number: {trackingNumber}
            </a>
          </div>
          <a href={`mailto:${email}`} className="block hover:underline">
            {email}
          </a>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Quick Links</h2>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="block hover:underline">{link.label}</span>
            </Link>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/KeithABrownDDS/about_details"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/keith-brown-2055826b/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-4 mt-8 text-center border-t border-gray-300 dark:border-gray-700">
        © 2024 Keith Brown DDS FAGD. Website Created and Maintained by{" "}
        <Link href="https://trevorthewebdeveloper.com/">
          <span className="hover:underline">TB Web and Design</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
