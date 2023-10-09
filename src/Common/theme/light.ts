import { ThemeOptions, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import commonThemeOptions, { commonPalette } from './common';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#4a46ff',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: 'white',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorSuccess: {
          backgroundColor: commonPalette.success.light,
          color: commonPalette.success.dark,
        },
      },
    },
  },
};

/**
 * Light theme.
 */
const lightTheme = createTheme(
  deepmerge(commonThemeOptions, lightThemeOptions),
);

export default lightTheme;
