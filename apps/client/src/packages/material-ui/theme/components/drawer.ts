import type { Theme } from '@mui/material';

export const drawer: Theme['components'] = {
  MuiDrawer: {
    styleOverrides: {
      root: {
        '& .MuiPaper-root': {
          padding: '8px',
          borderRadius: '0',
        },
      },
    },
  },
};
