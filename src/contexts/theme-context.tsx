'use client';

import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  // On mount, check localStorage or system preference
  // useEffect(() => {
  //   const stored = localStorage.getItem('theme') as Theme | null;
  //   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   const resolved = stored || (prefersDark ? 'dark' : 'light');
  //   setTheme(resolved);
  //   document.body.classList.toggle('dark', resolved === 'dark');
  // }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
