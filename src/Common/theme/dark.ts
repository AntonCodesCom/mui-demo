import { ThemeOptions, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import commonThemeOptions, { commonPalette } from './common';

const { error, success } = commonPalette;

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
        },
        colorSuccess: {
          backgroundColor: success.dark,
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
