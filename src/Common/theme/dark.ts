import { ThemeOptions, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import commonThemeOptions from './common';

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: 'black',
    },
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
  },
};

/**
 * Dark theme.
 */
const darkTheme = createTheme(deepmerge(commonThemeOptions, darkThemeOptions));

export default darkTheme;
