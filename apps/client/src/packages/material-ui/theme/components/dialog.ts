import type { Theme } from '@mui/material';

export const dialog: Theme['components'] = {
  MuiDialog: {
    styleOverrides: {
      root: {
        '& .MuiDialog-paper': {
          width: '100%',
          maxWidth: '45rem',
          margin: '2.4rem',
        },

        '& .MuiTypography-root, & .MuiPickersDay-root, & .MuiPickersCalendarHeader-label': {
          fontSize: '1.5rem',
        },
      },
    },
  },
};
