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
  return <LandingPage />;
}
