import { format } from "date-fns";

// Base URL of your website
const BASE_URL = "https://www.keithbrowndds.com";

// Function to generate the sitemap
export default function sitemap() {
  // Get the current date and format it as an ISO string
  const lastModified = format(new Date(), "yyyy-MM-dd");

  // Define the URLs for your sitemap
  return [
    {
      url: `${BASE_URL}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "monthly", // Blog updates more frequently
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/dentalservices`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/emergency`,
      lastModified,
      changeFrequency: "monthly", // Emergency services may change more often
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#financialSection`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/#locationSection`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/#servicesSection`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/#appointmentSection`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    // Add more routes as necessary
  ];
}
