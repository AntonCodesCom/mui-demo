import {
  ArrowBack,
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import CommonTestModeButton from '../TestModeButton';
import CommonThemeMode from 'Common/types/ThemeMode';
import avatar from 'Common/data/avatar.jpg';
import CommonTestMode from 'Common/types/TestMode';

interface Props {
  themeMode: CommonThemeMode;
  testMode: CommonTestMode;
  open?: boolean;
  onClose?: () => void;
  onThemeModeChange?: () => void;
  onTestModeChange?: (testMode: CommonTestMode) => void;
}

export default function CommonRightMenu({
  themeMode,
  testMode,
  open = false,
  onClose = () => {},
  onThemeModeChange = () => {},
  onTestModeChange = () => {},
}: Props) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Toolbar>
        <IconButton onClick={onClose}>
          <ArrowBack />
        </IconButton>
      </Toolbar>
      <Stack direction="row" alignItems="center" gap={1.5} p={1}>
        <Avatar alt="Anton Bakhurynskyi" src={avatar} />
        <Typography>Anton B.</Typography>
      </Stack>
      <Divider />
      <Box component={List} px={0.5}>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsOutlined />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <SettingsOutlined />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </Box>
      <Divider />
      <Box component={List} px={0.5}>
        <ListItem>
          <ListItemButton onClick={onThemeModeChange}>
            <ListItemIcon>
              {themeMode === CommonThemeMode.DARK ? (
                <LightModeOutlined />
              ) : (
                <DarkModeOutlined />
              )}
            </ListItemIcon>
            <ListItemText
              primary={
                themeMode === CommonThemeMode.DARK ? 'Light mode' : 'Dark mode'
              }
            />
          </ListItemButton>
        </ListItem>
      </Box>
      <Divider />
      <Box py={1} px={0.5} textAlign="center">
        <CommonTestModeButton
          testMode={testMode}
          onTestModeChange={onTestModeChange}
        />
      </Box>
    </Drawer>
  );
}
