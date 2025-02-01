import type { Theme } from '@mui/material';

export const input: Theme['components'] = {
  MuiTextField: {
    styleOverrides: {
      root: {
        svg: {
          width: '2.4rem',
          height: '2.4rem',
          transition: 'all 0.25s ease',
        },

        '& .MuiInputBase-root': {
          borderRadius: '0.8rem',
          fontSize: '1.6rem',
        },
        '& .MuiInputLabel-root': {
          fontSize: '1.6rem',
          fontWeight: 500,
        },
        '& .MuiOutlinedInput-notchedOutline': {
          transition: 'border 0.25s ease',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderWidth: '1px',
          },
          '&:hover fieldset': {
            borderWidth: '1px',
          },
          '&.Mui-focused fieldset': {
            borderWidth: '1px',
          },
        },
        '& .MuiInput-underline:hover:before': {
          borderWidth: '1px',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderWidth: '1px',
        },
        '& .MuiInput-underline.Mui-focused:not(.Mui-disabled):before': {
          borderWidth: '1px',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):after': {
          borderWidth: '1px',
        },
        '& .MuiInput-underline.Mui-focused:not(.Mui-disabled):after': {
          borderWidth: '1px',
        },
        // error text
        '& .MuiFormHelperText-root': {
          fontSize: '1.3rem',
          lineHeight: 1,
        },
      },
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      root: {
        '& svg': {
          width: '2rem',
          transition: 'all var(--transition)',
        },
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        svg: {
          maxWidth: '20px',
          maxHeight: '20px',
        },
      },
    },
  },
};
