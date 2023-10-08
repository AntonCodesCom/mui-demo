import { Box, InputAdornment, Stack, TextField } from '@mui/material';
import PaymentHeader from '../Header';
import PaymentTable from '../Table';
import { SearchOutlined } from '@mui/icons-material';
// import FilterAltOutlined from '@mui/icons-material/FilterAltOutlined';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';

//
// All commented out code is for future use
//

export default function PaymentMain() {
  return (
    <>
      <PaymentHeader />
      <Box mb={1} />
      <Stack direction="row">
        {/* <Stack justifyContent="center" mr={0.5}>
          <IconButton>
            <FilterAltOutlined />
          </IconButton>
        </Stack>
        <Divider orientation="vertical" variant="middle" flexItem /> */}
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
