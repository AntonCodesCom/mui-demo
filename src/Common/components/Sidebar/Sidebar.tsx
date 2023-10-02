import {
  AnalyticsOutlined,
  CodeOutlined,
  HomeOutlined,
  IntegrationInstructionsOutlined,
  LogoutOutlined,
  PaymentOutlined,
  PhishingOutlined,
  TerminalOutlined,
} from '@mui/icons-material';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

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
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AnalyticsOutlined />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PaymentOutlined />
            </ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IntegrationInstructionsOutlined />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PhishingOutlined />
            </ListItemIcon>
            <ListItemText primary="Fraud solution" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CodeOutlined />
            </ListItemIcon>
            <ListItemText primary="Developers" />
          </ListItemButton>
        </ListItem>
      </List>
      <List subheader={<ListSubheader>Support</ListSubheader>}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TerminalOutlined />
            </ListItemIcon>
            <ListItemText primary="Documentation" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutOutlined />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
