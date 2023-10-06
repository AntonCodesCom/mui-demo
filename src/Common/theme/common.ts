import { ThemeOptions } from '@mui/material';

/**
 * Common properties for both light & dark themes.
 */
const commonThemeOptions: ThemeOptions = {
  spacing: (factor: number) => `${1 * factor}rem`, // 1 MUI unit = 1rem
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'transparent',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        gutters: {
          paddingLeft: '1rem !important',
          paddingRight: '1rem !important',
        },
      },
    },
  },
};

export default commonThemeOptions;
