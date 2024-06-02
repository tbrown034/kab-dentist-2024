// components/Footer.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-10 py-8 text-gray-600 dark:text-gray-200">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-4">
        <div className="space-y-1">
          <h2 className="text-lg font-bold">Contact</h2>
          <a
            href="https://maps.app.goo.gl/mdUmVC7ukmrKS1ER8"
            className="block hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            1295 Rickert Drive, Naperville, IL 60564
          </a>
          <a href="tel:630-296-8702" className="block hover:underline">
            630-296-8702
          </a>
          <a href="mailto:kabdds@aol.com" className="block hover:underline">
            kabdds@aol.com
          </a>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <Link href="#home" className="block hover:underline">
            Home
          </Link>
          <a href="#servicesSection" className="block hover:underline">
            Services
          </a>
          <a href="#locationSection" className="block hover:underline">
            Location
          </a>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex justify-start space-x-4">
            <a
              href="https://www.facebook.com/KeithABrownDDS/about_details"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/keith-brown-2055826b/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-4 mt-8 text-center border-t border-gray-300">
        © 2023 Keith Brown DDS FAGD. Website Created and Maintained by TB Web
        and Design
      </div>
    </footer>
  );
};

export default Footer;
