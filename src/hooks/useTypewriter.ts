"use client";

import { useEffect, useRef, useState } from "react";

export function useTypewriter(words: string[], enabled: boolean): string {
  const [displayText, setDisplayText] = useState("");
  const stateRef = useRef({
    wordIndex: 0,
    charIndex: 0,
    deleting: false,
    pauseTicks: 0,
  });

  useEffect(() => {
    if (!enabled || words.length === 0) {
      return;
    }

    stateRef.current = {
      wordIndex: 0,
      charIndex: 0,
      deleting: false,
      pauseTicks: 0,
    };

    const intervalId = window.setInterval(() => {
      const state = stateRef.current;
      const currentWord = words[state.wordIndex] ?? "";

      if (state.pauseTicks > 0) {
        state.pauseTicks -= 1;
        return;
      }

      if (!state.deleting) {
        state.charIndex += 1;
        setDisplayText(currentWord.slice(0, state.charIndex));

        if (state.charIndex >= currentWord.length) {
          state.deleting = true;
          state.pauseTicks = 20;
        }
        return;
      }

      state.charIndex -= 1;
      setDisplayText(currentWord.slice(0, state.charIndex));

      if (state.charIndex <= 0) {
        state.deleting = false;
        state.wordIndex = (state.wordIndex + 1) % words.length;
        state.pauseTicks = 6;
      }
    }, 80);

    return () => window.clearInterval(intervalId);
  }, [words, enabled]);

  if (!enabled) {
    return words[0] ?? "";
  }

  return displayText;
}
