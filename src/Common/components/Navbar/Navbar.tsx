import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface Props {
  onModeChange?: () => void;
}

export default function CommonNavbar({ onModeChange = () => {} }: Props) {
  return (
    <AppBar position="sticky" elevation={0} color="default" enableColorOnDark>
      <Toolbar disableGutters>
        <IconButton size="large" color="inherit">
          <MenuIcon />
        </IconButton>
        <Box flex={1} />
        <Typography variant="h6" component="div">
          PayUI
        </Typography>
        <Box flex={1} />
        <IconButton size="large" color="inherit" onClick={onModeChange}>
          <DarkModeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
