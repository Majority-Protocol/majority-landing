"use client";

import { useState } from "react";

export const CreateQuestionTypeSelector = () => {
  const [selectedItem, setSelectedItem] = useState("Surprisingly Popular");

  const items = [
    "Majority",
    "Surprisingly Popular",
    "Prediction",
    "Opinion",
    "Trivia",
  ];

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="bg-white rounded-full flex justify-center gap-4 p-3 text-sky-950 shadow-[inset_0_4px_6px_0_rgba(1,26,68,0.08)]">
        {items.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => handleItemClick(item)}
            className={`px-6 py-3 rounded-full cursor-pointer transition-colors ${
              selectedItem === item ? "bg-[#011A44] text-white" : "bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="max-w-sm mx-auto py-10">
        {/* TODO: Add different images for each item */}
        <img src="/sp-question.png" alt="SP Question" />
      </div>
    </>
  );
};
