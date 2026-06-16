export const projectsData = {
  rythva: {
    title: "Rythva",
    icon: "🎭",
    short: "high-traffic arts fest platform — React + Supabase",
    featured: true,
    details: [
      "Real-time event management serving 70,000+ requests",
      "Handled peak traffic of 46k during live college fest",
      "Live status tracking (Upcoming → Live → Completed) via Supabase Realtime",
      "Role-based access for students, coordinators, and admins",
    ],
    links: { live: "https://arts-app-25.vercel.app/" },
  },
  questlytics: {
    title: "Questlytics",
    icon: "🔍",
    short: "AI exam pattern analyzer — React + Gemini",
    featured: true,
    details: [
      "AI-driven platform for analyzing previous year question papers",
      "Topic-wise breakdown and frequency analysis using Gemini API",
      "Predictive modeling for important topics based on syllabus alignment",
      "Secure academic data storage and auth via Supabase",
    ],
    links: { github: "https://github.com/Abhishek-Krishna-A-M/Questlytics" },
  },
  httpserver: {
    title: "HTTP Server in C",
    icon: "⚙",
    short: "multi-threaded HTTP/1.1 server — C",
    featured: false,
    details: [
      "Custom multi-threaded HTTP/1.1 server from scratch in C",
      "Static file serving, SPA fallback, basic API endpoints",
      "Hot reload, structured logging, concurrent client handling",
      "Raw sockets, pthreads, HTTP parsing — no libraries",
    ],
    links: { github: "https://github.com/Abhishek-Krishna-A-M/HTTP_Server" },
  },
  yukthi: {
    title: "Yukthi 2026",
    icon: "🏆",
    short: "project expo judging system — React + Postgres",
    featured: true,
    details: [
      "Two-stage evaluation system for large-scale project expos",
      "Ranking logic computed via PostgreSQL Views for database-level consistency",
      "Role-aware access using Supabase RPC (login_judge)",
      "Real-time leaderboards and score distribution with Recharts",
    ],
    links: { github: "https://github.com/Abhishek-Krishna-A-M/Yukthi-2026" },
  },
  staffo: {
    title: "Staffo",
    icon: "◉",
    short: "automated staff intelligence — React + Supabase",
    featured: true,
    details: [
      "Campus-scale availability system deployed for College Council",
      "Deterministic 4-level status hierarchy logic (Super Status to Timetable)",
      "Automated timetable-driven availability inference",
      "Group-wise analysis for optimized meeting scheduling",
    ],
    links: {
      live: "https://staffoapp.vercel.app/",
      github: "https://github.com/Abhishek-Krishna-A-M/Staffo",
    },
  },
  gpad: {
    title: "gpad",
    icon: "›",
    short: "git-powered CLI notes manager — Go",
    featured: true,
    details: [
      "Cross-platform CLI notes manager in Go",
      "Markdown notes, nested folders, tree listing",
      "Terminal Markdown renderer — headings, code, quotes",
      "GitHub sync: auto commit → pull → push (SSH/HTTPS)",
      "Single static binary. Zero dependencies. Offline-first.",
    ],
    links: { github: "https://github.com/Abhishek-Krishna-A-M/gpad" },
  },
  apiheist: {
    title: "API Heist",
    icon: "🔓",
    short: "interactive API challenge — React + Supabase",
    featured: false,
    details: [
      "Level-based competitive event focusing on system communication",
      "Progressive difficulty scaling through header and response analysis",
      "Built for Tharang 2026 tech fest at Jyothi Engineering College",
      "Real-time leaderboard and tie-breaking logic based on solve speed",
    ],
    links: { github: "https://github.com/Abhishek-Krishna-A-M/API-Heist" },
  },
  sysdash: {
    title: "SysDash",
    icon: "▓",
    short: "TUI system monitor — C++",
    featured: false,
    details: [
      "Neovim-style TUI system monitor in C++",
      "CPU, RAM, Swap, Disk, Network, running processes",
      "Kill processes directly from the interface",
      "Lightweight — htop philosophy, fastfetch aesthetics",
    ],
    links: { github: "https://github.com/Abhishek-Krishna-A-M/sysdash" },
  },
  sjcet: {
    title: "SJCET Dashboard",
    icon: "◇",
    short: "event management — Node.js/Supabase/Vue (internship)",
    featured: false,
    details: [
      "Internal event management system built during backend internship",
      "Node.js · Supabase · Vue · Vite",
      "Engineered backend logic, DB flows, and admin dashboard",
    ],
    links: {},
  },
  minimallauncher: {
    title: "Minimal Launcher",
    icon: "□",
    short: "terminal-style Android launcher — Kotlin/Compose",
    featured: true,
    details: [
      "Terminal-style Android launcher (Kotlin + Jetpack Compose)",
      "~15–20 MB RAM usage — optimized for systems-level efficiency",
      "Keyboard-first UI with custom FZF-style fuzzy search",
      "Event-driven architecture with zero background polling",
    ],
    links: { github: "https://github.com/Abhishek-Krishna-A-M/minimal-launcher" },
  },
  uvim: {
    title: "U Vim",
    icon: "◆",
    short: "custom Neovim config — Lua",
    featured: false,
    details: [
      "Neovim IDE config in Lua (U Vim)",
      "LSP, autocompletion, Treesitter, Telescope, diagnostics",
      "lazy.nvim — optimized loading, ~45ms startup",
      "Built for real workflow efficiency, not aesthetics alone",
    ],
    links: { github: "https://github.com/Abhishek-Krishna-A-M/U_Vim" },
  },
  securefilelocker: {
    title: "SecureFileLocker",
    icon: "■",
    short: "AES encrypted file vault — Flask",
    featured: false,
    details: [
      "AES-encrypted file & text protection (Flask)",
      "Full-stack deployment managed via Termux + Ubuntu on Android",
      "Secure client-side interactions with dark mode UI",
    ],
    links: {
      live: "https://securefilelocker.onrender.com",
      github: "https://github.com/eagle4b1/SecureFileLocker",
    },
  },
  btechified: {
    title: "Btechified",
    icon: "◈",
    short: "educational platform — React + Supabase",
    featured: true,
    details: [
      "Contributed to backend optimization and Google OAuth integration",
      "Designed secure DB schema with strict Row-Level Security (RLS)",
      "Delivered scalable features for improved system reliability",
    ],
    links: {},
  },
  brightsmile: {
    title: "BrightSmile Dental",
    icon: "○",
    short: "hospital website — HTML/CSS/Bootstrap",
    featured: false,
    details: [
      "Fully responsive dental hospital site built with zero JavaScript",
      "Focus on frontend fundamentals and custom CSS styling",
      "Hand-rolled sections: Services, Doctors, FAQs, and Gallery",
    ],
    links: {
      live: "https://brightsmile-dental-hospital.netlify.app",
      github: "https://github.com/Abhishek-Krishna-A-M/DentalHospitalSite",
    },
  },
};

