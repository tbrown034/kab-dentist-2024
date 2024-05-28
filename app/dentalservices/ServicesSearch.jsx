"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import servicesContent from "./servicesContent.json";

const ServicesSearch = ({ onSelectService }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    setSearchQuery(""); // Reset the search query
    onSelectService(service);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedService(null);
    onSelectService(null);
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

  return (
    <div
      className={`relative flex flex-col gap-2  ${
        selectedService ? "mt-4" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <label className="font-semibold">Search Our Services:</label>
        <input
          type="text"
          placeholder={
            selectedService ? "Search other services" : "Search our services"
          }
          value={searchQuery}
          onChange={handleSearch}
          className="px-2 py-1 border border-teal-800 rounded-md dark:border-white"
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
        <ul className="absolute z-10 mt-8 overflow-auto bg-white border rounded-md shadow-lg dark:bg-teal-800 max-h-60">
          {filteredSuggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelectService(item)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
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
    </div>
  );
};

export default ServicesSearch;
