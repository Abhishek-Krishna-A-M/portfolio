import { projectsData, HELP_TEXT, ABOUT_TEXT, SKILLS_TEXT, CONTACT_TEXT, WEBERNYX_TEXT } from "../data/commands.js";
import { fsLs, fsCat, fsCd, fsTree, HOME } from "../data/fsCommands.js";
import { themes } from "../data/themes.js";

export const T = {
  text:    (s)    => ({ type: "text",    text: s }),
  dim:     (s)    => ({ type: "dim",     text: s }),
  error:   (s)    => ({ type: "error",   text: s }),
  warn:    (s)    => ({ type: "warn",    text: s }),
  ok:      (s)    => ({ type: "ok",      text: s }),
  link:    (s, h) => ({ type: "link",    text: s, href: h }),
  clear:   ()     => ({ type: "clear" }),
  theme:   (n)    => ({ type: "theme",   name: n }),
  cd:      (p)    => ({ type: "cd",      path: p }),
  sudo:    (c)    => ({ type: "sudo",    cmd: c }),
  panic:   ()     => ({ type: "panic" }),
  history: ()     => ({ type: "history" }),
  glitch:  (s)    => ({ type: "glitch",  text: s }),
  photo:   ()     => ({ type: "photo" }),
};

export function handle(raw, { cwd = HOME, isSudo = false, sessionStart } = {}) {
  const trimmed = (raw || "").trim();
  const lower   = trimmed.toLowerCase();
  const parts   = lower.split(/\s+/);
  const cmd     = parts[0];
  const args    = trimmed.split(/\s+/).slice(1); // preserve case for args

  // ── meta ─────────────────────────────────────────────────────────
  if (lower === "clear")   return [T.clear()];
  if (lower === "history") return [T.history()];
  if (lower === "panic")   return [T.panic()];

  // ── portfolio ────────────────────────────────────────────────────
  if (lower === "about")   return [T.text(ABOUT_TEXT)];
  if (lower === "skills")  return [T.text(SKILLS_TEXT)];
  if (lower === "contact") return [T.text(CONTACT_TEXT)];
  if (lower === "help")    return [T.text(HELP_TEXT)];

  if (lower === "projects") {
    const feat = Object.entries(projectsData).filter(([,v]) => v.featured);
    const rest  = Object.entries(projectsData).filter(([,v]) => !v.featured);
    const lines = [
      "PROJECTS",
      "─────────────────────────────────────",
      "[ featured ]",
      ...feat.map(([k,v]) => `  ${v.icon}  ${k.padEnd(16)}  ${v.short}`),
      "",
      "[ all ]",
      ...rest.map(([k,v]) => `  ${v.icon}  ${k.padEnd(16)}  ${v.short}`),
      "",
      "─────────────────────────────────────",
      "project <name>  →  full details",
    ];
    return [T.text(lines.join("\n"))];
  }

  if (cmd === "project" && args.length > 0) {
    const key = args[0].toLowerCase();
    const p   = projectsData[key];
    if (!p) return [
      T.error(`project: '${args[0]}': not found`),
      T.dim("run 'projects' to see the list"),
    ];
    const lines = [
      `${p.icon}  ${p.title}`,
      "─────────────────────────────────────",
      ...p.details.map(d => `   ${d}`),
    ];
    if (p.links.live || p.links.github) {
      lines.push("");
      if (p.links.live)   lines.push(`   live    ${p.links.live}`);
      if (p.links.github) lines.push(`   source  ${p.links.github}`);
    }
    return [T.text(lines.join("\n"))];
  }

  // ── filesystem ───────────────────────────────────────────────────
  if (cmd === "ls") {
    const res = fsLs(cwd, args);
    if (res.error) return [T.error(res.error)];
    return [T.text(res.output.join("   "))];
  }

  if (cmd === "cat") {
    const res = fsCat(cwd, args, isSudo);
    if (res.error) return [T.error(res.error)];
    return [T.text(res.output)];
  }

  if (cmd === "cd") {
    const res = fsCd(cwd, args);
    if (res.error) return [T.error(res.error)];
    return [T.cd(res.cwd)];
  }

  if (cmd === "tree") {
    const res = fsTree(cwd, args);
    if (res.error) return [T.error(res.error)];
    return [T.text(res.output)];
  }

  if (lower === "pwd") return [T.text(cwd)];

  // ── system commands ──────────────────────────────────────────────
  if (lower === "fastfetch" || lower === "neofetch") {
    const up = getUptime(sessionStart);
const lines = [
      `[ak@portfolio ~]$ fastfetch`,
      `                   '                       ak@portfolio`,
      `                  'o'                      -------------`,
      `                 'ooo'                     OS: Artix Linux x86_64`,
      `                'ooxoo'                    Host: Aspire E5-573 (V1.15)`,
      `               'ooxxxoo'                   Kernel: Linux 7.0.11-zen1-1-zen`,
      `              'oookkxxoo'                  Uptime: ${up}`,
      `             'oiioxkkxxoo'                 Packages: 759 (pacman)`,
      `            ':;:iiiioxxxoo'                Shell: bash 5.3.9`,
      `               \`'.;::ioxxoo'               Display: 1366x768 (15")`,
      `          '-.      \`':;jiooo'              WM: uwm (Wayland)`,
      `         'oooio-..     \`'i:io'             Init System: runit`,
      `        'ooooxxxxoio:,.  \`'-;'             Terminal: foot`,
      `       'ooooxxxxxkkxoooIi:-.  \`'           CPU: Intel(R) Core(TM) i3-5005U (4)`,
      `      'ooooxxxxxkkkkxoiiiiiji'             GPU: Intel HD Graphics 5500`,
      `     'ooooxxxxxkxxoiiii:'\`     .i'         Memory: 250 MiB / 3.73 GiB`,
      `    'ooooxxxxxoi:::'\`       .;ioxo'        Swap: 255 MiB / 14.42 GiB`,
      `   'ooooxooi::'\`          .:iiixkxxo'      Disk (/): 51 GiB / 903.51 GiB`,
      `  'ooooi:'\`                \`'';ioxxo'      Battery: 100% [AC Connected]`,
      `'\`                                   \`'    Locale: en_US.UTF-8`,
      ``,
      `    ████  ████  ████  ████  ████  ████  ████  ████`,
      `[ak@portfolio ~]$ `,
    ];
    return [T.text(lines.join("\n"))];
  }

  if (lower === "uptime")  return [T.text(`up ${getUptime(sessionStart)}`)];
  if (lower === "whoami")  return [T.text(isSudo ? "root" : "ak")];
  if (lower === "date")    return [T.text(new Date().toString())];
  if (lower === "uname -a") return [T.text("Linux portfolio 7.0.11-zen1-1-zen #1 ZEN SMP PREEMPT_DYNAMIC Sat, 06 Jun 2026 20:27:28 +0000 x86_64 GNU/Linux")];

  // ── theme ────────────────────────────────────────────────────────
  if (cmd === "theme") {
    if (!args[0]) return [
      T.text("themes: " + Object.keys(themes).join("  ·  ")),
      T.dim("usage: theme <name>"),
    ];
    const t = args[0].toLowerCase();
    if (!themes[t]) return [T.error(`theme: '${t}': not found`), T.dim("themes: " + Object.keys(themes).join("  ·  "))];
    return [T.theme(t), T.ok(`theme → ${t}`)];
  }

  // ── fun ──────────────────────────────────────────────────────────
  if (lower === "photo") return [
    T.error("permission denied"),
    T.dim("try: sudo photo"),
  ];

  if (lower === "github") return [T.link("→ github.com/Abhishek-Krishna-A-M", "https://github.com/Abhishek-Krishna-A-M")];

  if (cmd === "echo")     return [T.text(args.join(" "))];
  if (lower === "man")    return [T.text("RTFM. Or just type 'help'.")];
  if (lower === "artix" || lower === "btw") return [T.ok("yes. artix. btw.")];

  if (cmd === "vim" || cmd === "nvim")
    return [T.text("this is a portfolio, not a VM.\nbut yes — nvim is the only editor.")];

  if (cmd === "emacs")
    return [T.error("emacs: command not found\nhint: this is a sane system.")];

  if (cmd === "sudo") {
    const sub = args.join(" ").toLowerCase().trim();
    return [T.sudo(sub)];
  }

  if (cmd === "pacman") return [T.dim("pacman: this is a browser, not pacman.\ntry: cat /var/log/pacman.log")];
  if (cmd === "git" && args[0] === "log") return [T.error("fatal: not a git repository\nsee: github.com/Abhishek-Krishna-A-M")];

  // ── not found — trigger glitch ────────────────────────────────────
  return [T.glitch(`${cmd}: command not found`)];
}