export const HELP_TEXT = `COMMANDS
─────────────────────────────────────
about          who I am
skills         tools & stack
projects       list all projects
project <n>    full project details
contact        reach me

ls [path]      list directory
cat <file>     read file
cd <path>      change directory
tree [path]    directory tree
pwd            working directory

fastfetch/neofetch  system info
uptime         session time
history        command history
clear          clear terminal
theme <n>      switch theme
panic          ...try it

sudo <cmd>     root access |passwd == akiscool|
  sudo cat secret.txt
  sudo message "text"   → WhatsApp
  sudo ego
  sudo photo
─────────────────────────────────────
themes: void · gruvbox · nord · hacker
tab → autocomplete   ↑↓ → history`;

export const ABOUT_TEXT = `NAME    : Abhishek Krishna
ROLE    : Systems & Backend Engineer
OS      : Artix Linux (runit)
WM      : sway + foot
SHELL   : bash / Go / C
EDITOR  : Neovim (Custom Lua)
MACHINE : Acer Aspire | 4GB RAM | Optimization-first
────────────────────────────────────────────────────────────
I build systems that don't waste resources.

EXPERTISE:
  → High-Concurrency Backends (Go, Node.js, Supabase)
  → Systems Programming (C, POSIX Sockets, Multi-threading)
  → Linux Internals (Init systems, TUI design, Kernel tuning)
  → Database Architecture (PostgreSQL, Logic-heavy Views, RLS)

TRACK RECORD:
  → Scaled "Rythva" to 70,000+ requests under live load.
  → Engineered "Staffo," now used by college administration.
  → Stripped Systemd for runit to achieve a <250MB idle footprint.

Offline: Ricing TUIs · Bodyweight training · Exploring deterministic systems
────────────────────────────────────────────────────────────
cat ~/.config/sway/config     ← real config
cat /proc/version              ← real kernel`;

export const SKILLS_TEXT = `[ Systems & Core ]
  C · Go · C++ · Kotlin · Bash · Lua
  Linux (Artix/runit)

[ Backend & Infrastructure ]
  Node.js · Go (Standard Lib) · Flask · Python
  PostgreSQL (Views, Triggers, RPC) · Supabase
  REST · WebSockets · Realtime Engines
  Git · Docker · Linux Server Admin

[ Mobile & Frontend ]
  Android (Kotlin + Jetpack Compose)
  React · Next.js · TailwindCSS · Vite
  Responsive Design (Zero-JS logic)

[ Development Workflow ]
  Neovim (Custom Lua IDE) · sway · foot
  Aggressive RAM Optimization · TUI Design
  CI/CD (GitHub Actions) · Vercel · Render

[ Areas of Interest ]
  High-Concurrency Systems
  Deterministic Systems Design
  Linux Kernel Internals
  Systems Performance Tuning`;

export const CONTACT_TEXT = `─────────────────────────────────────
  email     abhishekkrishna2k6@gmail.com
  github    github.com/Abhishek-Krishna-A-M
  linkedin  linkedin.com/in/abhishek-krishna-a-m-137895328
  whatsapp  +918075656775
─────────────────────────────────────
  sudo message "hi" → opens WhatsApp`;
