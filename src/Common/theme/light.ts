import { ThemeOptions, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import commonThemeOptions, { commonPalette } from './common';

const { error, success, warning } = commonPalette;

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
        colorError: {
          backgroundColor: error.light,
          color: error.dark,
        },
        colorSuccess: {
          backgroundColor: success.light,
          color: success.dark,
        },
        colorWarning: {
          backgroundColor: warning.light,
          color: warning.dark,
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
