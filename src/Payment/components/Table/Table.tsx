import {
  ChangeCircle,
  CheckCircle,
  Info,
  RemoveCircle,
  WatchLater,
} from '@mui/icons-material';
import {
  Checkbox,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import paymentItems from 'Payment/data/items';
import PaymentStatusChip from '../StatusChip';

// utility
function formatAmount(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

//
// component
//
export default function PaymentTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>P. Method</TableCell>
            <TableCell>Creation date</TableCell>
            <TableCell>Payment ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paymentItems
            .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
            .map((x, i) => (
              <TableRow key={i}>
                <TableCell sx={{ p: 0.5 }}>
                  <Checkbox />
                </TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>
                  <Typography variant="body2" display="inline" fontWeight={700}>
                    {formatAmount(x.amount)}
                  </Typography>{' '}
                  <Typography variant="body2" display="inline" fontWeight={300}>
                    USD
                  </Typography>
                </TableCell>
                <TableCell>
                  <PaymentStatusChip status={x.status} />
                </TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>•••• 4242</TableCell>
                <TableCell>{x.createdAt.toLocaleString('en-US')}</TableCell>
                <TableCell>{x.id}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
