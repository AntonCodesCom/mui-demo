import { Box, CssBaseline, Paper, Stack, ThemeProvider } from '@mui/material';
import CommonMain from 'Common/components/Main';
import CommonNavbar from 'Common/components/Navbar';
import CommonRightMenu from 'Common/components/RightMenu';
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
  const [rightMenuOpen, setRightMenuOpen] = useState(false);
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
      <Stack minHeight="100vh">
        <CommonNavbar
          onSidebarOpen={() => setSidebarOpen(true)}
          onRightMenuOpen={() => setRightMenuOpen(true)}
          onThemeModeChange={handleThemeModeChange}
        />
        <Box component={Paper} flex={1} py={2} px={{ xs: 1, sm: 2 }}>
          <CommonMain />
        </Box>
      </Stack>
      <CommonSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <CommonRightMenu
        open={rightMenuOpen}
        onClose={() => setRightMenuOpen(false)}
      />
    </ThemeProvider>
  );
}
