import type { Theme } from '@mui/material';

export const menu: Theme['components'] = {
  MuiMenu: {
    styleOverrides: {
      root: {
        svg: {
          width: '1.8rem',
          height: '1.8rem',
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: '0.8rem',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: '0',
        fontSize: '1.6rem',
        color: 'inherit',
        transition: 'all 0.25s ease, color 0.25s ease',
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: '36px',
        color: 'inherit',
      },
    },
  },
};
