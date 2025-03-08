import React from 'react';
import { useTheme } from '../theme/theme-context';
import { ThemeContext } from '../theme/theme-context';
import { tokens } from '../theme/theme';

import Header from './Header';
import Button from './Button';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { toggleColorMode, mode, themeSettings } = useTheme();
  const colors = tokens(mode);

  return (
    <ThemeContext.Provider value={{ toggleColorMode }}>
      <div
        style={{
          backgroundColor: themeSettings.palette.background.default,
          color: colors.primary[100],
        }}
      >
        <Header mode={mode}>
          <h2>Task Manager</h2>
          <Button
            style={{ backgroundColor: colors.blueAccent[700] }}
            onClick={toggleColorMode}
            label={mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
          />
        </Header>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
export default Layout;
