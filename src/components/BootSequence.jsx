import { useEffect, useState, useCallback } from "react";
import { useTheme } from "../themes/ThemeContext";

const BOOT_STEPS = [
  { t: 0,    ok: false, dim: true,  text: "BIOS V1.15  —  Acer  —  Aspire E5-573" },
  { t: 100,  ok: false, dim: true,  text: "" },
  { t: 160,  ok: true,             text: "loading kernel 7.0.11-zen1-1-zen" },
  { t: 340,  ok: true,             text: "mounting filesystem (ext4)" },
  { t: 500,  ok: true,             text: "starting uwm" },
  { t: 630,  ok: true,             text: "starting foot" },
  { t: 750,  ok: true,             text: "loading wayland" },
  { t: 900,  ok: true,             text: "importing projects.db" },
  { t: 1060, ok: true,             text: "indexing skills manifest" },
  { t: 1220, ok: true,             text: "spawning portfolio shell v2.0" },
  { t: 1380, ok: false, dim: true,  text: "" },
  { t: 1440, ok: false,            text: "Artix Linux 7.0.11-zen1-1-zen (tty1)" },
  { t: 1600, ok: false,            text: "portfolio login: ak" },
  { t: 1760, ok: false, dim: true,  text: "" },
];

const BANNER = `  \u2584\u2580\u2584 \u2588\u2584\u2580   \u2584\u2580\u2580 \u2588\u2584\u2588 \u2588\u2588\u2580 \u2588   \u2588
  \u2588\u2580\u2588 \u2588 \u2588   \u2584\u2588\u2588 \u2588 \u2588 \u2588\u2584\u2584 \u2588\u2584\u2584 \u2588\u2584\u2584`;

export default function BootSequence({ onFinish }) {
  const { theme } = useTheme();
  const [steps, setSteps]   = useState([]);
  const [banner, setBanner] = useState(false);

  const finish = useCallback(() => {
    setBanner(true);
    setTimeout(onFinish, 400);
  }, [onFinish]);

  useEffect(() => {
    const skip = () => finish();
    window.addEventListener("keydown", skip, { once: true });
    window.addEventListener("pointerdown", skip, { once: true });

    const timers = BOOT_STEPS.map((s) =>
      setTimeout(() => setSteps((p) => [...p, s]), s.t)
    );
    const autoFinish = setTimeout(finish, 2000);

    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
      timers.forEach(clearTimeout);
      clearTimeout(autoFinish);
    };
  }, [finish]);

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      fontSize: "clamp(0.72rem, 1.7vw, 0.875rem)",
      color: theme.text,
      padding: "1.5rem 2rem",
      display: "flex",
      flexDirection: "column",
    }}>
      {steps.map((s, i) => {
        if (s.text === "") return <div key={i} style={{ height: "0.8em" }} />;

        if (s.ok) return (
          <div key={i} style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "2px",
            animation: "bl 0.08s ease forwards",
            opacity: 0,
          }}>
            <span style={{ color: theme.accent, fontWeight: 700, minWidth: "40px", flexShrink: 0 }}>
              [ ok ]
            </span>
            <span style={{ color: theme.textDim }}>{s.text}</span>
          </div>
        );

        return (
          <div key={i} style={{
            color: s.dim ? theme.textMuted : theme.text,
            marginBottom: "2px",
            animation: "bl 0.08s ease forwards",
            opacity: 0,
            letterSpacing: s.dim ? "normal" : "0.02em",
          }}>
            {s.text}
          </div>
        );
      })}

      {banner && (
        <>
          <div style={{ height: "1.5rem" }} />
          <pre style={{
            color: theme.accent,
            fontSize: "clamp(0.6rem, 1.4vw, 0.8rem)",
            lineHeight: 1.4,
            animation: "bl 0.2s ease forwards",
            opacity: 0,
            letterSpacing: "0.02em",
            margin: 0,
          }}>
            {BANNER}
          </pre>
          <div style={{
            marginTop: "0.6rem",
            color: theme.textMuted,
            fontSize: "0.75rem",
            animation: "bl 0.2s 0.1s ease forwards",
            opacity: 0,
          }}>
            type 'help' to begin
          </div>
        </>
      )}

      {steps.length > 0 && !banner && (
        <div style={{
          marginTop: "1.2rem",
          color: theme.textMuted,
          fontSize: "0.65rem",
          animation: "bl 0.3s ease forwards",
          opacity: 0,
        }}>
          press any key to skip
        </div>
      )}

      <style>{`
        @keyframes bl {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
