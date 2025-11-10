import { useState, useEffect, useRef } from "react";

export default function InputLine({ onCommand, mask = false, prefix = "ak@portfolio:~$" }) {
  const [value, setValue] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  }, [mask, prefix]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onCommand(value);
      setValue("");
    }
  };

  return (
    <div className="flex items-center">
      <b className="mr-2">{prefix}</b>
      <input
        ref={ref}
        type={mask ? "password" : "text"}
        autoComplete="off"
        spellCheck="false"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent flex-1 outline-none text-green-400 placeholder:text-green-600"
      />
    </div>
  );
}
