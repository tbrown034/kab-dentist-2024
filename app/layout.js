import "./globals.css";

export const metadata = {
  title: "Keith Brown DDS, Naperville's Trusted Dentist",
  description: "Keith Brown D.D.D. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-slate-800">{children}</body>
    </html>
  );
}
