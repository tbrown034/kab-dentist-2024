// FullTitle Component
const FullTitle = ({ title, highlightedText, highlightInFront }) => {
  const remainingText = title.replace(highlightedText, "").trim();
  
  return (
    <>
      {highlightInFront ? (
        <>
          <span className="text-teal-600">{highlightedText}</span>
          {remainingText && <>{remainingText.startsWith(",") ? "" : " "}{remainingText}</>}
        </>
      ) : (
        <>
          {remainingText}
          {remainingText && " "}
          <span className="text-teal-600">{highlightedText}</span>
        </>
      )}
    </>
  );
};

export default FullTitle;
