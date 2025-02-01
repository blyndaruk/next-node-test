import type { CssVarsThemeOptions } from '@mui/material';

export const colorSchema: CssVarsThemeOptions = {
  colorSchemes: {
    dark: {
      palette: {
        mode: 'dark',
        background: {
          default: '#333',
          paper: '#333',
        },
        primary: {
          main: '#ffffff',
        },
        text: {
          primary: '#ffffff',
        },
      },
    },
    light: {
      palette: {
        mode: 'light',
        background: {
          default: '#f3f3f3',
          paper: '#ffffff',
        },
        primary: {
          main: '#1b1b1a',
        },
        text: {
          primary: '#000000',
        },
      },
    },
  },
};
