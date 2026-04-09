export const filesystem = {
  "/": { type: "dir", children: ["home", "etc", "proc", "usr", "var"] },

  "/home": { type: "dir", children: ["ak"] },
  "/home/ak": {
    type: "dir",
    children: ["about.txt", "skills.txt", "contact.txt", "secret.txt", ".config", ".bashrc", "projects", "README.md"],
  },

"/home/ak/about.txt": {
    type: "file",
    content: `NAME    : Abhishek Krishna A.M
ROLE    : Systems & Backend Engineer
OS      : Artix Linux (s6 init)
WM      : bspwm + suckless tools
SHELL   : bash / Go / C
EDITOR  : Neovim (Custom Lua)
MACHINE : Acer Aspire | 4GB RAM | Optimization-first
────────────────────────────────────────────────────────────
I build systems, not just applications.

My engineering philosophy is rooted in resource efficiency. 
I believe that software should be fast by default, not by 
throwing more hardware at the problem.

EXPERTISE:
  → High-Concurrency Backends (Go, Node.js, Supabase)
  → Systems Programming (C, POSIX Sockets, Multi-threading)
  → Linux Internalization (Init systems, TUI design, Kernel tuning)
  → Database Architecture (PostgreSQL, Logic-heavy Views, RLS)

TRACK RECORD:
  → Scaled "Rythva" to 70,000+ requests under live load.
  → Engineered "Staffo," now used by college administration.
  → Stripped Systemd for s6 to achieve a <250MB idle footprint.

Offline:
  → Bodyweight training (50+ pushups/set)
  → Ricing minimalist TUI environments
  → Exploring deterministic systems design
────────────────────────────────────────────────────────────
$ skills    $ projects    $ contact`,
  },

"/home/ak/skills.txt": {
    type: "file",
    content: `[ Systems & Core ]
  C · Go · C++ · Kotlin · Bash · Lua
  Linux (Artix/s6)

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
  Neovim (Custom Lua IDE) · bspwm · st
  Aggressive RAM Optimization · TUI Design
  CI/CD (GitHub Actions) · Vercel · Render

[ Areas of Interest ]
  High-Concurrency Systems
  Deterministic Systems Design
  Linux Kernel Internals
  Systems Performance Tuning`,
  },

  "/home/ak/contact.txt": {
    type: "file",
    content: `──────────────────────────────────────
  email     abhishekkrishna2k6@gmail.com
  github    github.com/Abhishek-Krishna-A-M
  linkedin  linkedin.com/in/abhishek-krishna-a-m-137895328
  whatsapp  +918075656775
──────────────────────────────────────
  sudo message "hi" → opens WhatsApp directly`,
  },

  "/home/ak/README.md": {
    type: "file",
    content: `# ak's portfolio shell v2

  A terminal portfolio because I live in one.

  Type 'help' to see what's available.
  Type 'panic' if you're feeling adventurous.

  Source: github.com/Abhishek-Krishna-A-M/portfolio`,
  },

  "/home/ak/.bashrc": {
    type: "file",
    content: `# ~/.bashrc — ak's actual config (mostly)
export EDITOR=nvim
export VISUAL=nvim
export TERMINAL=alacritty
export PATH="$HOME/.local/bin:$PATH"

# aliases
alias ll='ls -la --color=auto'
alias gs='git status'
alias gc='git commit'
alias vim='nvim'
alias please='sudo'
alias ports='ss -tulpn'
alias mem='free -h'
alias cpu='cat /proc/cpuinfo | grep "model name" | head -1'

# bspwm helpers
alias bsp='bspc'
alias reload='bspc wm -r'

# prompt
PS1='\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ '

# start bspwm if on tty1
[[ $(tty) = /dev/tty1 ]] && exec startx`,
  },

  "/home/ak/.config": {
    type: "dir",
    children: ["bspwm", "sxhkd", "nvim", "alacritty"],
  },
  "/home/ak/.config/bspwm": { type: "dir", children: ["bspwmrc"] },
  "/home/ak/.config/bspwm/bspwmrc": {
    type: "file",
    content: `#!/bin/sh
# bspwmrc — ak's config

bspc monitor -d I II III IV V VI VII VIII IX X

bspc config border_width         2
bspc config window_gap           8
bspc config split_ratio          0.52
bspc config borderless_monocle   true
bspc config gapless_monocle      true

# colors
bspc config normal_border_color  "#1a1a1a"
bspc config active_border_color  "#e2e8f0"
bspc config focused_border_color "#e2e8f0"

sxhkd &`,
  },
  "/home/ak/.config/sxhkd": { type: "dir", children: ["sxhkdrc"] },
  "/home/ak/.config/sxhkd/sxhkdrc": {
    type: "file",
    content: `# sxhkdrc — keybindings

# terminal
super + Return
  alacritty

# launcher
super + d
  dmenu_run

# close window
super + shift + q
  bspc node -c

# focus direction
super + {h,j,k,l}
  bspc node -f {west,south,north,east}

# move window
super + shift + {h,j,k,l}
  bspc node -s {west,south,north,east}`,
  },
  "/home/ak/.config/nvim": { type: "dir", children: ["init.lua"] },
  "/home/ak/.config/nvim/init.lua": {
    type: "file",
    content: `-- init.lua — U Vim config
-- github.com/Abhishek-Krishna-A-M/U_Vim

require("core.options")
require("core.keymaps")
require("core.lazy")   -- lazy.nvim plugin manager

-- LSP, treesitter, telescope all loaded via lazy
-- startup time: ~45ms`,
  },
  "/home/ak/.config/alacritty": { type: "dir", children: ["alacritty.toml"] },
  "/home/ak/.config/alacritty/alacritty.toml": {
    type: "file",
    content: `[window]
padding = { x = 12, y = 10 }
opacity = 0.95
decorations = "None"

[font]
normal = { family = "IBM Plex Mono", style = "Regular" }
size = 12.0

[colors.primary]
background = "#000000"
foreground = "#e2e8f0"

[colors.cursor]
cursor = "#e2e8f0"`,
  },

"/home/ak/projects": {
    type: "dir",
    children: ["rythva/", "questlytics/", "http-server/", "yukthi/", "staffo/", "gpad/", "sysdash/", "minimal-launcher/", "others/"],
  },
  "/home/ak/projects/rythva/": { type: "dir", children: ["README.md"] },
  "/home/ak/projects/rythva/README.md": {
    type: "file",
    content: "High-traffic arts fest management platform (70k+ requests). See: project rythva",
  },
  "/home/ak/projects/questlytics/": { type: "dir", children: ["README.md"] },
  "/home/ak/projects/questlytics/README.md": {
    type: "file",
    content: "AI-powered exam pattern analyzer using Gemini API. See: project questlytics",
  },
  "/home/ak/projects/http-server/": { type: "dir", children: ["README.md"] },
  "/home/ak/projects/http-server/README.md": {
    type: "file",
    content: "Multi-threaded HTTP/1.1 server in C from scratch. See: project httpserver",
  },
  "/home/ak/projects/yukthi/": { type: "dir", children: ["README.md"] },
  "/home/ak/projects/yukthi/README.md": {
    type: "file",
    content: "Project expo judging system with DB-level ranking logic. See: project yukthi",
  },
  "/home/ak/projects/staffo/": { type: "dir", children: ["README.md"] },
  "/home/ak/projects/staffo/README.md": {
    type: "file",
    content: "Campus-scale staff availability intelligence system. See: project staffo",
  },
  "/home/ak/projects/gpad/": { type: "dir", children: ["README.md"] },
  "/home/ak/projects/gpad/README.md": {
    type: "file",
    content: "Git-powered CLI notes manager written in Go. See: project gpad",
  },
  "/home/ak/projects/sysdash/": { type: "dir", children: ["README.md"] },
  "/home/ak/projects/sysdash/README.md": {
    type: "file",
    content: "TUI system monitor in C++. See: project sysdash",
  },
  "/home/ak/projects/minimal-launcher/": { type: "dir", children: ["README.md"] },
  "/home/ak/projects/minimal-launcher/README.md": {
    type: "file",
    content: "FZF-style terminal launcher for Android. See: project minimallauncher",
  },
  "/home/ak/projects/others/": { type: "dir", children: ["list.txt"] },
  "/home/ak/projects/others/list.txt": {
    type: "file",
    content: "apiheist · securefilelocker · sjcet · btechified · brightsmile\nType 'projects' for full list.",
  },

"/home/ak/secret.txt": {
    type: "file",
    secret: true,
    content: `CLASSIFIED — root access required

[ DECRYPTED ]
────────────────────────────────────────────────────────────
  I don't believe in "magic" software. 
  If I can't trace the syscall, I don't trust the stack.

  While most are content with abstractions, I spent my 
  time in the trenches of POSIX sockets and pthreads, 
  learning exactly how the metal screams under load.

  Current System State:
  → RYTHVA: Scaled to 70k+ requests. Production tested. 
  → ARTIX: Stripped the Systemd bloat. Running s6 init.
  → KERNEL: Zen-tuned for a 4GB RAM environment.
  → PHILOSOPHY: If it uses more than 50MB idle, it's broken.

  Most developers build for 32GB MacBooks. 
  I build for the real world—where resources are finite 
  and efficiency is the difference between a tool and a toy.

  I don't just write code. I engineer environments.

  Hire me before someone else does.
────────────────────────────────────────────────────────────`,
  },

  "/etc": { type: "dir", children: ["hostname", "os-release", "pacman.conf"] },
  "/etc/hostname": { type: "file", content: "portfolio" },
  "/etc/os-release": {
    type: "file",
    content: `NAME="Artix Linux"
PRETTY_NAME="Artix Linux"
ID=artix
BUILD_ID=rolling
ANSI_COLOR="38;2;23;147;209"
HOME_URL="https://artixlinux.org/"
DOCUMENTATION_URL="https://wiki.artixlinux.org/"
SUPPORT_URL="https://forum.artixlinux.org/"
BUG_REPORT_URL="https://bugs.artixlinux.org/"
PRIVACY_POLICY_URL="https://terms.artixlinux.org/docs/privacy-policy/"
LOGO=artixlinux-logo`,
  },
  "/etc/pacman.conf": {
    type: "file",
    content: `# /etc/pacman.conf
[options]
HoldPkg     = pacman glibc
Architecture = auto
Color
ParallelDownloads = 5

[core]
Include = /etc/pacman.d/mirrorlist

[extra]
Include = /etc/pacman.d/mirrorlist

[multilib]
Include = /etc/pacman.d/mirrorlist`,
  },

"/proc": { type: "dir", children: ["cpuinfo", "meminfo", "version"] },
  "/proc/cpuinfo": {
    type: "file",
    content: `processor       : 0
vendor_id       : GenuineIntel
cpu family      : 6
model           : 61
model name      : Intel(R) Core(TM) i3-5005U CPU @ 2.00GHz
stepping        : 4
microcode       : 0x1f
cpu MHz         : 1258.221
cache size      : 3072 KB
physical id     : 0
siblings        : 4
core id         : 0
cpu cores       : 2
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf pni pclmulqdq dtes64 monitor ds_cpl vmx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb pti tpr_shadow flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap intel_pt xsaveopt dtherm arat pln pts vnmi
bugs            : cpu_meltdown spectre_v1 spectre_v2 spec_store_bypass l1tf mds swapgs itlb_multihit srbds spectre_v2_user old_microcode vmscape
address sizes   : 39 bits physical, 48 bits virtual

processor       : 1
... [logical processors 1-3 configured same as 0]`,
  },
"/proc/meminfo": {
    type: "file",
    content: `MemTotal:        3913476 kB
MemFree:          256000 kB
MemAvailable:    1284216 kB
Buffers:           24368 kB
Cached:          1321120 kB
SwapCached:         4088 kB
Active:          2149884 kB
Inactive:        1081888 kB
Active(anon):    1745108 kB
Inactive(anon):   246568 kB
Active(file):     404776 kB
Inactive(file):   835320 kB
SwapTotal:      15126520 kB
SwapFree:       14962440 kB
Zswap:             53276 kB
Zswapped:         154672 kB
Dirty:              1484 kB
Writeback:             0 kB
AnonPages:       1949628 kB
Mapped:           596568 kB
Shmem:            105588 kB
Slab:             135852 kB
KernelStack:       10768 kB
PageTables:        31772 kB
CommitLimit:    17083256 kB
Committed_AS:    4726132 kB
VmallocTotal:   34359738367 kB
VmallocUsed:       60784 kB
Hugepagesize:       2048 kB
DirectMap4k:      128828 kB
DirectMap2M:     2930688 kB`,
  },
  "/proc/version": {
    type: "file",
    content: "Linux version 6.19.9-zen1-1-zen (linux-zen@artixlinux) (gcc (GCC) 15.2.1 20260209, GNU ld (GNU Binutils) 2.46) #1 ZEN SMP PREEMPT_DYNAMIC Tue, 24 Mar 2026 03:51:09 +0000",
  },

  "/usr": { type: "dir", children: ["bin"] },
  "/usr/bin": { type: "dir", children: ["nvim", "git", "gcc", "go", "node", "python3", "bspwm", "pacman"] },
  "/usr/bin/nvim": { type: "file", content: "NVIM v0.11.0" },
  "/usr/bin/git": { type: "file", content: "git version 2.49.0" },
  "/usr/bin/gcc": { type: "file", content: "gcc (GCC) 14.2.1 20250207" },
  "/usr/bin/go": { type: "file", content: "go version go1.24.2 linux/amd64" },
  "/usr/bin/node": { type: "file", content: "v22.14.0" },
  "/usr/bin/python3": { type: "file", content: "Python 3.12.9" },
  "/usr/bin/bspwm": { type: "file", content: "bspwm version 0.9.10" },
  "/usr/bin/pacman": { type: "file", content: "Pacman v7.0.0 - libalpm v15.0.0" },

  "/var": { type: "dir", children: ["log"] },
  "/var/log": { type: "dir", children: ["pacman.log"] },
  "/var/log/pacman.log": {
    type: "file",
    content: `[2025-03-20] [PACMAN] starting full system upgrade
[2025-03-20] [ALPM] upgraded linux (6.13.0 -> 6.14.0)
[2025-03-20] [ALPM] upgraded neovim (0.10.4 -> 0.11.0)
[2025-03-20] [ALPM] upgraded go (1.24.1 -> 1.24.2)
[2025-03-20] [ALPM] upgraded git (2.48.1 -> 2.49.0)
[2025-03-21] [PACMAN] Running 'pacman -Syu'`,
  },
};

export default filesystem;
