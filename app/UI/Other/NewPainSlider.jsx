"use client";
import React from "react";

const NewPainSlider = ({ register, value }) => {
  const painDescriptions = {
    1: { text: "No pain", emoji: "😄" },
    2: { text: "Very mild pain, barely noticeable", emoji: "🙂" },
    3: { text: "Minor pain", emoji: "😐" },
    4: { text: "Noticeable pain", emoji: "🙁" },
    5: { text: "Moderate pain", emoji: "😖" },
    6: { text: "Moderately strong pain", emoji: "😣" },
    7: { text: "Strong pain", emoji: "😫" },
    8: { text: "Very strong pain", emoji: "😡" },
    9: { text: "A whole lot of pain", emoji: "😵" },
    10: { text: "Extreme or unbearable pain", emoji: "🤯" },
  };

  return (
    <div className="flex flex-col">
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        id="painLevel"
        {...register("painLevel")}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <div className="flex justify-between w-full mt-2 text-xs">
        <span>No Pain</span>
        <span>Severe Pain</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 font-semibold">
        <p>Value: {value}</p>
        <p>
          {painDescriptions[value]?.text} {painDescriptions[value]?.emoji}
        </p>
      </div>
    </div>
  );
};

export default NewPainSlider;
