import { useState, useRef, useEffect, useCallback } from "react";
import { themes } from "../data/themes.js";
import { handle, handleSudo, T } from "../utils/commandHandler.jsx";
import InputLine from "./InputLine.jsx";
import OutputBlock from "./OutputBlock.jsx";
import KernelPanic from "./KernelPanic.jsx";
import BootSequence from "./BootSequence.jsx";
import { HOME } from "../data/fsCommands.js";

const SUDO_PASS = "akiscool";
const HINT = "try: help  \u00b7  about  \u00b7  projects  \u00b7  webernyx  \u00b7  panic";

export default function Terminal() {
  const theme = themes.void;
  const [booted, setBooted]           = useState(false);
  const [entries, setEntries]         = useState([]);
  const [cwd, setCwd]                 = useState(HOME);
  const [isSudo, setIsSudo]           = useState(false);
  const [awaitPass, setAwaitPass]     = useState(false);
  const [pendingSudo, setPendingSudo] = useState(null);
  const [history, setHistory]         = useState([]);
  const [histIdx, setHistIdx]         = useState(-1);
  const [inputVal, setInputVal]       = useState("");
  const [showPanic, setShowPanic]     = useState(false);
  const [sessionStart]                = useState(() => Date.now());

  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, [booted]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [entries]);

  const focus = () => inputRef.current?.focus();

  const push = useCallback((cmd, results, opts = {}) =>
    setEntries((p) => [...p, { cmd, results, cwd: opts.cwd, isPassword: opts.isPassword }]),
  []);

  const prompt = awaitPass
    ? "[sudo] password for ak:"
    : isSudo
    ? `root@portfolio:${cwd}#`
    : `ak@portfolio:${cwd}$`;

  const exec = useCallback((raw) => {
    if (raw === "__UP__") {
      const idx = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(idx);
      setInputVal(history[idx] ?? "");
      return;
    }
    if (raw === "__DOWN__") {
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInputVal(idx === -1 ? "" : history[idx] ?? "");
      return;
    }

    const cmd = (raw || "").trim();

    if (awaitPass) {
      const masked = cmd.length ? "\u2022".repeat(cmd.length) : "\u2022";
      push(masked, [], { isPassword: true });
      setTimeout(() => {
        if (cmd === SUDO_PASS) {
          setIsSudo(true);
          const results = handleSudo(pendingSudo || "");
          push(null, [T.ok("[sudo] authentication successful"), ...results]);
        } else {
          push(null, [T.error("sudo: 1 incorrect password attempt")]);
        }
        setAwaitPass(false);
        setPendingSudo(null);
      }, 280);
      return;
    }

    if (!cmd) { push("", []); return; }

    setHistory((p) => [cmd, ...p.filter((c) => c !== cmd)].slice(0, 200));
    setHistIdx(-1);
    setInputVal("");

    const results = handle(cmd, { cwd, isSudo, sessionStart });
    let finalResults = [];
    let newCwd = cwd;

    for (const r of results) {
      if (r.type === "clear")   { setEntries([]); return; }
      if (r.type === "panic")   { setShowPanic(true); push(cmd, [], { cwd }); return; }
      if (r.type === "cd")      { newCwd = r.path; continue; }
      if (r.type === "theme")   { continue; }
      if (r.type === "history") {
        finalResults.push(T.text(
          history.length === 0
            ? "(no history yet)"
            : history.map((c, i) => `  ${String(i + 1).padStart(3)}  ${c}`).join("\n")
        ));
        continue;
      }
      if (r.type === "sudo") {
        setPendingSudo(r.cmd);
        setAwaitPass(true);
        push(cmd, finalResults, { cwd });
        push(null, [{ type: "dim", text: "[sudo] password for ak:" }]);
        return;
      }
      finalResults.push(r);
    }

    setCwd(newCwd);
    push(cmd, finalResults, { cwd });
  }, [awaitPass, pendingSudo, cwd, isSudo, history, histIdx, sessionStart, push]);

  const handlePanicRecover = useCallback(() => {
    setShowPanic(false);
    push(null, [T.ok("[ recovered ] system restored. no data lost.")]);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [push]);

  if (!booted) {
    return <BootSequence onFinish={() => setBooted(true)} />;
  }

  return (
    <>
      {showPanic && <KernelPanic onRecover={handlePanicRecover} />}

      <div
        onClick={focus}
        style={{
          background: theme.bg,
          minHeight: "100vh",
          width: "100%",
          fontFamily: theme.fontFamily,
          color: theme.text,
          fontSize: "clamp(0.72rem, 1.7vw, 0.875rem)",
          letterSpacing: "0.01em",
          lineHeight: "1.6",
          cursor: "text",
          padding: "1.5rem 2rem",
          boxSizing: "border-box",
        }}
      >
        {theme.scanlines && (
          <div style={{
            position: "fixed", inset: 0,
            background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.07) 2px,rgba(0,0,0,0.07) 4px)",
            pointerEvents: "none", zIndex: 999,
          }} />
        )}

        <div style={{
          color: theme.textMuted,
          marginBottom: "1.2rem",
          fontSize: "0.78rem",
          borderBottom: `1px solid ${theme.border}`,
          paddingBottom: "0.8rem",
        }}>
          <span style={{ color: theme.accent, fontWeight: 700 }}>ak@portfolio</span>
          {"  \u2014  portfolio shell v2.0  \u2014  "}
          <span style={{ color: theme.textMuted }}>{HINT}</span>
        </div>

        {entries.map((e, i) => (
          <div key={i} style={{
            marginBottom: "0.6rem",
            animation: "ei 0.08s ease forwards",
          }}>
            {e.cmd !== null && (
              <div style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                marginBottom: "1px",
              }}>
                <span style={{
                  color: e.isPassword ? theme.textMuted
                       : (e.cwd || cwd) === HOME ? theme.prompt
                       : theme.prompt,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}>
                  {e.isPassword
                    ? "[sudo] password for ak:"
                    : isSudo
                    ? `root@portfolio:${e.cwd || cwd}#`
                    : `ak@portfolio:${e.cwd || cwd}$`}
                </span>
                <span style={{ color: theme.textDim, wordBreak: "break-all" }}>{e.cmd}</span>
              </div>
            )}
            <OutputBlock results={e.results} />
          </div>
        ))}

        <div ref={bottomRef} />

        <InputLine
          ref={inputRef}
          prefix={prompt}
          mask={awaitPass}
          value={inputVal}
          onChange={setInputVal}
          onCommand={exec}
          placeholder={!awaitPass && !inputVal ? "stuck? \u2192 try 'help'" : ""}
        />

        <style>{`
          @keyframes ei {
            from { opacity: 0; transform: translateY(1px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          input { caret-color: ${theme.cursor}; }
          ::-webkit-scrollbar { width: 3px; }
          ::-webkit-scrollbar-thumb { background: ${theme.border}; border-radius: 2px; }
        `}</style>
      </div>
    </>
  );
}
