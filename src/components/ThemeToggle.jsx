import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference on initial load
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 bg-[var(--color-neo-primary)] dark:bg-[var(--color-neo-secondary)] border-2 border-[var(--border-color)] neo-shadow-sm hover:neo-shadow-active transition-all"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <FiSun className="w-5 h-5 text-black" /> : <FiMoon className="w-5 h-5 text-black" />}
    </button>
  );
};

export default ThemeToggle;
