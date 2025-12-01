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
            "Supports static sites, SPA fallback, basic API endpoints.",
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
            "💻 GitHub (frontend): https://github.com/<your-repo-here>",
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
