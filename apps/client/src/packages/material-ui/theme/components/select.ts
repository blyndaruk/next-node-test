import type { Theme } from '@mui/material';

export const select: Theme['components'] = {
  MuiFormControl: {
    styleOverrides: {
      root: {
        '& .MuiInputBase-root': {
          borderRadius: '0.8rem',
          fontSize: '1.6rem',
        },
        '& .MuiInputLabel-root': {
          fontSize: '1.6rem',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          transition: 'border 0.5s ease',
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
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        '& .MuiInputBase-input:focus': {
          backgroundColor: 'transparent',
        },
        svg: {
          width: '2.4rem',
          height: '2.4rem',
          marginTop: '-0.5rem',
          transition: 'all 0.25s ease',
        },
      },
    },
  },
};
