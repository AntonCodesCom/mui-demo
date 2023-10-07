import { ThemeOptions } from '@mui/material';

/**
 * Common properties for both light & dark themes.
 */
const commonThemeOptions: ThemeOptions = {
  spacing: (factor: number) => `${1 * factor}rem`, // 1 MUI unit = 1rem
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
    },
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
          paddingLeft: '1rem !important', // overriding .MuiToolbar-root
          paddingRight: '1rem !important', // overriding .MuiToolbar-root
        },
      },
    },
  },
};

export default commonThemeOptions;
