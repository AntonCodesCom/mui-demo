import {
  Checkbox,
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
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@mui/icons-material';

// utility
function formatAmount(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

// utility
function shortenUUID(uuid: string): string {
  const firstPart = uuid.slice(0, 19);
  const lastPart = uuid.slice(-4);
  return `${firstPart}...${lastPart}`;
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
                  <Checkbox
                    icon={
                      <CheckBoxOutlineBlank
                        sx={{
                          fill: (theme) => theme.palette.text.disabled,
                        }}
                      />
                    }
                    checkedIcon={<CheckBoxOutlined />}
                  />
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
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{x.method}</TableCell>
                <TableCell>{x.createdAt.toLocaleString('en-US')}</TableCell>
                <TableCell>{shortenUUID(x.id)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
