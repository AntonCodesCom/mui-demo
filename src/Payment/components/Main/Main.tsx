import { Box, Button, Stack, Typography } from '@mui/material';

export default function PaymentMain() {
  return (
    <Stack direction="row">
      <Typography variant="h5" component="h1">
        Payments overview
      </Typography>
      <Box flex={1} />
      <Button variant="outlined" color="inherit">
        Export
      </Button>
      <Box mr={1.5} />
      <Button variant="contained" color="primary">
        Payment link
      </Button>
    </Stack>
  );
}
