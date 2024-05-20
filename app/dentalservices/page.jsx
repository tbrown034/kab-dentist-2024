"use client";
import React, { useState, useRef, useEffect } from "react";
import FAQs from "./FAQs";
import { raleway } from "../font";
import FullTitle from "../UI/Other/FullTitle";
import sectionContents from "../../sectionContent.json";
import ServicesSeparator from "./ServicesSeparator";
import servicesContent from "./servicesContent.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ServicesSearch = () => {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.dentalServicesPage;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const suggestionsRef = useRef(null);
  const searchBoxRef = useRef(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setActiveIndex(-1);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    setSearchQuery(""); // Reset the search query
    setActiveIndex(-1);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedService(null);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (filteredSuggestions.length > 0) {
      if (e.key === "ArrowDown") {
        setActiveIndex((prevIndex) =>
          prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      } else if (e.key === "Enter" && activeIndex >= 0) {
        handleSelectService(filteredSuggestions[activeIndex]);
      }
    }
  };

  const handleClickOutside = (event) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setSearchQuery("");
    }
  };

  const filteredSuggestions = servicesContent
    .flatMap((service) =>
      service.details.map((detail) => ({
        ...detail,
        parentTitle: service.title,
      }))
    )
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery) ||
        (item.description &&
          item.description.toLowerCase().includes(searchQuery))
    );

  useEffect(() => {
    if (suggestionsRef.current && activeIndex >= 0) {
      suggestionsRef.current.children[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Guard clause to ensure rendering only occurs if data is available
  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="flex flex-col gap-6 mt-6">
      <div className="flex flex-col gap-2">
        <h2
          className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
        >
          <FullTitle
            title={title}
            highlightedText={highlightedText}
            highlightInFront={highlightInFront}
          />
        </h2>
        {textBlock.map((block, blockIndex) => (
          <div key={blockIndex} className="flex flex-col gap-2">
            <p>{block.text}</p>
          </div>
        ))}
      </div>
      <div
        className={`relative flex flex-col gap-2 mb-4 ${
          selectedService ? "mt-4" : ""
        }`}
      >
        <div className="flex items-center gap-2" ref={searchBoxRef}>
          <label className="font-semibold">Search:</label>
          <input
            type="text"
            placeholder={
              selectedService ? "Enter other issues" : "Enter dental issue"
            }
            value={searchQuery}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            className="px-2 py-1 border rounded-md"
          />
          {!selectedService && searchQuery && (
            <button
              onClick={handleClearSearch}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              Clear
            </button>
          )}
        </div>
        {searchQuery && (
          <ul
            className="absolute z-10 mt-8 overflow-auto bg-white border rounded-md shadow-lg dark:bg-teal-800 max-h-60"
            ref={suggestionsRef}
          >
            {filteredSuggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelectService(item)}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  index === activeIndex ? "bg-gray-200" : ""
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedService && (
        <div className="relative p-4 mb-4 border rounded-md">
          <button
            onClick={handleClearSearch}
            className="absolute text-red-500 top-2 right-2 hover:text-red-700"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h3 className="text-xl font-semibold">{selectedService.title}</h3>
          <p className="mt-2">{selectedService.description}</p>
          {selectedService.moreInfo && (
            <a
              href={selectedService.moreInfo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              More info
            </a>
          )}
        </div>
      )}
      <ServicesSeparator />
      <FAQs />
    </section>
  );
};

export default ServicesSearch;
