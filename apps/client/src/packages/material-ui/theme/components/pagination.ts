import type { Theme } from '@mui/material';

export const pagination: Theme['components'] = {
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        fontSize: '1.4rem',
        fontWeight: 500,
        svg: {
          width: '2rem',
          height: '2rem',
        },
      },
    },
  },
};
