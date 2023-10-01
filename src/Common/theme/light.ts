import { createTheme } from '@mui/material';
import commonTheme from './common';

const lightTheme = createTheme(commonTheme, {
  palette: {
    mode: 'light',
  },
});

export default lightTheme;
