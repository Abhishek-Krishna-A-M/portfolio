import { useEffect, useState } from "react";

const PANIC_LINES = [
  { t: 0,    text: "" },
  { t: 80,   text: "[   0.000000] Initializing cgroup subsys cpuset" },
  { t: 110,  text: "[   0.000000] Linux version 7.0.11-zen1-1-zen (gcc 16.1.1)" },
  { t: 140,  text: "[   0.052831] ACPI: IRQ0 used by override." },
  { t: 170,  text: "[   0.194553] PCI: Using configuration type 1 for base access" },
  { t: 200,  text: "" },
  { t: 240,  text: "BUG: kernel NULL pointer dereference, address: 0000000000000000" },
  { t: 260,  text: "#PF: supervisor read access in kernel mode" },
  { t: 280,  text: "#PF: error_code(0x0000) - not-present page" },
  { t: 300,  text: "PGD 0 P4D 0" },
  { t: 320,  text: "Oops: 0000 [#1] PREEMPT SMP NOPTI" },
  { t: 340,  text: "CPU: 0 PID: 1337 Comm: portfolio Not tainted 7.0.11-zen1-1-zen" },
  { t: 360,  text: "Hardware name: Acer Aspire E5-573, BIOS V1.15" },
  { t: 380,  text: "RIP: 0010:ak_portfolio_init+0x42/0x1f0" },
  { t: 400,  text: "Code: 48 89 df e8 17 f9 ff ff 48 85 c0 74 17 48 8b 40 18 48" },
  { t: 420,  text: "RSP: 0018:ffffc900000f3d70 EFLAGS: 00010246" },
  { t: 440,  text: "RAX: 0000000000000000 RBX: ffff888003b3a900 RCX: 0000000000000001" },
  { t: 460,  text: "RDX: 0000000000000000 RSI: ffff888003a00000 RDI: ffff888003b3a900" },
  { t: 480,  text: "Call Trace:" },
  { t: 500,  text: " <TASK>" },
  { t: 520,  text: "  ? portfolio_load_recruiter+0x18/0x60" },
  { t: 540,  text: "  ? sway_workspace_init+0x2c/0x80" },
  { t: 560,  text: "  ? arch_install+0x1a/0x40  [btw]" },
  { t: 580,  text: "  ? neovim_startup+0x9/0x20  [no_emacs]" },
  { t: 600,  text: " </TASK>" },
  { t: 620,  text: "" },
  { t: 660,  text: "---[ end trace a4f7c2b3d91e8045 ]---" },
  { t: 700,  text: "" },
  { t: 780,  text: "Kernel panic - not syncing: Fatal exception" },
  { t: 900,  text: "" },
  { t: 1100, text: "--- recovering ---" },
  { t: 1400, text: "" },
  { t: 1600, text: "[  OK  ] portfolio shell restored." },
  { t: 1800, text: "[  OK  ] no actual harm done." },
  { t: 2000, text: "[  OK  ] type 'help' to continue." },
];

export default function KernelPanic({ theme, onRecover }) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const timers = PANIC_LINES.map((l) =>
      setTimeout(() => setLines((p) => [...p, l.text]), l.t)
    );
    const doneT = setTimeout(() => { onRecover(); }, 2200);

    return () => { timers.forEach(clearTimeout); clearTimeout(doneT); };
  }, [onRecover]);

  const isCritical = (line) =>
    line.startsWith("BUG:") || line.startsWith("Kernel panic") ||
    line.startsWith("Oops:") || line.startsWith("#PF:");

  const isOk = (line) => line.startsWith("[  OK  ]");
  const isRecovering = (line) => line.startsWith("--- recovering");

  return (
    <div style={{
      position: "fixed", inset: 0,
      background: "#000",
      zIndex: 9999,
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: "clamp(0.6rem, 1.4vw, 0.78rem)",
      padding: "2rem",
      overflowY: "auto",
      animation: "fadeIn 0.05s ease",
    }}>
      {lines.map((line, i) => (
        <div key={i} style={{
          color: isCritical(line) ? "#ffffff" : isOk(line) ? theme.accent : isRecovering(line) ? theme.textDim : "#9ca3af",
          fontWeight: isCritical(line) ? "700" : "400",
          lineHeight: "1.5",
          marginBottom: line === "" ? "0.4rem" : "1px",
          animation: "fadeIn 0.05s ease",
          letterSpacing: isCritical(line) ? "0.02em" : "normal",
        }}>
          {line}
        </div>
      ))}
      <style>{`@keyframes fadeIn { from{opacity:0} to{opacity:1} }`}</style>
    </div>
  );
}
