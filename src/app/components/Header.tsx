import React from 'react';
import { tokens } from '../theme/theme';

interface HeaderProps {
  mode: string;
  children: React.ReactNode;
}
const Header = ({ mode, children }: HeaderProps) => {
  const colors = tokens(mode);

  return (
    <div
      style={{
        backgroundColor: colors.blueAccent[600],
        color: colors.primary[100],
      }}
      className='header'
    >
      {children}
    </div>
  );
};

export default Header;
