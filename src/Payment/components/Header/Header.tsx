import { Add, CloudUploadOutlined } from '@mui/icons-material';
import { Box, Button, Fab, IconButton, Stack, Typography } from '@mui/material';

export default function PaymentHeader() {
  return (
    <Stack direction="row" alignItems="center">
      <Typography variant="h5" component="h1">
        Payments overview
      </Typography>
      <Box flex={1} mr={1} />
      <Box display={{ xs: 'flex', sm: 'none' }}>
        <IconButton>
          <CloudUploadOutlined />
        </IconButton>
        <Box mr={0.5} />
        <Fab size="small" color="primary">
          <Add />
        </Fab>
      </Box>
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
    </Stack>
  );
}
