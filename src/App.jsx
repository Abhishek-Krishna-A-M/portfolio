import { useState } from "react";
import { ThemeProvider } from "./themes/ThemeContext";
import BootSequence from "./components/BootSequence";
import Terminal from "./components/Terminal";

export default function App() {
  const [booted, setBooted] = useState(false);
  return (
    <ThemeProvider>
      {booted ? <Terminal /> : <BootSequence onFinish={() => setBooted(true)} />}
    </ThemeProvider>
  );
}
