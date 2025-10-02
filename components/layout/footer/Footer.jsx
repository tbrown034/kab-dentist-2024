// components/layout/footer/Footer.jsx
// Server Component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { address, email } from "@/lib/constants/constants";
import DisplayNumber from "@/components/DisplayNumber";
import FooterAuthSection from "./FooterAuthSection";

const footerLinks = [
  { href: "/appointment", label: "Book Appointment", featured: true },
  { href: "/emergency", label: "Emergency Care" },
  { href: "/dental-services", label: "Our Services" },
  { href: "/#locationSection", label: "Location & Hours" },
  { href: "/blog", label: "Dental Blog" },
];

const Footer = () => {
  return (
    <footer className="mt-24 sm:mt-28 lg:mt-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-t border-gray-200 dark:border-gray-600">
      <div className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Brand & CTA */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Dr. Keith A. Brown DDS
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Your Trusted Naperville Dentist for Over 40 Years
            </p>
            <Link
              href="/appointment"
              className="group relative inline-flex items-center gap-3 px-8 py-5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all overflow-hidden"
            >
              <span className="relative z-10">Schedule Your Visit Today</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
            </Link>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Contact Us</h3>
              
              <a
                href="https://maps.app.goo.gl/mdUmVC7ukmrKS1ER8"
                className="flex items-start gap-3 hover:text-teal-600 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPinIcon className="w-5 h-5 mt-0.5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-500">
                  {address}
                </span>
              </a>
              
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  <DisplayNumber />
                </span>
              </div>
              
              <a 
                href={`mailto:${email}`} 
                className="flex items-center gap-3 hover:text-teal-600 transition-colors group"
              >
                <EnvelopeIcon className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-500">
                  {email}
                </span>
              </a>
            </div>

            {/* Office Hours */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Office Hours</h3>
              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 mt-0.5 text-teal-600 flex-shrink-0" />
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                  <p>Sat-Sun: Emergency Only</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Quick Links</h3>
              <nav className="space-y-3">
                {footerLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={`block hover:text-teal-600 transition-colors ${
                      link.featured 
                        ? 'font-semibold text-teal-600 dark:text-teal-500' 
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Connect With Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/KeithABrownDDS/about_details"
                  aria-label="Visit our Facebook page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg hover:scale-110 transition-all"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 dark:text-blue-400" size="lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/keith-brown-2055826b/"
                  aria-label="Visit Dr. Brown's LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg hover:scale-110 transition-all"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 dark:text-blue-400" size="lg" />
                </a>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                Follow us for dental tips, office updates, and special offers!
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-300">
              <p>© 2025 Dr. Keith A. Brown DDS. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <FooterAuthSection />
                <span className="text-gray-400">•</span>
                <p>
                  Website by{" "}
                  <Link
                    href="https://trevorthewebdeveloper.com/"
                    className="text-teal-600 dark:text-teal-500 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TB Web and Design
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
