import type { Theme } from '@mui/material';

export const badge: Theme['components'] = {
  MuiBadge: {
    styleOverrides: {
      root: {
        '& .MuiBadge-badge': { borderRadius: '0.6rem' },
      },
    },
  },
};
