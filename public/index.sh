#!/bin/bash

G='\033[0;32m' # Green
C='\033[0;36m' # Cyan
Y='\033[1;33m' # Yellow
B='\033[0;34m' # Blue
NC='\033[0m'    # No Color

step() {
    echo -ne "${C}[ WAIT ]${NC} $1..."
    sleep 0.4
    echo -e "\r${G}[  OK  ]${NC} $1   "
}

clear
echo -e "${Y}Initializing remote session: abhishekkrishna.vercel.app${NC}"
echo -e "${B}------------------------------------------------------${NC}"

step "Handshaking with server"
step "Loading kernel modules"
step "Syncing AI/Cyber/System datasets"
step "Finalizing profile injection"

echo -e "\n${G}Success: Terminal session established.${NC}\n"
sleep 0.3

echo -e "${G}"
cat << "EOF"
                     █████╗ ██╗  ██╗
                    ██╔══██╗██║ ██╔╝
                    ███████║█████╔╝ 
                    ██╔══██║██╔═██╗ 
                    ██║  ██║██║  ██╗
                    ╚═╝  ╚═╝╚═╝  ╚═╝
           >> ABHISHEK KRISHNA | DEV & SEC <<
EOF
echo -e "${NC}"

echo -e "${B}┌─────────────────────────────────────────────────────────┐${NC}"
echo -e "${B}│${NC}  ${Y}IDENT:${NC}  AK-CORE-v2.0X                                 ${B}│${NC}"
echo -e "${B}├─────────────────────────────────────────────────────────┤${NC}"
echo -e "${B}│${NC}  ${C}Role:${NC}   Backend-focused Full-Stack Developer        ${B}│${NC}"
echo -e "${B}│${NC}  ${C}Tech:${NC}   Systems, AI, Cybersecurity                  ${B}│${NC}"
echo -e "${B}│${NC}  ${C}OS:${NC}     Linux                                       ${B}│${NC}"
echo -e "${B}│${NC}  ${C}Editor:${NC} Neovim (v0.10+)                             ${B}│${NC}"
echo -e "${B}│${NC}  ${C}URL:${NC}    https://abhishekkrishna.vercel.app          ${B}│${NC}"
echo -e "${B}└─────────────────────────────────────────────────────────┘${NC}"

echo -e "\n${Y}Tip: Visit the site to explore my projects & experiments.${NC}"
echo -e "${G}Session terminated.${NC}\n"