// ── sudo subcommand handler ───────────────────────────────────────────────────
export function handleSudo(subCmd) {
  const lower = (subCmd || "").toLowerCase().trim();
  const parts = lower.split(/\s+/);
  const cmd   = parts[0];
  const args  = parts.slice(1);

  if (cmd === "cat")   return handle(`cat ${args.join(" ")}`, { isSudo: true });
  if (lower === "photo") return [T.photo()];

if (lower === "ego") return [T.text(`
ROOT SHELL — EGO MODULE LOADED
────────────────────────────────────────────────────────────
  Hand-rolled an HTTP server in C. Raw POSIX sockets.
  Multi-threaded. Hot-reload. Zero dependencies.
  Because abstractions are just someone else's bugs.

  Built Rythva. Handled 70k requests in a single day
  without the database breaking a sweat. 

  My Android launcher runs at ~18MB RAM. 
  Your "minimal" web app uses more than my entire OS.

  Daily driving Artix + runit. No Systemd bloat here.
  My Neovim startup time is 45ms and I'm still trying
  to shave off another 5ms.

  Currently: Shipping Questlytics. Predicting exams 
  while the rest of the class is still highlighting PDFs.

────────────────────────────────────────────────────────────
  Artix. Art-of-Linux. CLI-first. btw.`)];

  if (cmd === "message") {
    const msg = args.join(" ").replace(/^["']|["']$/g, "") || "Hey AK! I saw your portfolio. Its dope";
    const url = `https://wa.me/918075656775?text=${encodeURIComponent(msg)}`;
    return [
      T.ok("opening WhatsApp..."),
      T.link(`→ wa.me/918075656775  "${msg}"`, url),
    ];
  }

  if (lower === "email")  return [T.link("→ abhishekkrishna2k6@gmail.com", "mailto:abhishekkrishna2k6@gmail.com")];
  if (lower === "github") return [T.link("→ github.com/Abhishek-Krishna-A-M", "https://github.com/Abhishek-Krishna-A-M")];
  if (lower === "whoami") return [T.text("root")];

  return [
    T.error(`sudo: ${subCmd}: command not found`),
    T.dim("sudo commands: cat · photo · ego · message · email · github"),
  ];
}

function getUptime(start) {
  if (!start) return "0s";
  const s = Math.floor((Date.now() - start) / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h}h ${m % 60}m`;
  if (m > 0) return `${m}m ${s % 60}s`;
  return `${s}s`;
}
