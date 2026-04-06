'use client';

import { useTheme } from '@/contexts/theme-context';
import { Switch } from "@/components/ui/switch";
import { SunIcon, MoonIcon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <SunIcon className={theme === 'dark' ? 'opacity-30' : 'text-amber-500'}/>
      <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} aria-label="theme toggle"/>
      <MoonIcon className={theme === 'dark' ? 'text-blue-400' : 'opacity-30'}/>
    </div>
  );
}
