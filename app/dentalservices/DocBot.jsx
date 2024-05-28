"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const DocBot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await fetch("/app/api/DocBot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: query }),
      }).then((res) => res.json());

      setResponse(result.answer);
    } catch (error) {
      setResponse(
        "Sorry, there was an error processing your request. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-4 mt-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight">
        Ask the Doc Bot
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="query" className="font-semibold">
          Ask a dental question:
        </label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your question here..."
          className="px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="flex items-center self-start px-4 py-2 text-white bg-teal-800 rounded-lg hover:bg-teal-700"
        >
          {loading ? "Loading..." : "Submit"}
          <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
        </button>
      </form>
      {response && (
        <div className="p-4 mt-4 bg-white border rounded-md">
          <h3 className="text-xl font-semibold">Response:</h3>
          <p>{response}</p>
          <a
            href="https://www.ada.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            More info from the ADA
          </a>
        </div>
      )}
    </section>
  );
};

export default DocBot;
