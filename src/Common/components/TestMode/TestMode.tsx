import {
  BugReport,
  ExpandMore,
  WarningAmberOutlined,
} from '@mui/icons-material';
import {
  Box,
  ButtonBase,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function CommonTestMode() {
  const [on, setOn] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleTurnOn() {
    setOn(true);
    setAnchorEl(null);
  }
  function handleTurnOff() {
    setOn(false);
    setAnchorEl(null);
  }

  return (
    <>
      <ButtonBase
        onClick={handleClick}
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
            backgroundColor: on ? 'warning.light' : 'action.hover',
            opacity: on ? 0.2 : 1,
            borderRadius: '4px',
          }}
        />
        <Stack direction="row" position="relative">
          <BugReport
            sx={{
              fill: ({ palette }) =>
                on ? palette.warning.main : palette.text.disabled,
            }}
          />
          <Typography ml={0.5} mr={on ? 0.4 : 0.25}>
            {on ? 'Test mode: On' : 'Test mode: Off'}
          </Typography>
          <ExpandMore />
        </Stack>
      </ButtonBase>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleTurnOn} selected={on}>
          <ListItemText>Turn On</ListItemText>
          <WarningAmberOutlined
            sx={{
              fill: ({ palette }) => palette.warning.main,
              ml: 0.5,
            }}
          />
        </MenuItem>
        <MenuItem onClick={handleTurnOff} selected={!on}>
          <ListItemText>Turn Off</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
