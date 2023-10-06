import {
  ArrowBack,
  NotificationsOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';

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
      <List>
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
      </List>
    </Drawer>
  );
}
