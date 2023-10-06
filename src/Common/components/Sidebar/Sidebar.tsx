import {
  AnalyticsOutlined,
  CodeOutlined,
  HomeOutlined,
  IntegrationInstructionsOutlined,
  LogoutOutlined,
  MenuOpen,
  PaymentOutlined,
  PhishingOutlined,
  TerminalOutlined,
} from '@mui/icons-material';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
} from '@mui/material';
import CommonLogo from '../Logo';

interface Props {
  open?: boolean;
  onClose?: () => void;
}

export default function CommonSidebar({
  open = false,
  onClose = () => {},
}: Props) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Toolbar disableGutters>
        <Box mr={1.5} />
        <CommonLogo />
        <Box flex="1" />
        <IconButton size="large" color="inherit" onClick={onClose}>
          <MenuOpen />
        </IconButton>
        <Box mr={0.5} />
      </Toolbar>
      <Box px={1}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AnalyticsOutlined />
              </ListItemIcon>
              <ListItemText primary="Analytics" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <PaymentOutlined />
              </ListItemIcon>
              <ListItemText primary="Payments" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <IntegrationInstructionsOutlined />
              </ListItemIcon>
              <ListItemText primary="Integrations" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <PhishingOutlined />
              </ListItemIcon>
              <ListItemText primary="Fraud solution" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Developers" />
            </ListItemButton>
          </ListItem>
        </List>
        <List subheader={<ListSubheader>Support</ListSubheader>}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <TerminalOutlined />
              </ListItemIcon>
              <ListItemText primary="Documentation" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <LogoutOutlined />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
