import {
  ArrowBack,
  DarkModeOutlined,
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
import CommonTestMode from '../TestMode';

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
      <Stack direction="row" alignItems="center" gap={1} p={1}>
        <Avatar alt="AntonCodes" />
        <Typography>AntonCodes</Typography>
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
      <Box py={0.5} px={0.5}>
        <CommonTestMode />
      </Box>
    </Drawer>
  );
}
