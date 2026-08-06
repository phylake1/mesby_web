"use client";

import { useEffect, useState } from "react";

const REVEAL_DELAY = 150;
const HOLD_UNTIL = REVEAL_DELAY + 650 + 600;
const LEAVE_DURATION = 550;

export default function Loader() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.body.style.overflow = "hidden";

    const holdMs = prefersReduced ? 350 : HOLD_UNTIL;
    const leaveMs = prefersReduced ? 300 : LEAVE_DURATION;

    const leaveTimer = setTimeout(() => setPhase("leaving"), holdMs);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, holdMs + leaveMs);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950 transition-opacity ease-out ${
        phase === "leaving" ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${LEAVE_DURATION}ms` }}
      aria-hidden="true"
    >
      <span
        className="font-stapel loader-wordmark text-4xl tracking-wide text-white sm:text-5xl"
        style={{ animationDelay: `${REVEAL_DELAY}ms` }}
      >
        <span className="font-medium">MESBY </span>
        <span className="font-light">YAPI</span>
      </span>
    </div>
  );
}
