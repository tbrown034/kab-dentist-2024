"use client";
import { useState } from "react";

const PainSlider = () => {
  const [sliderValue, setSliderValue] = useState(5); // Start in the middle of the scale

  const painDescriptions = {
    1: "No pain",
    2: "Very mild pain, barely noticeable",
    3: "Minor pain",
    4: "Noticeable pain",
    5: "Moderate pain",
    6: "Moderately strong pain",
    7: "Moderately stronger pain",
    8: "Strong pain",
    9: "A whole lot of pain",
    10: "Extreme or unbearable pain",
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-2 py-4">
      <input
        type="range"
        min="1"
        max="10"
        value={sliderValue}
        id="myRange"
        onChange={handleSliderChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <div className="flex justify-between w-full mt-2 text-xs">
        <span className="text-gray-500">No Pain</span>
        <span className="text-gray-500">Severe Pain</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        Selected Value: {sliderValue}
      </p>
      <p className="mt-1 text-sm text-gray-500">
        Description: {painDescriptions[sliderValue]}
      </p>
    </div>
  );
};

export default PainSlider;
