import { useState, useRef, useEffect } from "react";
import InputLine from "./InputLine";
import CommandOutput from "./CommandOutput";
import handleCommand from "../utils/commandHandler";
import showProject from "../commands/project"; 
import banner from "../commands/banner";
import SudoPhoto from "../commands/sudoPhoto";

export default function Terminal() {
  const [output, setOutput] = useState([]);
  const [awaitingPassword, setAwaitingPassword] = useState(false);
  const [pendingSudoCmd, setPendingSudoCmd] = useState(null);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const handleTerminalClick = () => {
    if(inputRef.current){
      inputRef.current.focus();
    }
  };

  const push = (node) => setOutput((prev) => [...prev, node]);

  useEffect(() => {
    inputRef.current?.focus();
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [output]);

const executeCommand = (raw) => {
    const cmd = (raw || "").trim();
    const base = cmd.toLowerCase();

    // 1. Password Phase
    if (awaitingPassword) {
      const masked = "*".repeat(cmd.length || 1);
      push({ node: <p>sudo password: {masked}</p> });

setTimeout(() => {
    if (cmd === "akiscool") {
      if (pendingSudoCmd === "sudo photo") {
        push({ node: <SudoPhoto isSudo={true} /> });
      } else {
        push({ node: <p className="text-green-500">Authentication successful.</p> });
      }
    } else {
      push({ 
        node: <p className="text-red-500 font-bold">sudo: incorrect password attempt</p> 
      });
    }

    setAwaitingPassword(false);
    setPendingSudoCmd(null);
  }, 600);
  return;
}

    // 2. Clear
    if (base === "clear") { setOutput([]); return; }

    // 3. Detect Sudo Photo
    if (base === "sudo photo") {
      push({ node: <p><b>ak@portfolio:~$</b> {cmd}</p> });
      setAwaitingPassword(true);
      setPendingSudoCmd("sudo photo");
      return;
    }

    const result = handleCommand(cmd); 
    
    push({
      node: (
        <div>
          <p><b>ak@portfolio:~$</b> {cmd}</p>
          <div>{result || <p>Command not found. Type 'help'.</p>}</div>
        </div>
      ),
    });
  };

  return (
    <div className="terminal-container w-full max-w-2xl bg-black/80 p-6 rounded-xl shadow-[0_0_15px_#00ff66] overflow-auto"
    onClick={handleTerminalClick}>
      <div className="mb-4 text-center">{banner}</div>

      <div ref={terminalRef} className="min-h-[300px] max-h-[60vh] overflow-y-auto pb-4">
        {output.map((line, i) => (
          <div key={i} className="mb-2">
            {line.node}
          </div>
        ))}

        <InputLine
          inputRef={inputRef}
          onCommand={executeCommand}
          mask={awaitingPassword}
          prefix={awaitingPassword ? "sudo password:" : "ak@portfolio:~$"}
        />
      </div>
    </div >
  );
}
