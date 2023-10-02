import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import PaymentHeader from '../Header';
import PaymentTable from '../Table';
import { FilterAltOutlined, SearchOutlined } from '@mui/icons-material';

export default function PaymentMain() {
  return (
    <>
      <PaymentHeader />
      <Box mb={1} />
      <Stack direction="row">
        <Stack justifyContent="center" mr={0.5}>
          <IconButton>
            <FilterAltOutlined />
          </IconButton>
        </Stack>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box flex={1} ml="-1px">
          <TextField
            placeholder="Search by amount, payment method..."
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Stack>
      <Box mb={1} />
      <PaymentTable />
    </>
  );
}
