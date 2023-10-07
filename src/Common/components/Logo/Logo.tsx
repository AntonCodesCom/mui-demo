import { Box, Stack, Typography, useTheme } from '@mui/material';
import { ReactComponent as Logo } from './logo.svg';

export default function CommonLogo() {
  const {
    palette: {
      primary: { main: primaryMainColor },
    },
  } = useTheme();
  return (
    <Stack direction="row">
      <Logo fill={primaryMainColor} />
      <Box mr={0.5} />
      <Typography variant="h6" component="div">
        PayUI
      </Typography>
    </Stack>
  );
}
