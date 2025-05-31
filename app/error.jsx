"use client";

import Link from "next/link";
import Image from "next/image";
import confusedTooth from "@/public/images/logos/confusedTooth.png";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-red-600">
          Something went wrong
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          We are sorry, but something went wrong on our end. Please try again
          later.
        </p>
      </div>
      <div className="p-10">
        <Image
          src={confusedTooth}
          alt="Confused Tooth"
          width={300}
          height={300}
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
