export default function projects() {
const short = {
    sjcet: "event management dashboard (internship)",
    brightsmile: "dental hospital website (HTML/CSS/Bootstrap)",
    securefilelocker: "AES encrypted file & text locker (Flask)",
    httpserver: "multi-threaded HTTP server in C",
    sysdash: "terminal system dashboard in C++",
    uvim: "custom Neovim IDE config (Lua)",
    gpad: "CLI notes manager powered by Git (Go)",
    btechified: "React + Supabase educational platform",
    minimallauncher: "terminal-style Android launcher (Kotlin, Jetpack Compose)",
    staffo: "staff locating system for campus (React, Supabase)",
    artsapp: "arts fest management system (React, Supabase)",
};
    return (
        <div>
            <p><b>Available projects:</b></p>
            <ul className="ml-4 space-y-1">
                {Object.keys(short).map((key) => (
                    <li key={key}>
                        <b>{key}</b>
                        <span className="text-green-500"> — {short[key]}</span>
                    </li>
                ))}
            </ul>
            <p className="mt-2">
                Type: <b>project &lt;name&gt;</b> to view full details.
            </p>
        </div>
    );
}
