import type { Theme } from '@mui/material';

export const tooltip: Theme['components'] = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        fontSize: '1.3rem',
        fontFamily: 'inherit',
        colorDefault: 'var(--font-color-primary)',
      },
    },
  },
};
