import { Box } from '@mui/material';
import PaymentHeader from '../Header';
import PaymentTable from '../Table';
import PaymentFilters from '../Filters';

export default function PaymentMain() {
  return (
    <>
      <PaymentHeader />
      <Box mb={1} />
      <PaymentFilters />
      <Box mb={1} />
      <PaymentTable />
    </>
  );
}
