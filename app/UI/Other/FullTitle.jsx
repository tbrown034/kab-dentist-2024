import React from "react";

// FullTitle Component
const FullTitle = ({ title, highlightedText, highlightInFront }) => {
  return (
    <>
      {highlightInFront ? (
        <>
          <span className="text-teal-500">{highlightedText}</span>{" "}
          {title.replace(highlightedText, "")}
        </>
      ) : (
        <>
          {title.replace(highlightedText, "")}{" "}
          <span className="text-teal-500">{highlightedText}</span>
        </>
      )}
    </>
  );
};

export default FullTitle;
