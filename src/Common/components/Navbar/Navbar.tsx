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
import { ExpandMore } from '@mui/icons-material';
import CommonAvatar from '../Avatar';

interface Props {
  onSidebarOpen?: () => void;
  onRightMenuOpen?: () => void;
  onThemeModeChange?: () => void;
}

export default function CommonNavbar({
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
