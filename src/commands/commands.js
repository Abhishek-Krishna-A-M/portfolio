export const projectsData = {
  httpserver: {
    title: "HTTP Server in C",
    icon: "⚙",
    short: "multi-threaded HTTP/1.1 server — C",
    featured: true,
    details: [
      "Custom multi-threaded HTTP/1.1 server from scratch in C",
      "Static file serving, SPA fallback, basic API endpoints",
      "Hot reload, structured logging, concurrent client handling",
      "Raw sockets, pthreads, HTTP parsing — no libraries",
    ],
    links: { github: "https://github.com/Abhishek-Krishna-A-M/HTTP_Server" },
  },
  sysdash: {
    title: "SysDash",
    icon: "▓",
    short: "TUI system monitor — C++",
    featured: true,
    details: [
      "Neovim-style TUI system monitor in C++",
      "CPU, RAM, Swap, Disk, Network, running processes",
      "Kill processes directly from the interface",
      "Lightweight — htop philosophy, neofetch aesthetics",
    ],
    links: { github: "https://github.com/Abhishek-Krishna-A-M/sysdash" },
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
  minimallauncher: {
    title: "Minimal Launcher",
    icon: "□",
    short: "terminal-style Android launcher — Kotlin/Compose",
    featured: false,
    details: [
      "Terminal-style Android launcher (Kotlin + Jetpack Compose)",
      "~15–20 MB RAM — less than most web pages",
      "Keyboard-first CLI with custom fuzzy search engine",
      "No background services. No analytics. No bloat.",
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
      "Built for real workflow, not for screenshots",
    ],
    links: { github: "https://github.com/Abhishek-Krishna-A-M/U_Vim" },
  },
  staffo: {
    title: "Staffo",
    icon: "◉",
    short: "campus staff locator — React + Supabase",
    featured: false,
    details: [
      "Staff locating system for campus (React + Supabase)",
      "Find faculty locations, availability, schedules",
      "Supabase Edge Functions, real-time updates",
      "Role-based admin interface",
    ],
    links: {
      live: "https://staffoapp.vercel.app/",
      github: "https://github.com/Abhishek-Krishna-A-M/Staffo",
    },
  },
  securefilelocker: {
    title: "SecureFileLocker",
    icon: "■",
    short: "AES encrypted file vault — Flask",
    featured: false,
    details: [
      "AES-encrypted file & text protection (Flask)",
      "Upload, encrypt, decrypt with password",
      "Dark mode UI, clipboard helpers",
    ],
    links: {
      live: "https://securefilelocker.onrender.com",
      github: "https://github.com/eagle4b1/SecureFileLocker",
    },
  },
  artsapp: {
    title: "Arts App 2025",
    icon: "▲",
    short: "arts fest management — React + Supabase",
    featured: false,
    details: [
      "College arts fest system (React + Supabase)",
      "Registration, auth, event info, results",
      "Role-based access for admin operations",
    ],
    links: { live: "https://arts-app-25.vercel.app/" },
  },
  btechified: {
    title: "Btechified",
    icon: "◈",
    short: "educational platform — React + Supabase",
    featured: false,
    details: [
      "Educational platform (React + Supabase)",
      "Auth flows, DB schema, role checks",
      "Supabase Auth with secure session handling",
    ],
    links: {},
  },
  sjcet: {
    title: "SJCET Dashboard",
    icon: "◇",
    short: "event management — Node.js/Supabase/Vue (internship)",
    featured: false,
    details: [
      "Internal event management system (backend intern)",
      "Node.js · Supabase · Vue · Vite",
      "Backend logic, DB flows, admin dashboard",
    ],
    links: {},
  },
  brightsmile: {
    title: "BrightSmile Dental",
    icon: "○",
    short: "hospital website — HTML/CSS/Bootstrap",
    featured: false,
    details: [
      "Responsive dental hospital website",
      "Appointment forms, profiles, reviews, gallery",
      "Deployed on Netlify",
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

neofetch       system info
uptime         session time
history        command history
clear          clear terminal
theme <n>      switch theme
panic          ...try it

sudo <cmd>     root access
  sudo cat secret.txt
  sudo message "text"   → WhatsApp
  sudo ego
  sudo photo
─────────────────────────────────────
themes: void · gruvbox · nord · hacker
tab → autocomplete   ↑↓ → history`;

export const ABOUT_TEXT = `NAME    : Abhishek Krishna A.M
ROLE    : Backend & Systems Engineer
OS      : Arch Linux
WM      : bspwm
EDITOR  : Neovim
─────────────────────────────────────
I build systems, not templates.

Work close to the metal.
Believe real performance comes from
understanding what's underneath.

  → Linux · C · C++ · Go
  → Backend at scale
  → Tools that do one thing well

─────────────────────────────────────
cat ~/.config/bspwm/bspwmrc  ← real config
cat /proc/version              ← real kernel`;

export const SKILLS_TEXT = `[ Languages ]
  C  C++  Go  Python  Java
  JavaScript  TypeScript  Bash  Lua  Kotlin

[ Backend ]
  Node.js · Express · Flask · Django
  PostgreSQL · MongoDB · Supabase · Firebase

[ Frontend ]
  React · Next.js · Vite · TailwindCSS
  Jetpack Compose

[ Systems & Tools ]
  Linux · bspwm · Neovim · Git
  GDB · Valgrind · strace
  Docker · Vercel · Netlify · Render

[ Focus ]
  Backend Architecture
  Systems Programming (C/C++/Go)
  Android Development
  Cybersecurity fundamentals`;

export const CONTACT_TEXT = `─────────────────────────────────────
  email     abhishekkrishna2k6@gmail.com
  github    github.com/Abhishek-Krishna-A-M
  linkedin  linkedin.com/in/abhishek-krishna-a-m-137895328
  wa        +918075656775
─────────────────────────────────────
  sudo message "hey" → opens WhatsApp`;
