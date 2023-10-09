import { ThemeOptions, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import commonThemeOptions, { commonPalette } from './common';

const { error, info, success, warning } = commonPalette;

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#6c69ff',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: 'black',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorError: {
          backgroundColor: error.dark,
          color: error.contrastText,
        },
        colorInfo: {
          backgroundColor: info.dark,
          color: info.contrastText,
        },
        colorSuccess: {
          backgroundColor: success.dark,
          color: success.contrastText,
        },
        colorWarning: {
          backgroundColor: warning.dark,
          color: warning.contrastText,
        },
      },
    },
  },
};

/**
 * Dark theme.
 */
const darkTheme = createTheme(deepmerge(commonThemeOptions, darkThemeOptions));

export default darkTheme;
