import {
  AddCircle,
  ChangeCircle,
  CheckCircle,
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
} from '@mui/material';

export default function PaymentTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow sx={{ whiteSpace: 'nowrap' }}>
            <TableCell sx={{ p: 0.5 }}>
              <Checkbox />
            </TableCell>
            <TableCell>Payment ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>P. Method</TableCell>
            <TableCell>Creation date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ p: 0.5 }}>
              <Checkbox />
            </TableCell>
            <TableCell>06c1774-7f3d-46ad...90a8</TableCell>
            <TableCell>
              <Chip
                size="small"
                color="error"
                label="Declined"
                icon={<RemoveCircle />}
              />
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>$19,623.00 USD</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>•••• 4242</TableCell>
            <TableCell>Oct 2, 2023, 14:30:59</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ p: 0.5 }}>
              <Checkbox />
            </TableCell>
            <TableCell>06c1774-7f3d-46ad...90a8</TableCell>
            <TableCell>
              <Chip
                size="small"
                color="success"
                label="Succeeded"
                icon={<CheckCircle />}
              />
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>$19,623.00 USD</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>•••• 4242</TableCell>
            <TableCell>Oct 2, 2023, 14:30:59</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ p: 0.5 }}>
              <Checkbox />
            </TableCell>
            <TableCell>06c1774-7f3d-46ad...90a8</TableCell>
            <TableCell>
              <Chip
                size="small"
                color="warning"
                label="Pending"
                icon={<WatchLater />}
              />
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>$19,623.00 USD</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>•••• 4242</TableCell>
            <TableCell>Oct 2, 2023, 14:30:59</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ p: 0.5 }}>
              <Checkbox />
            </TableCell>
            <TableCell>06c1774-7f3d-46ad...90a8</TableCell>
            <TableCell>
              <Chip
                size="small"
                color={undefined}
                label="Refunded"
                icon={<ChangeCircle />}
              />
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>$19,623.00 USD</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>•••• 4242</TableCell>
            <TableCell>Oct 2, 2023, 14:30:59</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ p: 0.5 }}>
              <Checkbox />
            </TableCell>
            <TableCell>06c1774-7f3d-46ad...90a8</TableCell>
            <TableCell>
              <Chip
                size="small"
                color="info"
                label="Created"
                icon={<AddCircle />}
              />
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>$19,623.00 USD</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>•••• 4242</TableCell>
            <TableCell>Oct 2, 2023, 14:30:59</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
