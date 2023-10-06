import {
  AppBar,
  Avatar,
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
import avatar from './avatar.jpg';
import { ExpandMore } from '@mui/icons-material';

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
      <Toolbar>
        <IconButton size="large" color="inherit" onClick={onSidebarOpen}>
          <MenuIcon />
        </IconButton>
        <Box flex={1} />
        <CommonLogo />
        <Box flex={1} />
        <IconButton size="large" color="inherit" onClick={onThemeModeChange}>
          <DarkModeIcon />
        </IconButton>
        <Box
          component={Divider}
          orientation="vertical"
          variant="middle"
          flexItem
          mx={0.5}
        />
        <Stack
          component={ButtonBase}
          direction="row"
          alignItems="center"
          px={0.5}
          py={0.25}
          borderRadius="4px"
        >
          <Avatar alt="AntonCodes" src={avatar} />
          <Box mr={0.25} />
          <ExpandMore />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
