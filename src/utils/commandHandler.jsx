import { projectsData, HELP_TEXT, ABOUT_TEXT, SKILLS_TEXT, CONTACT_TEXT } from "../commands/commands";
import { fsLs, fsCat, fsCd, fsTree, HOME } from "../filesystem/fsCommands";
import { themes } from "../themes/themes";

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
  if (lower === "neofetch") {
    const up = getUptime(sessionStart);
    const lines = [
      `         /\\          ak@portfolio`,
      `        /  \\         ──────────────────────────`,
      `       /\\   \\        OS:      Arch Linux x86_64`,
      `      /  __  \\       Kernel:  6.14.0-arch1-1`,
      `     /  (  )  \\      WM:      bspwm`,
      `    / __|  |__\\\\     Shell:   bash`,
      `   /.\'        \`.\\    Terminal: alacritty`,
      `                     Theme:   void (IBM Plex Mono)`,
      `                     CPU:     Intel Core i5 (laptop)`,
      `                     Memory:  ~5GB / 8GB`,
      `                     Uptime:  ${up}`,
      "",
      "   ████  ████  ████  ████  ████  ████  ████  ████",
    ];
    return [T.text(lines.join("\n"))];
  }

  if (lower === "uptime")  return [T.text(`up ${getUptime(sessionStart)}`)];
  if (lower === "whoami")  return [T.text(isSudo ? "root" : "ak")];
  if (lower === "date")    return [T.text(new Date().toString())];
  if (lower === "uname -a") return [T.text("Linux archbox 6.14.0-arch1-1 #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux")];

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
  if (lower === "arch" || lower === "btw") return [T.ok("yes. arch. btw.")];

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
─────────────────────────────────────
  Wrote an HTTP server in C. Raw sockets.
  No libevent. No libuv. Just read().

  Built an Android launcher that uses
  less RAM than this browser tab.

  My bspwm config has no gaps set to 8px
  and I think about it more than I should.

  Riced Arch at 2am while recovering
  from a broken grub. Still shipped.

  Currently: building something in Go
  that I'll push when it doesn't embarrass me.

─────────────────────────────────────
  Arch. bspwm. Neovim. btw.`)];

  if (cmd === "message") {
    const msg = args.join(" ").replace(/^["']|["']$/g, "") || "Hey AK! I saw your portfolio.";
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
