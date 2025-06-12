"use client";
import React, { useState, useMemo } from "react";
import blogContent from "@/lib/content/blogContent.json";
import { Avatar, AvatarFallback } from "@/components/shadcn-ui/avatar";
import drAvatar from "../../../src/assets/images/doctor/dr-avatar.jpeg"; // test
import Image from "next/image";
import Link from "next/link";

const BlogContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? "" : category
    );
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const getFilteredPosts = () => {
    const filteredPosts = blogContent.filter((post) => {
      const matchesSearchTerm =
        post.headline.toLowerCase().includes(searchTerm) ||
        post.subhead.toLowerCase().includes(searchTerm) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
        post.category.toLowerCase().includes(searchTerm);

      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;

      return matchesSearchTerm && matchesCategory;
    });

    return filteredPosts.sort((a, b) =>
      sortOrder === "desc"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );
  };

  const uniqueCategories = useMemo(() => {
    const categoryCounts = blogContent.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(categoryCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([category]) => category);
  }, []);

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex w-full gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="flex-grow px-4 py-2 border border-teal-800 rounded-lg"
          />
          <button className="px-4 py-2 text-white bg-teal-700 rounded-lg">
            Search
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {uniqueCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 border rounded-lg ${
                selectedCategory === category
                  ? "bg-gray-300 text-teal-800"
                  : "bg-white text-teal-700"
              }`}
            >
              {category} {selectedCategory === category && <span>&times;</span>}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sortOrder" className="font-semibold">
            Sort:
          </label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={handleSortChange}
            className="px-4 py-2 border rounded-lg dark:text-black"
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {getFilteredPosts().map((post, index) => (
          <article
            key={index}
            className="p-6 bg-teal-800 border border-gray-200 rounded-lg shadow-md dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-5 text-gray-400">
              <span className="bg-gray-200 text-teal-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                {post.category}
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

export default BlogContainer;
