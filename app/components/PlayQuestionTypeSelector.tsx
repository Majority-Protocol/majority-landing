"use client";

import { useState } from "react";

export const PlayQuestionTypeSelector = () => {
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
    <div className="w-80 inline-flex flex-col justify-start items-start gap-2">
      <div className="justify-start text-sky-950 text-xl font-semibold uppercase">
        Types of Games
      </div>
      <div className="w-80 flex flex-col justify-start items-start gap-1">
        {items.map((item) => (
          <div key={item} className="w-full flex flex-row relative">
              {selectedItem === item && (
                <div className="absolute top-0 right-0">
                  <img
                    width={320}
                    height={64}
                    src="/pink-selection.svg"
                    alt="Pink Selection"
                  />
                </div>
              )}
            <button
              type="button"
              onClick={() => handleItemClick(item)}
              className={`
                    flex w-[295px] z-10 text-[#001842] text-xl font-normal p-4.5 rounded-md cursor-pointer transition-colors ${
                      selectedItem === item
                        ? "text-white"
                        : "bg-white"
                    }`}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
