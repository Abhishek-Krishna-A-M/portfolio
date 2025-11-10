const projects = {
    sjcet: {
        title: "🧠 SJCET Event Dashboard (Internship)",
        details: [
            "Built an event management system for college events as a backend intern.",
            "Stack: Node.js, Supabase, Vue, Vite",
            "Handled backend logic and admin dashboard functionality.",
            "No public repository available.",
        ],
    },
    brightsmile: {
        title: "💻 BrightSmile Dental Hospital Website",
        details: [
            "Fully responsive static website using HTML, CSS, and Bootstrap.",
            "Includes appointment forms, doctor profiles, gallery, FAQs, and reviews.",
            "Deployed live via Netlify.",
            "🔗 Live: https://brightsmile-dental-hospital.netlify.app",
            "💻 GitHub: https://github.com/Abhishek-Krishna-A-M/DentalHospitalSite",
        ],
    },
    securefilelocker: {
        title: "🔐 SecureFileLocker",
        details: [
            "Full-stack Flask web app for file & text AES encryption.",
            "Encrypt/decrypt any file or message with password protection.",
            "Hosted on Render, includes dark mode and responsive UI.",
            "🔗 Live: https://securefilelocker.onrender.com",
            "💻 GitHub: https://github.com/eagle4b1/SecureFileLocker",
        ],
    },
    httpserver: {
        title: "⚙️ HTTP Server in C",
        details: [
            "Lightweight, multi-threaded HTTP server built from scratch in C.",
            "Supports static sites, SPA fallback, and simple API endpoints.",
            "Hot reload, logging, and concurrent client handling.",
            "💻 GitHub: https://github.com/Abhishek-Krishna-A-M/HTTP_Server",
        ],
    },
    sysdash: {
        title: "📊 SysDash – Terminal System Dashboard",
        details: [
            "Terminal-based system monitor inspired by htop and neofetch.",
            "Real-time CPU, memory, disk, and process stats with process killer.",
            "Built in C++ using a Neovim-style TUI interface.",
            "💻 GitHub: https://github.com/Abhishek-Krishna-A-M/sysdash",
        ],
    },
    uvim: {
        title: "🧠 U Vim – Custom Neovim IDE Configuration",
        details: [
            "Custom Neovim setup built entirely in Lua for speed and extensibility.",
            "LSP support, autocompletion, diagnostics, and Treesitter.",
            "Uses lazy.nvim for optimized plugin management.",
            "💻 GitHub: https://github.com/Abhishek-Krishna-A-M/U_Vim",
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
