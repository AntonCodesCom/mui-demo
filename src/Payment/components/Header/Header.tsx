import { Add, CloudUploadOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Fab,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

export default function PaymentHeader() {
  const {
    palette: { mode },
  } = useTheme();
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
        <Fab size="small" color="primary" sx={{ boxShadow: 'none' }}>
          <Add />
        </Fab>
      </Box>
      <Box display={{ xs: 'none', sm: 'flex' }}>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<CloudUploadOutlined />}
          sx={{
            borderColor: mode === 'dark' ? '#1c1c1c' : '#F0F2F4',
            backgroundColor: mode === 'dark' ? '#1c1c1c' : '#white',
          }}
        >
          Export
        </Button>
        <Box mr={0.5} />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          disableElevation
        >
          Payment link
        </Button>
      </Box>
    </Stack>
  );
}
