"use client";

import { useState } from "react";

const SelectorData = {
  "Majority": {
    createImage: "/questions/majority.png",
    playImage: "/questions/majority.png",
  },
  "Popular": {
    createImage: "/questions/popular.png",
    playImage: "/questions/popular.png",
  },
  "Prediction": {
    createImage: "/questions/prediction.png",
    playImage: "/questions/prediction.png",
  },
  "Opinion": {
    createImage: "/questions/opinion.png",
    playImage: "/questions/opinion.png",
  },
  "Trivia": {
    createImage: "/questions/trivia.png",
    playImage: "/questions/trivia.png",
  },
} as const;

export const CreateQuestionTypeSelector = ({selectorType}: {selectorType: "creator" | "player" }) => {
  const [selectedItem, setSelectedItem] = useState("Popular");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="bg-white rounded-full flex justify-evenly p-3 text-sky-950 shadow-[inset_0_4px_6px_0_rgba(1,26,68,0.08)]">
        {Object.entries(SelectorData).map(([item, data]) => (
          <button
            type="button"
            key={item}
            onClick={() => handleItemClick(item)}
            className={`px-1.5 lg:px-12 py-1.5 lg:py-4 cursor-pointer rounded-full text-xs lg:text-base transition-colors ${
              selectedItem === item ? "bg-[#011A44] text-white" : "bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="max-w-sm mx-auto py-10">
        <img
          src={selectorType === "creator"
            ? SelectorData[selectedItem as keyof typeof SelectorData].createImage
            : SelectorData[selectedItem as keyof typeof SelectorData].playImage}
          alt={selectedItem}
        />
      </div>
    </>
  );
};
