import { CssBaseline, ThemeProvider } from '@mui/material';
import CommonMain from 'Common/components/Main';
import CommonNavbar from 'Common/components/Navbar';
import darkTheme from 'Common/theme/dark';
import lightTheme from 'Common/theme/light';
import { useState } from 'react';

enum Theme {
  DARK,
  LIGHT,
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  function handleModeChange() {
    setTheme((theme) => (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  }

  return (
    <ThemeProvider theme={theme === Theme.DARK ? darkTheme : lightTheme}>
      <CssBaseline />
      <CommonNavbar onModeChange={handleModeChange} />
      <CommonMain />
    </ThemeProvider>
  );
}
