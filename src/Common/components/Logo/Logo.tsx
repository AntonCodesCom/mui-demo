import { Box, Stack, Typography } from '@mui/material';
import logo from './logo.svg';

export default function CommonLogo() {
  return (
    <Stack direction="row">
      <img alt="logo" src={logo} />
      <Box mr={0.5} />
      <Typography variant="h6" component="div">
        PayUI
      </Typography>
    </Stack>
  );
}
