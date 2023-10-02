import { Box } from '@mui/material';
import PaymentHeader from '../Header';
import PaymentTable from '../Table';

export default function PaymentMain() {
  return (
    <>
      <PaymentHeader />
      <Box mb={2} />
      <PaymentTable />
    </>
  );
}
