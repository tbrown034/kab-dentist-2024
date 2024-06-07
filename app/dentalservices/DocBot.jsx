"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSpinner,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Transition } from "@headlessui/react";

const DocBot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await fetch("/api/DocBot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: query }),
      });

      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(`Server error: ${errorText}`);
      }

      const data = await result.json();
      if (data.message) {
        throw new Error(data.message);
      }

      // Strip out the source reference from the response
      const strippedResponse = data.answer.replace(/Source:.*\)\n/g, "");

      setResponse(strippedResponse);
    } catch (error) {
      console.error("Error submitting question:", error.message);
      setError(
        "Sorry, there was an error processing your request. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setResponse("");
    setError(null);
  };

  return (
    <section
      id="docBot"
      className="p-6 bg-gray-100 rounded-lg shadow-md dark:text-black"
    >
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight">
        Ask the Doc Bot
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="query" className="font-semibold">
          Ask a question:
        </label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your question here..."
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
        />

        <Transition
          show={response !== ""}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
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
        </Transition>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex items-center px-4 py-2 text-white bg-teal-800 rounded-lg hover:bg-teal-700"
          >
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            ) : (
              <>
                Submit
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-500"
          >
            Clear
            <FontAwesomeIcon icon={faTimes} className="ml-2" />
          </button>
        </div>
      </form>
      {error && (
        <div className="p-4 mt-4 text-red-800 bg-red-100 border rounded-md">
          <h3 className="text-xl font-semibold">Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </section>
  );
};

export default DocBot;
