import React from "react";
import { notFound } from "next/navigation";
import blogContent from "../blogContent.json";
import { raleway } from "../../font.js";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return blogContent.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogContent.find((item) => item.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: `${post.headline} | Keith Brown DDS`,
    description: post.subhead,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.headline,
      description: post.subhead,
      url: `https://keithbrowndds.com/blog/${post.slug}`,
      siteName: "Keith Brown DDS",
      images: [
        {
          url: "https://keithbrowndds.com/og-blog.jpg",
          width: 800,
          height: 600,
          alt: post.headline,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

const BlogPostPage = ({ params }) => {
  const { slug } = params;

  const post = blogContent.find((item) => item.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <section className="flex flex-col gap-6 px-4 mt-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex items-center justify-between mb-4">
        <Link
          href="/blog"
          className="text-teal-700 hover:underline dark:text-teal-400"
        >
          &larr; Back to Blog
        </Link>
      </div>
      <h1
        className={`${raleway.className} text-3xl md:text-4xl font-extrabold tracking-tight text-teal-900 dark:text-gray-100`}
      >
        {post.headline}
      </h1>
      <p className="text-xl text-teal-700 capitalize dark:text-teal-400">
        {post.subhead}
      </p>
      <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
        <Image
          src="/images/doctor/avatar.jpeg"
          alt="Dr. Keith A. Brown"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-lg">By {post.author}</p>
          <p className="text-sm">{new Date(post.date).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 text-sm font-medium text-white bg-teal-600 rounded-full dark:bg-teal-500 dark:text-gray-800">
          {post.category}
        </span>
      </div>
      <article className="text-lg prose text-teal-800 max-w-none dark:prose-dark dark:text-gray-300">
        {post.body.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </article>
      {post.further_reading && post.further_reading.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-teal-800 dark:text-gray-200">
            Further Reading
          </h2>
          <ul className="list-disc list-inside">
            {post.further_reading.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="text-teal-600 hover:underline dark:text-teal-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex gap-4 mt-6">
        <Link
          href="/blog"
          className="px-4 py-2 text-white bg-teal-700 rounded-lg dark:bg-teal-500"
        >
          Back to Blog
        </Link>
        <Link
          href="/"
          className="px-4 py-2 text-white bg-teal-700 rounded-lg dark:bg-teal-500"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default BlogPostPage;
