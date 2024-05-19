// app/blog/page.js
"use client";

import { useState } from "react";
import blogContent from "../../blogContent.json";
import sectionContent from "../..//sectionContent.json";
import React from "react";

const entries = () => {
  const [expandedPosts, setExpandedPosts] = useState([]);

  const toggleExpand = (index) => {
    setExpandedPosts((prevExpandedPosts) =>
      prevExpandedPosts.includes(index)
        ? prevExpandedPosts.filter((i) => i !== index)
        : [...prevExpandedPosts, index]
    );
  };
  return (
    <div className="container px-4 py-8 mx-auto">
      {blogContent.map((post, index) => (
        <div
          key={index}
          className="p-6 mb-8 text-white bg-teal-800 border border-gray-600 rounded-lg shadow-md"
        >
          <h2 className="mb-2 text-2xl font-semibold">{post.headline}</h2>
          <p className="mb-2 italic">{post.subhead}</p>
          <p className="mb-2 ">
            <span className="font-bold">Date:</span> {post.date}
          </p>

          <p className="mt-2 text-gray-200 whitespace-pre-wrap">
            {expandedPosts.includes(index)
              ? post.body
              : `${post.body.substring(0, 100)}...`}
          </p>
          <button
            onClick={() => toggleExpand(index)}
            className="mt-2 text-blue-400 hover:underline"
          >
            {expandedPosts.includes(index) ? "Read Less" : "Read More"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default entries;
