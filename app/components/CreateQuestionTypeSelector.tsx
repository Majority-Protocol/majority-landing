"use client";

import { useEffect, useMemo, useState } from "react";

const SelectorData = {
  "Majority": {
    createImage: "/questions/majority.png",
    playImage: "/questions/play-majority.png",
  },
  "Popular": {
    createImage: "/questions/popular.png",
    playImage: "/questions/play-popular.png",
  },
  "Prediction": {
    createImage: "/questions/prediction.png",
    playImage: "/questions/play-prediction.png",
  },
  "Opinion": {
    createImage: "/questions/opinion.png",
    playImage: "/questions/play-opinion.png",
  },
  "Trivia": {
    createImage: "/questions/trivia.png",
    playImage: "/questions/play-trivia.png",
  },
} as const;

export const CreateQuestionTypeSelector = ({selectorType}: {selectorType: "creator" | "player" }) => {
  const [selectedItem, setSelectedItem] = useState("Popular");
  const [displayedItem, setDisplayedItem] = useState("Popular");
  const [isVisible, setIsVisible] = useState(true);

  const handleItemClick = (item: string) => {
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
      selectorType === "creator" ? d.createImage : d.playImage
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
    <>
      <div className="bg-white rounded-full flex justify-evenly p-3 text-sky-950 shadow-[inset_0_4px_6px_0_rgba(1,26,68,0.08)]">
        {Object.entries(SelectorData).map(([item, data]) => (
          <button
            type="button"
            key={item}
            onClick={() => handleItemClick(item)}
            className={`px-1.5 lg:px-12 py-1.5 lg:py-4 cursor-pointer rounded-full text-xs lg:text-base transition-colors ${
              selectedItem === item ? "bg-[#011A44] text-white" : "bg-white hover:bg-sky-950/5"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="max-w-sm mx-auto pt-10">
        <img
          src={currentSrc}
          alt={displayedItem}
          decoding="async"
          loading="eager"
          fetchPriority="high"
          onLoad={() => setIsVisible(true)}
          className={`filter transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-[2px]"}`}
        />
      </div>
    </>
  );
};
