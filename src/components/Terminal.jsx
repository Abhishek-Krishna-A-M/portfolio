import { useState, useRef, useEffect } from "react";
import InputLine from "./InputLine";
import CommandOutput from "./CommandOutput";
import handleCommand from "../utils/commandHandler";
import showProject from "../commands/project"; // <– use this directly
import banner from "../commands/banner";

export default function Terminal() {
  const [output, setOutput] = useState([]);
  const [awaitingPassword, setAwaitingPassword] = useState(false);
  const [pendingSudoCmd, setPendingSudoCmd] = useState(null);
  const terminalRef = useRef(null);

  const push = (node) => setOutput((prev) => [...prev, node]);

  useEffect(() => {
    if (terminalRef.current)
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [output]);

  const executeCommand = (raw) => {
    const cmd = (raw || "").trim();
    const parts = cmd.split(" ").filter(Boolean);
    const base = parts[0]?.toLowerCase();
    const args = parts.slice(1);

    // clear command
    if (!awaitingPassword && base === "clear") {
      setOutput([]);
      return;
    }

    // handle password entry
    if (awaitingPassword) {
      const masked = "*".repeat(cmd.length || 1);
      push({ node: <p>sudo password: {masked}</p> });

      setTimeout(() => {
        if (pendingSudoCmd === "sudo photo") {
          const sudoResult = handleCommand("sudo photo");
          push({ node: sudoResult });
        } else {
          push({
            node: (
              <pre>{`do you really think I’ll give you root privileges? pft... 😏`}</pre>
            ),
          });
        }
        setAwaitingPassword(false);
        setPendingSudoCmd(null);
      }, 400);
      return;
    }

    // detect sudo
    if (base === "sudo") {
      push({ node: <p><b>ak@portfolio:~$</b> {cmd}</p> });
      setAwaitingPassword(true);
      setPendingSudoCmd(cmd);
      return;
    }

    // project command (multi-word)
    if (base === "project") {
      push({
        node: (
          <div>
            <p><b>ak@portfolio:~$</b> {cmd}</p>
            <div>{showProject(args)}</div>
          </div>
        ),
      });
      return;
    }

    // normal one-word commands (delegated to handler)
    const result = handleCommand(base);
    push({
      node: (
        <div>
          <p><b>ak@portfolio:~$</b> {cmd}</p>
          <div>{result}</div>
        </div>
      ),
    });
  };

  return (
    <div className="terminal-container w-full max-w-2xl bg-black/80 p-6 rounded-xl shadow-[0_0_15px_#00ff66] overflow-auto">
      <div className="mb-4 text-center">{banner}</div>

      <div ref={terminalRef} className="min-h-[300px] max-h-[60vh] overflow-y-auto pb-4">
        {output.map((line, i) => (
          <div key={i} className="mb-2">
            {line.node}
          </div>
        ))}

        <InputLine
          onCommand={executeCommand}
          mask={awaitingPassword}
          prefix={awaitingPassword ? "sudo password:" : "ak@portfolio:~$"}
        />
      </div>
    </div >
  );
}
