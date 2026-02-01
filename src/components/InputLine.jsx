import { useState, useRef } from "react";

export default function InputLine({ onCommand, mask = false, prefix = "ak@portfolio:~$" }) {
  const [value, setValue] = useState("");
  const [lastPress, setLastPress] = useState(0);
  const [enterCount, setEnterCount] = useState(0);
  const ref = useRef(null);
  const handleKeyDown = (e) => {

    if (e.key === "Tab") {
      e.preventDefault();
      const auto = getAutocomplete(value.trim());
      setValue(auto);
      return;
    }

    if (e.key === "Enter") {
      const now = Date.now();
      const diff = now - lastPress;

      if (diff < 450) {
        const auto = getAutocomplete(value.trim());
        if (auto !== value.trim()) {
          setValue(auto);
          setLastPress(0);
          return;
        }
      }

      onCommand(value);
      setValue("");
      setLastPress(now);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key !== "Enter") return;

    setEnterCount((prev) => {
      if (prev === 0) {
        setTimeout(() => setEnterCount(0), 400); // reset window
        return 1;
      }

      const auto = getAutocomplete(value.trim());
      if (auto !== value.trim()) {
        setValue(auto);
        return 0;
      }

      return 0;
    });
  };

  return (
    <div className="flex items-center">
      <b className="mr-2">{prefix}</b>
      <input
        ref={ref}
        autoFocus
        type={mask ? "password" : "text"}
        autoComplete="off"
        spellCheck="false"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        className="bg-transparent flex-1 outline-none text-green-400 placeholder:text-green-600"
      />
    </div>
  );
}

function getAutocomplete(input) {
  if (!input) return input;

  const cmds = [
    "about",
    "help",
    "skills",
    "projects",
    "project",
    "contact",
    "photo",
    "sudo photo",
  ];

  const match = cmds.find((c) => c.startsWith(input.toLowerCase()));
  return match || input;
}
