// components/Footer.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="px-10 py-8 text-gray-600 dark:text-gray-200">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-4">
        <div className="space-y-1">
          <h2 className="text-lg font-bold">Contact</h2>
          <p>1295 Rickert Drive, Naperville, IL 60564</p>
          <p>(630) 555-5555</p>
          <p>kabdds@aol.com</p>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <a href="/" className="block hover:underline">
            Home
          </a>
          <a href="/services" className="block hover:underline">
            Services
          </a>
          <a href="/location" className="block hover:underline">
            Location
          </a>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex justify-start space-x-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
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
