import {
  ArrowBack,
  BugReport,
  DarkModeOutlined,
  ExpandMore,
  NotificationsOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  ButtonBase,
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
      <Box pt={0.5} px={0.5}>
        <ButtonBase
          sx={{
            position: 'relative',
            px: 0.5,
            py: 0.25,
            borderRadius: '4px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'warning.light',
              opacity: 0.2,
              borderRadius: '4px',
            }}
          />
          <Stack direction="row" position="relative">
            <BugReport
              sx={{
                fill: (theme) => theme.palette.warning.main,
              }}
            />
            <Typography ml={0.5} mr={0.4}>
              Test mode: On
            </Typography>
            <ExpandMore />
          </Stack>
        </ButtonBase>
        <Box mb={0.5} />
        <ButtonBase
          sx={{
            position: 'relative',
            px: 0.5,
            py: 0.25,
            borderRadius: '4px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'action.hover',
              borderRadius: '4px',
            }}
          />
          <Stack direction="row" position="relative">
            <BugReport
              sx={{
                fill: (theme) => theme.palette.text.disabled,
              }}
            />
            <Typography ml={0.5} mr={0.25}>
              Test mode: Off
            </Typography>
            <ExpandMore />
          </Stack>
        </ButtonBase>
        <Box mb={1.5} />
        <CommonTestMode />
      </Box>
    </Drawer>
  );
}
