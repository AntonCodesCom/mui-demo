import {
  BugReport,
  ExpandMore,
  WarningAmberOutlined,
} from '@mui/icons-material';
import { ButtonBase, Chip, ListItemText, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function CommonTestMode() {
  const [on, setOn] = useState(true);
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
      <ButtonBase onClick={handleClick}>
        <Chip
          icon={
            <BugReport
              sx={{
                fill: ({ palette }) =>
                  on
                    ? palette.mode === 'dark'
                      ? palette.warning.contrastText
                      : palette.warning.main
                    : palette.text.disabled,
              }}
            />
          }
          color={on ? 'warning' : undefined}
          label={on ? 'Test mode: On' : 'Test mode: Off'}
          deleteIcon={
            <ExpandMore
              sx={{
                fill: ({ palette }) =>
                  palette.mode === 'dark'
                    ? palette.warning.contrastText
                    : on
                    ? palette.warning.dark
                    : palette.text.disabled,
              }}
            />
          }
          onDelete={handleClick}
        />
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
