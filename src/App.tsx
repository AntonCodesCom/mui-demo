import { Box, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import CommonMain from 'Common/components/Main';
import CommonNavbar from 'Common/components/Navbar';
import CommonRightMenu from 'Common/components/RightMenu';
import CommonSidebar from 'Common/components/Sidebar';
import darkTheme from 'Common/theme/dark';
import lightTheme from 'Common/theme/light';
import CommonTestMode from 'Common/types/TestMode';
import ThemeMode from 'Common/types/ThemeMode';
import { useState } from 'react';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.LIGHT);
  const [testMode, setTestMode] = useState<CommonTestMode>(CommonTestMode.ON);
  const mainBgColor = themeMode === ThemeMode.LIGHT ? '#fbfbfb' : '#121212';

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
          themeMode={themeMode}
          onSidebarOpen={() => setSidebarOpen(true)}
          onRightMenuOpen={() => setRightMenuOpen(true)}
          onThemeModeChange={handleThemeModeChange}
        />
        <Box
          component="main"
          flex={1}
          mx={{ xs: 0, md: 1 }}
          mb={{ xs: 0, md: 1 }}
          py={2}
          px={{ xs: 1, md: 2 }}
          borderRadius="16px"
          bgcolor={mainBgColor}
        >
          <CommonMain />
        </Box>
      </Stack>
      <CommonSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <CommonRightMenu
        themeMode={themeMode}
        testMode={testMode}
        open={rightMenuOpen}
        onClose={() => setRightMenuOpen(false)}
        onThemeModeChange={handleThemeModeChange}
        onTestModeChange={setTestMode}
      />
    </ThemeProvider>
  );
}
