import {
  AppBar,
  Box,
  ButtonBase,
  Divider,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import CommonLogo from '../Logo';
import { ExpandMore, LightModeOutlined } from '@mui/icons-material';
import CommonAvatar from '../Avatar';
import CommonThemeMode from 'Common/types/ThemeMode';

interface Props {
  themeMode: CommonThemeMode;
  onSidebarOpen?: () => void;
  onRightMenuOpen?: () => void;
  onThemeModeChange?: () => void;
}

export default function CommonNavbar({
  themeMode,
  onSidebarOpen = () => {},
  onRightMenuOpen = () => {},
  onThemeModeChange = () => {},
}: Props) {
  return (
    <AppBar position="sticky" elevation={0} color="default" enableColorOnDark>
      <Toolbar>
        <IconButton size="large" color="inherit" onClick={onSidebarOpen}>
          <MenuIcon />
        </IconButton>
        <Box flex={1} />
        <CommonLogo />
        <Box flex={1} />
        <Box display={{ xs: 'none', sm: 'block' }}>
          <IconButton size="large" color="inherit" onClick={onThemeModeChange}>
            {themeMode === CommonThemeMode.DARK ? (
              <LightModeOutlined />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Box>
        <Box
          component={Divider}
          orientation="vertical"
          variant="middle"
          flexItem
          display={{ xs: 'none', sm: 'block' }}
          mx={0.5}
        />
        <Stack
          component={ButtonBase}
          direction="row"
          alignItems="center"
          px={0.5}
          py={0.25}
          borderRadius="4px"
          onClick={onRightMenuOpen}
        >
          <CommonAvatar />
          <Box mr={0.25} />
          <ExpandMore />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
