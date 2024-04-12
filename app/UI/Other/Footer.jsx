// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="text-xs text-gray-400 ">
      <div className="grid max-w-4xl grid-cols-1 gap-2 mx-auto sm:grid-cols-2 md:grid-cols-4">
        <div className="p-2">
          <p className="font-semibold">Contact</p>
          <p>1295 Rickert Drive, Naperville, IL 60564</p>
          <p>(630) 555-5555</p>
          <p>kabdds@aol.com</p>
        </div>
      </div>
      <div className="pt-4 text-center">
        © 2023 Keith Brown DDS FAGD. Website Created and Maintained by TB Web
        and Design
      </div>
    </footer>
  );
};

export default Footer;
