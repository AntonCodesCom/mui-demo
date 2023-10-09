import { ThemeOptions, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import commonThemeOptions, { commonPalette } from './common';

const { error, info, success, warning } = commonPalette;

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
        root: {
          backgroundColor: commonPalette.action.hover,
          color: commonPalette.text.secondary,
        },
        colorError: {
          backgroundColor: error.light,
          color: error.dark,
        },
        colorInfo: {
          backgroundColor: info.light,
          color: info.dark,
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
