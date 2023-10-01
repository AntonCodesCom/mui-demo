import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface Props {
  onModeChange?: () => void;
}

export default function CommonNavbar({ onModeChange = () => {} }: Props) {
  return (
    <AppBar position="sticky" elevation={0} color="default" enableColorOnDark>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PayUI
        </Typography>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <IconButton size="large" color="inherit" onClick={onModeChange}>
          <DarkModeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
