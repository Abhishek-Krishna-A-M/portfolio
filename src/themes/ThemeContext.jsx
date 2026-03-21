import { createContext, useContext, useState, useEffect } from "react";
import { themes, defaultTheme } from "./themes";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    try { return localStorage.getItem("ak-theme") || defaultTheme; }
    catch { return defaultTheme; }
  });

  const theme = themes[themeName] || themes[defaultTheme];

  const setTheme = (name) => {
    if (themes[name]) {
      setThemeName(name);
      try { localStorage.setItem("ak-theme", name); } catch {}
      return true;
    }
    return false;
  };

  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--bg", theme.bg);
    r.setProperty("--surface", theme.surface);
    r.setProperty("--text", theme.text);
    r.setProperty("--text-dim", theme.textDim);
    r.setProperty("--text-muted", theme.textMuted);
    r.setProperty("--accent", theme.accent);
    r.setProperty("--accent-dim", theme.accentDim);
    r.setProperty("--border", theme.border);
    r.setProperty("--error", theme.error);
    r.setProperty("--prompt", theme.prompt);
    r.setProperty("--cursor-color", theme.cursor);
    r.setProperty("--font", theme.fontFamily);
    document.body.style.background = theme.bg;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme, availableThemes: Object.keys(themes) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
