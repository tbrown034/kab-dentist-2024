// components/forms/PainSlider.jsx
// Client Component
"use client";

const PainSlider = ({ value, onChange }) => {
  const painDescriptions = {
    1: "No pain",
    2: "Very mild pain, barely noticeable",
    3: "Minor pain",
    4: "Noticeable pain",
    5: "Moderate pain",
    6: "Moderately strong pain",
    7: "Strong pain",
    8: "Very strong pain",
    9: "A whole lot of pain",
    10: "Extreme or unbearable pain",
  };

  return (
    <div className="flex flex-col space-y-4">
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        id="painLevel"
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
      />
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
        <span>No Pain</span>
        <span>Severe Pain</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">Level: {value}</p>
        <p className="text-base text-gray-700 dark:text-gray-200">{painDescriptions[value]}</p>
      </div>
    </div>
  );
};

export default PainSlider;
