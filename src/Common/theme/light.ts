import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import commonThemeOptions from './common';

/**
 * Light theme.
 */
const lightTheme = createTheme(
  deepmerge(commonThemeOptions, {
    palette: {
      mode: 'light',
    },
  }),
);

export default lightTheme;
