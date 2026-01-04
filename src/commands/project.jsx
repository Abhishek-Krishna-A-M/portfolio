const projects = {
    sjcet: {
        title: "🧠 SJCET Event Dashboard (Internship)",
        details: [
            "Built an internal event management system for college as a backend intern.",
            "Stack: Node.js, Supabase, Vue, Vite.",
            "Handled backend logic, database flows, and admin dashboard functionality.",
            "No public repository available.",
        ],
    },

    brightsmile: {
        title: "💻 BrightSmile Dental Hospital Website",
        details: [
            "Responsive and professional website built using HTML, CSS, Bootstrap.",
            "Includes appointment forms, doctor profiles, reviews, FAQs, and gallery.",
            "Fully responsive and deployed via Netlify.",
            "🔗 Live: https://brightsmile-dental-hospital.netlify.app",
            "💻 GitHub: https://github.com/Abhishek-Krishna-A-M/DentalHospitalSite",
        ],
    },

    securefilelocker: {
        title: "🔐 SecureFileLocker",
        details: [
            "Full-stack Flask app for AES-encrypted file & text protection.",
            "Allows upload, encrypt, decrypt operations with password protection.",
            "Includes dark mode, mobile-friendly UI, and clipboard helpers.",
            "Hosted on Render.",
            "🔗 Live: https://securefilelocker.onrender.com",
            "💻 GitHub: https://github.com/eagle4b1/SecureFileLocker",
        ],
    },

    httpserver: {
        title: "⚙️ HTTP Server in C",
        details: [
            "Fully custom multi-threaded HTTP server written in C.",
            "Supports static sites, SPA fallback, and basic API endpoints.",
            "Features hot reload, structured logging, and concurrent client handling.",
            "Built for learning networking, sockets, threads, and HTTP internals.",
            "💻 GitHub: https://github.com/Abhishek-Krishna-A-M/HTTP_Server",
        ],
    },

    sysdash: {
        title: "📊 SysDash – Terminal System Dashboard",
        details: [
            "Neovim-style TUI system monitor written in C++.",
            "Shows CPU, RAM, Swap, Disk, Network stats and running processes.",
            "Supports killing processes directly from the TUI.",
            "Lightweight and minimal — inspired by htop + neofetch.",
            "💻 GitHub: https://github.com/Abhishek-Krishna-A-M/sysdash",
        ],
    },

    uvim: {
        title: "🧠 U Vim – Custom Neovim IDE Configuration",
        details: [
            "Custom lightweight IDE built on Neovim using Lua.",
            "Includes LSP, autocompletion, diagnostics, Treesitter, Telescope.",
            "Uses lazy.nvim for optimized plugin loading and fast startup.",
            "Designed for productivity, aesthetics, and workflow efficiency.",
            "💻 GitHub: https://github.com/Abhishek-Krishna-A-M/U_Vim",
        ],
    },

    gpad: {
        title: "⚡ gpad – Git-Powered Notes Manager (Go)",
        details: [
            "Cross-platform CLI notes manager written entirely in Go.",
            "Stores Markdown notes with nested folder support and tree listing.",
            "Clean terminal Markdown renderer (headings, lists, quotes, code blocks).",
            "GitHub sync mode with auto commit → pull → push (SSH/HTTPS).",
            "Offline mode supported; single static binary; zero dependencies.",
            "Commands: init, view, list, rm, sync, config, uninstall.",
            "Modular architecture: CLI, notes engine, git engine, viewer, config.",
            "💻 GitHub: https://github.com/Abhishek-Krishna-A-M/gpad",
        ],
    },

    btechified: {
        title: "📚 Btechified – Educational Platform",
        details: [
            "Educational platform built using React.js and Supabase.",
            "Handled backend logic, auth flows, table creation, and DB schema design.",
            "Implemented secure email/password login using Supabase Auth.",
            "Created reusable backend utilities, role checks, and helper functions.",
            "Built frontend UI components and integrated them with APIs.",
            "Repository private / internal.",
        ],
    },

    minimallauncher: {
        title: "📱 Minimal Launcher – Terminal-Style Android Launcher",
        details: [
            "Terminal-style Android launcher built with Kotlin and Jetpack Compose.",
            "Optimized for speed and minimal memory usage (~15–20 MB RAM).",
            "Keyboard-first CLI interface with custom lightweight fuzzy search engine.",
            "Supports app management, direct dialing, and system utility commands.",
            "Event-driven architecture with no background services or analytics.",
            "Uses global app cache and tiered contact loading for low latency.",
            "💻 GitHub: https://github.com/Abhishek-Krishna-A-M/minimal-launcher",
        ],
    },

    staffo: {
        title: "🧭 Staffo – Staff Locating System (JECC)",
        details: [
            "Web-based staff locating system built using React and Supabase.",
            "Helps users find faculty locations, availability, and schedules on campus.",
            "Backend logic implemented using Supabase Edge Functions.",
            "Designed database schema for staff profiles, rooms, schedules, availability.",
            "Search and filter staff by name, department, or subject.",
            "Admin interface for managing staff data with real-time updates.",
            "🔗 Live: https://staffoapp.vercel.app/",
            "💻 GitHub: https://github.com/Abhishek-Krishna-A-M/Staffo",
        ],
    },

    artsapp: {
        title: "🎭 Arts App 2025 – Arts Fest Management System (JECC)",
        details: [
            "Web application built using React and Supabase for college arts fest.",
            "Handles participant registration, authentication, and event information.",
            "Implemented Supabase authentication and secure session handling.",
            "Designed database tables for participants, events, stages, and results.",
            "Backend logic for publishing results and real-time event updates.",
            "Role-based access for administrative operations.",
            "Repository private / internal.",
            "🔗 Live: https://arts-app-25.vercel.app/",
        ],
    },
};

export default function showProject(args = []) {
    if (args.length === 0) {
        return <p>Usage: project &lt;name&gt; — try one from ‘projects’ list.</p>;
    }

    const name = args[0].toLowerCase();
    const project = projects[name];

    if (!project) {
        return <p>Project not found. Type <b>projects</b> to see the list.</p>;
    }

    return (
        <div>
            <p><b>{project.title}</b></p>
            <ul className="ml-4 list-disc">
                {project.details.map((line, i) => (
                    <li key={i}>{line}</li>
                ))}
            </ul>
        </div>
    );
}

export { projects };
