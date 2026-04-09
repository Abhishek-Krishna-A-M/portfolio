#!/bin/bash

# ─────────────────────────────────────────────────────────────
#  ak's portfolio shell — connection script
#  github.com/Abhishek-Krishna-A-M
# ─────────────────────────────────────────────────────────────

RESET='\033[0m'
BOLD='\033[1m'
DIM='\033[2m'
WHITE='\033[0;97m'
MUTED='\033[0;90m'
ACCENT='\033[0;37m'    # near-white, void theme
GREEN='\033[0;32m'
RED='\033[0;31m'
CYAN='\033[0;36m'

ok()    { echo -e "  ${ACCENT}[ ok ]${RESET}  ${DIM}$1${RESET}"; }
fail() { echo -e "  ${RED}[fail]${RESET}  $1"; }
dim()  { echo -e "${MUTED}$1${RESET}"; }
sep()  { echo -e "${MUTED}──────────────────────────────────────────────────────${RESET}"; }

typeout() {
    local text="$1"
    local delay="${2:-0.03}"
    for ((i=0; i<${#text}; i++)); do
        printf "%s" "${text:$i:1}"
        sleep "$delay"
    done
    echo
}

clear

# ── BIOS line ────────────────────────────────────────────────
echo ""
dim "  BIOS v2.0  —  AK Systems  —  Laptop"
# Updated RAM display to reflect actual capacity
dim "  CPU: Intel Core i3  |  RAM: 4.0 GiB  |  ARTIX(S6): x86_64"
echo ""

sleep 0.2

# ── Boot sequence ────────────────────────────────────────────
ok "loading kernel"
sleep 0.18
ok "mounting filesystem (ext4)"
sleep 0.15
ok "starting bspwm"
sleep 0.12
ok "starting sxhkd"
sleep 0.12
ok "loading st"
sleep 0.15
ok "syncing remote session: abhishekkrishna.vercel.app"
sleep 0.20
ok "importing projects.db"
sleep 0.15
ok "indexing skills manifest"
sleep 0.18
ok "spawning portfolio shell v2.0"
sleep 0.25

echo ""
dim "  Linux artixlinux 6.19.9-zen1-1-zen (tty1)"
sleep 0.3
dim "  archbox login: ak"
sleep 0.4
dim "  Last login: $(date)"
sleep 0.3

echo ""

# ── Banner ───────────────────────────────────────────────────
echo -e "${ACCENT}"
cat << 'EOF'
    ▄▀▄ █▄▀   ▄▀▀ █▄█ ██▀ █   █
    █▀█ █ █   ▄██ █ █ █▄▄ █▄▄ █▄▄
EOF
echo -e "${RESET}"

sleep 0.2

# ── Identity card ────────────────────────────────────────────
sep
echo -e "  ${BOLD}${WHITE}ABHISHEK KRISHNA A.M${RESET}"
echo -e "  ${MUTED}Backend & Systems Engineer${RESET}"
sep

echo ""
echo -e "  ${ACCENT}os${RESET}        Artix Linux(s6) (btw)"
echo -e "  ${ACCENT}wm${RESET}        bspwm"
echo -e "  ${ACCENT}shell${RESET}     bash"
echo -e "  ${ACCENT}editor${RESET}    Neovim"
echo -e "  ${ACCENT}lang${RESET}      C  C++  Go  Python  JS  Bash  Lua"
# Added the corrected memory line here for visual flair
echo -e "  ${ACCENT}memory${RESET}    250.60 MiB / 3.73 GiB (6.56%)"
echo -e "  ${ACCENT}url${RESET}       https://abhishekkrishna.vercel.app"
echo ""

sep

# ── Featured projects ────────────────────────────────────────
echo ""
echo -e "  ${MUTED}[ featured projects ]${RESET}"
echo ""
echo -e "  ${ACCENT}⚙${RESET}  http-server        multi-threaded HTTP/1.1 server — C"
echo -e "  ${ACCENT}▓${RESET}  sysdash            TUI system monitor — C++"
echo -e "  ${ACCENT}›${RESET}  gpad               git-powered notes manager — Go"
echo -e "  ${ACCENT}□${RESET}  minimal-launcher   terminal-style Android launcher — Kotlin"
echo ""

sep

# ── Links ────────────────────────────────────────────────────
echo ""
echo -e "  ${MUTED}github${RESET}     github.com/Abhishek-Krishna-A-M"
echo -e "  ${MUTED}linkedin${RESET}   linkedin.com/in/abhishek-krishna-a-m-137895328"
echo -e "  ${MUTED}email${RESET}      abhishekkrishna2k6@gmail.com"
echo ""

sep

echo ""

# ── Closing line ─────────────────────────────────────────────
typeout "  visit the portfolio shell → abhishekkrishna.vercel.app" 0.025
echo ""
dim "  type 'help' once inside. try 'panic' if you're feeling adventurous."
echo ""
dim "  [ session ready ]"
echo ""
