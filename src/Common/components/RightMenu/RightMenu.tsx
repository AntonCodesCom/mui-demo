import {
  ArrowBack,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import {
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
import CommonTestMode from '../TestMode';
import CommonAvatar from '../Avatar';

interface Props {
  open?: boolean;
  onClose?: () => void;
}

export default function CommonRightMenu({
  open = false,
  onClose = () => {},
}: Props) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Toolbar>
        <IconButton onClick={onClose}>
          <ArrowBack />
        </IconButton>
      </Toolbar>
      <Stack direction="row" alignItems="center" gap={1.5} p={1}>
        <CommonAvatar />
        <Typography>Anton</Typography>
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
          <ListItemButton>
            <ListItemIcon>
              <DarkModeOutlined />
            </ListItemIcon>
            <ListItemText primary="Dark mode" />
          </ListItemButton>
        </ListItem>
      </Box>
      <Divider />
      <Box py={1} px={0.5} textAlign="center">
        <CommonTestMode />
      </Box>
    </Drawer>
  );
}
