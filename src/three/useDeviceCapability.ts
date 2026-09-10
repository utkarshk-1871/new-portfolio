"use client";

import { useSyncExternalStore } from "react";

function getSnapshot(): boolean {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isNarrow = window.matchMedia("(max-width: 767px)").matches;
  const lowConcurrency =
    typeof navigator.hardwareConcurrency === "number" &&
    navigator.hardwareConcurrency <= 4;

  return !reducedMotion && !isNarrow && !lowConcurrency;
}

function subscribe(onStoreChange: () => void): () => void {
  const mediaQueries = [
    window.matchMedia("(prefers-reduced-motion: reduce)"),
    window.matchMedia("(max-width: 767px)"),
  ];

  const handler = () => onStoreChange();
  for (const media of mediaQueries) {
    media.addEventListener("change", handler);
  }

  return () => {
    for (const media of mediaQueries) {
      media.removeEventListener("change", handler);
    }
  };
}

function getServerSnapshot(): boolean {
  return false;
}

export function useDeviceCapability(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
