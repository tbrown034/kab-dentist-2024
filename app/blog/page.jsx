"use client";
import { useState } from "react";
import Entries from "./Entries";
import sectionContents from "../../sectionContent.json";
import FullTitle from "../UI/Other/FullTitle";
import { raleway } from "../font.js";
import Head from "next/head";

export default function BlogPage() {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.blog;

  // Guard clause to ensure rendering only occurs if data is available
  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <>
      <Head>
        <title>{title} - Keith Brown DDS Blog</title>
        <meta
          name="description"
          content="Explore the Keith Brown DDS blog for insightful articles, updates, and tips related to dental care and health. Stay informed with our latest posts."
        />
        <meta
          name="keywords"
          content="dentistry blog, dental articles, dental updates, dental health, Dr. Keith A. Brown"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://keithbrowndds.com/blog" />
        <meta property="og:title" content={`${title} - Keith Brown DDS Blog`} />
        <meta
          property="og:description"
          content="Explore the Keith Brown DDS blog for insightful articles, updates, and tips related to dental care and health. Stay informed with our latest posts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keithbrowndds.com/blog" />
        <meta
          property="og:image"
          content="https://keithbrowndds.com/og-blog.jpg"
        />
        <meta property="og:site_name" content="Keith Brown DDS Blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${title} - Keith Brown DDS Blog`}
        />
        <meta
          name="twitter:description"
          content="Explore the Keith Brown DDS blog for insightful articles, updates, and tips related to dental care and health. Stay informed with our latest posts."
        />
        <meta
          name="twitter:image"
          content="https://keithbrowndds.com/twitter-blog.jpg"
        />
      </Head>
      <section className="flex flex-col gap-4 mt-6" id="blogSection">
        <h1
          className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
        >
          <FullTitle
            title={title}
            highlightedText={highlightedText}
            highlightInFront={highlightInFront}
          />
        </h1>
        {textBlock.map((block, blockIndex) => (
          <article key={blockIndex} className="flex flex-col gap-2">
            <p>{block.text}</p>
          </article>
        ))}
        <Entries />
      </section>
    </>
  );
}
