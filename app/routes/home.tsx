import type { Route } from "./+types/home";
import { LandingPage } from "../landing/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Majority" },
    { name: "description", content: "Where creators and fans unite for live, immersive entertainment." },
  ];
}

export default function Home() {
  return <LandingPage />;
}
