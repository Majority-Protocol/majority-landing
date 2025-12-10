import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { useEffect } from "react";
import { FooterContent } from "./components/FooterContent";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
  // Preload the most likely first-visible images from CreateQuestionTypeSelector
  { rel: "preload", as: "image", href: "/questions/popular.png" },
  { rel: "preload", as: "image", href: "/questions/play-popular.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const matches = useMatches();

  const footerType = matches[matches.length - 1]?.handle as "none" | undefined;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        {footerType === "none" ? null : (
          <footer className="w-full bg-gradient-to-b from-sky-600 to-sky-950">
            <FooterContent />
          </footer>
        )}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
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

  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
