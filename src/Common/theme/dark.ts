import { createTheme } from '@mui/material';
import commonTheme from './common';

const darkTheme = createTheme(commonTheme, {
  palette: {
    mode: 'dark',
  },
});

export default darkTheme;
