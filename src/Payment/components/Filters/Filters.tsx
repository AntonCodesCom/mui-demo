import { SearchOutlined } from '@mui/icons-material';
import { Box, InputAdornment, Stack, TextField } from '@mui/material';
// import FilterAltOutlined from '@mui/icons-material/FilterAltOutlined';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';

//
// All commented out code is for future use
//

export default function PaymentFilters() {
  return (
    <Stack direction="row">
      {/* <Stack justifyContent="center" mr={0.5}>
        <IconButton>
          <FilterAltOutlined />
        </IconButton>
      </Stack>
      <Divider orientation="vertical" variant="middle" flexItem /> */}
      {/* TODO: ml="-1px" when the commented out code is re-applied */}
      <Box flex={1} ml="-0px">
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
  );
}
