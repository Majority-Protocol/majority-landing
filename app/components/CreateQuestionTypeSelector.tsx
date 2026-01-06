"use client";

import { useEffect, useMemo, useState } from "react";

type QuestionType =
  | "Majority"
  | "Popular"
  | "Prediction"
  | "Opinion"
  | "Trivia";

const SelectorData = {
  Majority: {
    createImage: "/questions/majority.png",
    playImage: "/questions/play-majority.png",
    description: "Pick the answer you think most players will choose.",
  },
  Popular: {
    createImage: "/questions/popular.png",
    playImage: "/questions/play-popular.png",
    description:
      "Choose your answer and guess how many others picked the same.",
  },
  // "Prediction": {
  //   createImage: "/questions/prediction.png",
  //   playImage: "/questions/play-prediction.png",
  // },
  // "Opinion": {
  //   createImage: "/questions/opinion.png",
  //   playImage: "/questions/play-opinion.png",
  // },
  Trivia: {
    createImage: "/questions/trivia.png",
    playImage: "/questions/play-trivia.png",
    description: "Select the correct answer to a trivia question.",
  },
} as const;

export const CreateQuestionTypeSelector = ({
  selectorType,
}: {
  selectorType: "creator" | "player";
}) => {
  const [selectedItem, setSelectedItem] = useState<QuestionType>("Majority");
  const [displayedItem, setDisplayedItem] = useState<QuestionType>("Majority");
  const [isVisible, setIsVisible] = useState(true);

  const handleItemClick = (item: QuestionType) => {
    if (item === selectedItem) return;
    setSelectedItem(item);
    setIsVisible(false);
  };

  // Precompute current src and background preloads
  const currentSrc = useMemo(() => {
    const data = SelectorData[displayedItem as keyof typeof SelectorData];
    return selectorType === "creator" ? data.createImage : data.playImage;
  }, [displayedItem, selectorType]);

  // When the selected item changes, swap the displayed image after fade-out
  useEffect(() => {
    if (displayedItem === selectedItem) return;
    const timeout = setTimeout(() => {
      setDisplayedItem(selectedItem);
    }, 300); // match transition duration
    return () => clearTimeout(timeout);
  }, [selectedItem, displayedItem]);

  // Warm the cache for all candidate images in the background after mount
  useEffect(() => {
    const urls = Object.values(SelectorData).map((d) =>
      selectorType === "creator" ? d.createImage : d.playImage,
    );
    const unique = Array.from(new Set(urls));
    const preloaders = unique
      .filter((u) => typeof u === "string")
      .map((u) => {
        const img = new Image();
        img.decoding = "async";
        img.loading = "eager";
        img.src = u as string;
        return img;
      });
    return () => {
      // no cleanup needed; allow GC
      void preloaders;
    };
  }, [selectorType]);

  return (
    <div className="space-y-10">
      <div className="bg-white rounded-full flex justify-evenly p-2 md:p-3 text-[#001842] shadow-lg border border-gray-100">
        {Object.entries(SelectorData).map(([item]) => (
          <button
            type="button"
            key={item}
            onClick={() => handleItemClick(item as QuestionType)}
            className={`px-3 lg:px-12 py-2 lg:py-4 cursor-pointer rounded-full text-xs lg:text-base font-semibold transition-all duration-300 ${
              selectedItem === item
                ? "bg-linear-to-r from-primary-fade to-primary text-white shadow-md shadow-primary/25"
                : "bg-white hover:bg-gray-50 text-[#001842]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="max-w-sm mx-auto">
        <img
          src={currentSrc}
          alt={displayedItem}
          decoding="async"
          loading="eager"
          fetchPriority="high"
          onLoad={() => setIsVisible(true)}
          className={`filter transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] drop-shadow-xl ${isVisible ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-[2px]"}`}
        />
      </div>
      {selectorType === "creator" ? (
        <p className="text-lg text-[#001842] text-center font-medium">
          {SelectorData[displayedItem as keyof typeof SelectorData].description}
        </p>
      ) : null}
    </div>
  );
};
