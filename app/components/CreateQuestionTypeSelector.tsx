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

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  // Precompute current src and background preloads
  const currentSrc = useMemo(() => {
    const data = SelectorData[selectedItem as keyof typeof SelectorData];
    return selectorType === "creator" ? data.createImage : data.playImage;
  }, [selectedItem, selectorType]);

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
          alt={selectedItem}
          decoding="async"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </>
  );
};
