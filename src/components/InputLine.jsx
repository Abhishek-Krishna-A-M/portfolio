import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const COMPLETIONS = [
  "about", "skills", "projects", "project ", "contact", "help", "webernyx",
  "ls", "cat ", "cd ", "tree", "pwd",
  "fastfetch", "neofetch", "uptime", "history", "clear", "panic",
  "theme ", "theme void", "theme gruvbox", "theme nord", "theme hacker",
  "sudo ", "sudo cat ", "sudo message ", "sudo photo", "sudo ego",
  "github", "whoami", "echo ", "date", "uname -a",
  "cat ~/.bashrc", "cat ~/.config/sway/config",
  "cat /home/ak/secret.txt", "ls /home/ak",
];

function autocomplete(input) {
  if (!input) return input;
  const lower = input.toLowerCase();
  const match = COMPLETIONS.find((c) => c.toLowerCase().startsWith(lower));
  return match || input;
}

const InputLine = forwardRef(function InputLine(
  { onCommand, mask = false, prefix, disabled = false, value, onChange, placeholder, theme },
  ref
) {
  const inputRef = useRef(null);
  const lastEnter = useRef(0);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const completed = autocomplete(value.trim());
      if (completed !== value) onChange(completed);
      return;
    }
    if (e.key === "Enter") {
      const now = Date.now();
      if (now - lastEnter.current < 380) {
        const completed = autocomplete(value.trim());
        if (completed !== value.trim()) { onChange(completed); lastEnter.current = 0; return; }
      }
      lastEnter.current = now;
      onCommand(value);
      return;
    }
    if (e.key === "ArrowUp")   { e.preventDefault(); onCommand("__UP__");   return; }
    if (e.key === "ArrowDown") { e.preventDefault(); onCommand("__DOWN__"); return; }
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: theme.fontFamily,
      fontSize: "inherit",
      padding: "1px 0",
    }}>
      <span style={{
        color: theme.prompt,
        fontWeight: 700,
        whiteSpace: "nowrap",
        userSelect: "none",
        letterSpacing: "0.01em",
      }}>
        {prefix}
      </span>
      <input
        aria-label="Terminal command input"
        placeholder={placeholder}
        ref={inputRef}
        type={mask ? "password" : "text"}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          color: theme.text,
          fontFamily: theme.fontFamily,
          fontSize: "inherit",
          caretColor: theme.cursor,
          letterSpacing: "0.01em",
          minWidth: 0,
          opacity: value ? 1 : 0.8,
        }}
      />
    </div>
  );
});

export default InputLine;
