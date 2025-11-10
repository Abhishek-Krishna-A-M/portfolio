import { useState, useEffect } from "react";

const sections = [
  `> LANGUAGES & OS
  • Linux
  • C, C++, Java, Python, JavaScript, TypeScript
  • Bash, Lua
`,
  `> BACKEND & DATABASES
  • Node.js, Express.js, REST APIs, Socket.io
  • Django, Flask
  • PostgreSQL, MongoDB, Supabase, Firebase
`,
  `> FRONTEND & UI
  • React, Next.js, Vite
  • HTML5, CSS3, TailwindCSS, Bootstrap
`,
  `> TOOLS & DEVOPS
  • Git, GitHub, Docker (learning)
  • Vercel, Render, Netlify, Postman, cURL
  • VS Code, Neovim, Canva
`,
  `> FOCUS AREAS
  • Backend Systems, Web Architecture
  • Cybersecurity, Cloud Fundamentals
`,
];

export default function Skills() {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 20; // ms per character, tweak this for faster/slower typing
  const sectionDelay = 500; // delay between sections

  useEffect(() => {
    let sectionIndex = 0;
    let charIndex = 0;
    let current = "";
    let timeout;

    const typeNextChar = () => {
      const section = sections[sectionIndex];
      if (charIndex < section.length) {
        current += section[charIndex];
        setDisplayedText(current);
        charIndex++;
        timeout = setTimeout(typeNextChar, typingSpeed);
      } else {
        sectionIndex++;
        if (sectionIndex < sections.length) {
          charIndex = 0;
          timeout = setTimeout(typeNextChar, sectionDelay);
        }
      }
    };

    typeNextChar();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <pre className="text-green-400 font-mono leading-relaxed whitespace-pre-wrap">
      {displayedText}
    </pre>
  );
}