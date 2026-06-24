import { themes } from "../data/themes.js";
import GlitchText from "./GlitchText.jsx";

export default function OutputBlock({ results }) {
  if (!results || results.length === 0) return null;

  return (
    <div style={{ marginTop: "2px" }}>
      {results.map((r, i) => <ResultLine key={i} r={r} />)}
    </div>
  );
}

function ResultLine({ r }) {
  const theme = themes.void;
  const base = {
    fontFamily: theme.fontFamily,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    lineHeight: "1.65",
    fontSize: "inherit",
  };

  switch (r.type) {
    case "text":
      return <div style={{ ...base, color: theme.text }}>{r.text}</div>;

    case "dim":
      return <div style={{ ...base, color: theme.textDim }}>{r.text}</div>;

    case "ok":
      return <div style={{ ...base, color: theme.accent, fontWeight: 600 }}>{r.text}</div>;

    case "warn":
      return <div style={{ ...base, color: theme.warn }}>{r.text}</div>;

    case "error":
      return (
        <div style={{ ...base, color: theme.error }}>
          {r.text}
        </div>
      );

    case "glitch":
      return (
        <div style={{ ...base }}>
          <GlitchText text={r.text} />
        </div>
      );

    case "link":
      return (
        <div style={{ ...base, color: theme.accent }}>
          <a
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            {r.text}
          </a>
        </div>
      );

    case "photo":
      return <SudoPhoto theme={theme} />;

    default:
      return null;
  }
}

function SudoPhoto({ theme }) {
  return (
    <div style={{ fontFamily: theme.fontFamily }}>
      <div style={{ color: theme.accent, whiteSpace: "pre", marginBottom: "8px" }}>
{`[ auth ok ] decrypting profile_image.enc...`}
      </div>
      <img
        src="/my-ascii-photo.png"
        alt="Abhishek Krishna"
        style={{
          display: "block",
          maxWidth: "260px",
          border: `1px solid ${theme.border}`,
          borderRadius: "2px",
        }}
        onError={(e) => {
          e.target.replaceWith(Object.assign(document.createElement("div"), {
            textContent: "[image not found — add /public/my-ascii-photo.png]",
            style: `color:${theme.textDim};font-family:${theme.fontFamily}`,
          }));
        }}
      />
      <div style={{ color: theme.textDim, whiteSpace: "pre", marginTop: "8px" }}>
{`"told you it was worth the sudo."`}
      </div>
    </div>
  );
}
