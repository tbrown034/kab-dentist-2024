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

  // Determine color based on pain level
  const getColorClass = () => {
    if (value <= 3) return "from-teal-600 to-teal-700 dark:from-teal-400 dark:to-teal-500";
    if (value <= 6) return "from-gray-600 to-gray-700 dark:from-gray-400 dark:to-gray-500";
    return "from-orange-600 to-orange-700 dark:from-orange-400 dark:to-orange-500";
  };

  const getSliderColor = () => {
    if (value <= 3) return "rgb(20 184 166)"; // teal
    if (value <= 6) return "rgb(107 114 128)"; // gray
    return "rgb(251 146 60)"; // orange
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
        className="w-full h-3 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full appearance-none cursor-pointer slider shadow-inner transition-all duration-300"
        style={{
          background: `linear-gradient(to right, ${getSliderColor()} 0%, ${getSliderColor()} ${(value - 1) * 11.11}%, rgb(229 231 235) ${(value - 1) * 11.11}%, rgb(229 231 235) 100%)`,
          color: getSliderColor() // Sets border color for thumb
        }}
      />
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-500 dark:text-gray-400">1</span>
        <span className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">Pain Scale</span>
        <span className="font-medium text-gray-500 dark:text-gray-400">10</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-1.5 text-center p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
        <p className={`text-lg font-bold bg-gradient-to-r ${getColorClass()} bg-clip-text text-transparent transition-all duration-300`}>
          Level {value}
        </p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{painDescriptions[value]}</p>
      </div>
    </div>
  );
};

export default PainSlider;
