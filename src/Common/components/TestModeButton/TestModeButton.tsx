import {
  BugReport,
  ExpandMore,
  WarningAmberOutlined,
} from '@mui/icons-material';
import { ButtonBase, Chip, ListItemText, Menu, MenuItem } from '@mui/material';
import { useRef, useState } from 'react';
import styles from './TestModeButton.module.css';
import CommonTestMode from 'Common/types/TestMode';

interface Props {
  testMode: CommonTestMode;
  onTestModeChange?: (testMode: CommonTestMode) => void;
}

export default function CommonTestModeButton({
  testMode,
  onTestModeChange = () => {},
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const on = testMode === CommonTestMode.ON;

  function handleClick() {
    setAnchorEl(ref.current);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  function handleTurnOn() {
    onTestModeChange(CommonTestMode.ON);
    setAnchorEl(null);
  }
  function handleTurnOff() {
    onTestModeChange(CommonTestMode.OFF);
    setAnchorEl(null);
  }

  return (
    <>
      <ButtonBase ref={ref} onClick={handleClick}>
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
          classes={{
            label: styles.label,
          }}
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
