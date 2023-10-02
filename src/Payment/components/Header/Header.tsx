import { Add, CloudUploadOutlined, MoreVert } from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { MouseEvent, useState } from 'react';

export default function PaymentHeader() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  function handleMenuOpen(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Stack direction="row" alignItems="center">
      <Typography variant="h5" component="h1">
        Payments overview
      </Typography>
      <Box flex={1} />
      <Box display={{ xs: 'none', sm: 'flex' }}>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<CloudUploadOutlined />}
        >
          Export
        </Button>
        <Box mr={0.5} />
        <Button variant="contained" color="primary" startIcon={<Add />}>
          Payment link
        </Button>
      </Box>
      <Box display={{ sm: 'none' }}>
        <IconButton onClick={handleMenuOpen}>
          <MoreVert />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <CloudUploadOutlined />
            </ListItemIcon>
            <ListItemText>Export</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText>Payment link</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </Stack>
  );
}
