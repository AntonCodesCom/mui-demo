import { createTheme } from '@mui/material';

const commonTheme = createTheme({
  spacing: (factor: number) => `${1 * factor}rem`, // 1 MUI unit = 1rem
});

export default commonTheme;
