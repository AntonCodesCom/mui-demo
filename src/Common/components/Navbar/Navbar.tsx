import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import logo from './logo.svg';

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
        <Stack direction="row">
          <img alt="logo" src={logo} />
          <Box mr={0.5} />
          <Typography variant="h6" component="div">
            PayUI
          </Typography>
        </Stack>
        <Box flex={1} />
        <IconButton size="large" color="inherit" onClick={onModeChange}>
          <DarkModeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
