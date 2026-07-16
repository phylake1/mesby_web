"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BLADE_ANGLES = [-72, 0, 72, 144, 216];
const BLADE_DELAY_STEP = 130;
const BLADE_DURATION = 700;
const WORDMARK_DELAY = (BLADE_ANGLES.length - 1) * BLADE_DELAY_STEP + BLADE_DURATION + 150;
const HOLD_UNTIL = WORDMARK_DELAY + 700;
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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-neutral-950 transition-opacity ease-out ${
        phase === "leaving" ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${LEAVE_DURATION}ms` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="h-20 w-20 sm:h-24 sm:w-24">
        {BLADE_ANGLES.map((angle, i) => (
          <g key={angle} transform={`rotate(${angle} 100 100)`}>
            <g transform="translate(100 100)">
              <path
                d="M0,0 L-23,-31 L0,-86 Z"
                fill="white"
                className="loader-blade"
                style={{
                  animationDelay: `${i * BLADE_DELAY_STEP}ms`,
                  animationDuration: `${BLADE_DURATION}ms`,
                }}
              />
            </g>
          </g>
        ))}
      </svg>

      <Image
        src="/logo/navbar-wordmark-white.png"
        alt="Mesby İnşaat"
        width={337}
        height={66}
        className="h-5 w-auto sm:h-6 loader-wordmark"
        style={{ animationDelay: `${WORDMARK_DELAY}ms` }}
        priority
      />
    </div>
  );
}
