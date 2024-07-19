import Link from "next/link";
import confusedTooth from "../public/images/logos/confusedTooth.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-6">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-xl">
          Sorry, the page you are looking for does not exist. Let's go back to
          the homepage and try again!
        </p>
      </div>
      <Image className="rounded-2xl" src={confusedTooth} />
      <Link
        href="/"
        className="px-20 py-20 mt-6 text-white bg-teal-600 rounded-xl hover:bg-teal-500"
      >
        Go Back Home
      </Link>
    </div>
  );
}
