import { createContext, useState, useMemo, useEffect } from 'react';
import { themeSettings } from './theme';
import { toggleTheme } from '../features/tasks/theme-slice';
import { useDispatch } from 'react-redux';

interface ThemeContextValue {
  toggleColorMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  toggleColorMode: () => {},
});

export const useTheme = () => {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark');
  const dispatch = useDispatch();
  // Function to toggle theme mode
  const toggleColorMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    dispatch(toggleTheme(newMode)); // Dispatch action to update Redux store
  };
  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  return {
    themeSettings: themeSettings(mode),
    mode,
    toggleColorMode,
  };
};
