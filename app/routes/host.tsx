import { useEffect } from "react";
import { LandingPage } from "../landing/landing";

export function meta() {
  return [
    { title: "Majority" },
    {
      name: "description",
      content:
        "Where creators and fans unite for live, immersive entertainment.",
    },
  ];
}

export default function Home() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const sections = Array.from(document.querySelectorAll("#landing section"));
    sections.forEach((el) => {
      el.classList.add("reveal-on-scroll");
    });

    const makeVisible = (el: Element) => {
      el.classList.add("is-visible");
    };

    if (prefersReducedMotion.matches) {
      sections.forEach(makeVisible);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            makeVisible(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    sections.forEach((el) => {
      observer.observe(el);
    });

    const onPrmChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        sections.forEach(makeVisible);
        observer.disconnect();
      }
    };
    prefersReducedMotion.addEventListener("change", onPrmChange);

    return () => {
      prefersReducedMotion.removeEventListener("change", onPrmChange);
      observer.disconnect();
    };
  }, []);
  return <LandingPage />;
}
