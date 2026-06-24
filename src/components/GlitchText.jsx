import { useState, useEffect } from "react";

const GLITCH_CHARS = "\u2588\u2593\u2592\u2591\u2554\u2557\u255A\u255D\u2551\u2550\u2560\u2563\u2566\u2569\u256C\u2580\u2584\u25A0\u25A1\u25AA\u25AB\u25C6\u25C7\u25CB\u25CF";

function randomGlitch(str) {
  return str.split("").map((c) =>
    Math.random() < 0.35 && c !== " " && c !== ":" && c !== "\n"
      ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
      : c
  ).join("");
}

export default function GlitchText({ text, theme }) {
  const [display, setDisplay] = useState(() => randomGlitch(text));
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (settled) return;
    const maxIterations = 6;

    const interval = setInterval(() => {
      setDisplay((prev) => {
        const currentLen = settled ? text.length : prev.length;
        const next = currentLen;
        if (next >= text.length) {
          clearInterval(interval);
          setSettled(true);
          return text;
        }
        const restoreCount = Math.floor((next / maxIterations) * text.length);
        return text.slice(0, restoreCount) + randomGlitch(text.slice(restoreCount));
      });
    }, 55);

    return () => clearInterval(interval);
  }, [text, settled]);

  return (
    <span style={{
      color: settled ? theme.textDim : theme.text,
      fontFamily: "'IBM Plex Mono', monospace",
      whiteSpace: "pre-wrap",
      transition: settled ? "color 0.3s ease" : "none",
    }}>
      {display}
    </span>
  );
}
