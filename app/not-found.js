import Link from "next/link";
import Image from "next/image";
import confusedTooth from "../public/images/logos/confusedTooth.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-lg">
          Sorry, the page you are looking for does not exist. Let's go back to
          the homepage and try again!
        </p>
      </div>
      <div className="p-10">
        <Image
          src={confusedTooth}
          alt="Confused Tooth"
          width={300} // Set the desired width
          height={300} // Set the desired height
          className="rounded-2xl"
        />
      </div>
      <Link
        href="/"
        className="p-8 text-lg text-white bg-teal-600 rounded-xl hover:bg-teal-500"
      >
        Go Back Home
      </Link>
    </div>
  );
}
