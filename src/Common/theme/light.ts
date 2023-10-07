import { ThemeOptions, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import commonThemeOptions from './common';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: 'white',
      paper: '#fbfbfb',
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
  },
};

/**
 * Light theme.
 */
const lightTheme = createTheme(
  deepmerge(commonThemeOptions, lightThemeOptions),
);

export default lightTheme;
