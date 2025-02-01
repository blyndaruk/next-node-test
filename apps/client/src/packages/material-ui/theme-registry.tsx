'use client';

import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { Theme } from './theme';

import { FC, ReactNode } from 'react';

interface IThemeRegistry {
  children: ReactNode;
}

const ThemeRegistry: FC<Readonly<IThemeRegistry>> = ({ children }) => {
  return (
    <ThemeProvider theme={Theme} defaultMode={'dark'} disableTransitionOnChange>
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
    </ThemeProvider>
  );
};

export default ThemeRegistry;
