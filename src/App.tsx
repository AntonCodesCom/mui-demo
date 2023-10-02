import { CssBaseline, ThemeProvider } from '@mui/material';
import CommonMain from 'Common/components/Main';
import CommonNavbar from 'Common/components/Navbar';
import CommonSidebar from 'Common/components/Sidebar';
import darkTheme from 'Common/theme/dark';
import lightTheme from 'Common/theme/light';
import { useState } from 'react';

enum ThemeMode {
  DARK,
  LIGHT,
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.LIGHT);

  function handleThemeModeChange() {
    setThemeMode((mode) =>
      mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT,
    );
  }

  return (
    <ThemeProvider
      theme={themeMode === ThemeMode.DARK ? darkTheme : lightTheme}
    >
      <CssBaseline />
      <CommonNavbar
        onSidebarOpen={() => setSidebarOpen(true)}
        onThemeModeChange={handleThemeModeChange}
      />
      <CommonSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <CommonMain />
    </ThemeProvider>
  );
}
