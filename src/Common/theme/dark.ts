import { ThemeOptions, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import commonThemeOptions, { commonPalette } from './common';

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
        colorSuccess: {
          backgroundColor: commonPalette.success.dark,
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
