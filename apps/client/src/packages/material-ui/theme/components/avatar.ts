import type { Theme } from '@mui/material';

export const avatar: Theme['components'] = {
  MuiAvatar: {
    styleOverrides: {
      root: {
        fontSize: '1.6rem',
        color: 'inherit',
      },
    },
  },
};
