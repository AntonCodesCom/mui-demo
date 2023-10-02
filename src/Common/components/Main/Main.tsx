import { Box } from '@mui/material';
import PaymentMain from 'Payment/components/Main';

export default function CommonMain() {
  return (
    <Box py={2} px={{ xs: 1, sm: 2 }}>
      <PaymentMain />
    </Box>
  );
}
