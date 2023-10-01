import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import commonThemeOptions from './common';

/**
 * Dark theme.
 */
const darkTheme = createTheme(
  deepmerge(commonThemeOptions, {
    palette: {
      mode: 'dark',
    },
  }),
);

export default darkTheme;
