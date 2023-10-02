import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import CommonLogo from '../Logo';

interface Props {
  onSidebarOpen?: () => void;
  onThemeModeChange?: () => void;
}

export default function CommonNavbar({
  onSidebarOpen = () => {},
  onThemeModeChange = () => {},
}: Props) {
  return (
    <AppBar position="sticky" elevation={0} color="default" enableColorOnDark>
      <Toolbar disableGutters>
        <IconButton size="large" color="inherit" onClick={onSidebarOpen}>
          <MenuIcon />
        </IconButton>
        <Box flex={1} />
        <CommonLogo />
        <Box flex={1} />
        <IconButton size="large" color="inherit" onClick={onThemeModeChange}>
          <DarkModeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
