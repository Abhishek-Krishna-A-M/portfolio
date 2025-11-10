import { useState } from "react";
import BootSequence from "./components/BootSequence";
import Terminal from "./components/Terminal";

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1117] text-green-400 font-mono">
      {!booted ? (
        <BootSequence onFinish={() => setBooted(true)} />
      ) : (
        <Terminal />
      )}
    </div>
  );
}

export default App;
