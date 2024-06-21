"use client";
import blogContent from "./blogContent.json";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import drAvatar from "../../public/images/doctor/avatar.jpeg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Entries = () => {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <div className="grid gap-8 lg:grid-cols-2">
        {blogContent.map((post, index) => (
          <article
            key={index}
            className="p-6 bg-teal-800 border border-gray-200 rounded-lg shadow-md dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-5 text-gray-400">
              <span className="bg-gray-200 text-teal-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </span>
              <span className="text-sm text-gray-300 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
              <Link href={`/blog/${post.slug}`}>{post.headline}</Link>
            </h2>
            <p className="mb-2 text-lg text-teal-200 capitalize">
              {post.subhead}
            </p>
            <div className="mb-5 text-sm font-light text-teal-100">
              <p>{`${post.body.substring(0, 200)}...`}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="relative w-10 h-10">
                  <Image
                    src={drAvatar}
                    alt="Dr. Keith A. Brown"
                    fill
                    className="rounded-full"
                    loading="lazy"
                  />
                  <AvatarFallback>KB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-white">By {post.author}</span>
              </div>
              <Link href={`/blog/${post.slug}`} passHref>
                <button className="inline-flex items-center text-sm font-medium text-white text-primary-600 hover:underline">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Entries;
