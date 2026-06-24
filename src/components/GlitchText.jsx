import { useState, useEffect } from "react";
import { themes } from "../data/themes.js";

const GLITCH_CHARS = "█▓▒░╔╗╚╝║═╠╣╦╩╬▄▀■□▪▫◆◇○●";

function randomGlitch(str) {
  return str.split("").map((c) =>
    Math.random() < 0.35 && c !== " " && c !== ":" && c !== "\n"
      ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
      : c
  ).join("");
}

export default function GlitchText({ text }) {
  const theme = themes.void;
  const [display, setDisplay] = useState(() => randomGlitch(text));
  const [settled, setSettled] = useState(false);
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    if (settled) return;
    const maxIterations = 6;

    const interval = setInterval(() => {
      setIteration((prev) => {
        const next = prev + 1;
        if (next >= maxIterations) {
          clearInterval(interval);
          setDisplay(text);
          setSettled(true);
          return next;
        }
        // progressively restore from left
        const restoreCount = Math.floor((next / maxIterations) * text.length);
        setDisplay(
          text.slice(0, restoreCount) + randomGlitch(text.slice(restoreCount))
        );
        return next;
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
