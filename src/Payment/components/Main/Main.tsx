import {
  Box,
  Button,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export default function PaymentMain() {
  return (
    <>
      <Stack direction="row">
        <Typography variant="h5" component="h1">
          Payments overview
        </Typography>
        <Box flex={1} />
        <Button variant="outlined" color="inherit">
          Export
        </Button>
        <Box mr={1.5} />
        <Button variant="contained" color="primary">
          Payment link
        </Button>
      </Stack>
      <Box mb={2} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
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
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>06c1774-7f3d-46ad...90a8</TableCell>
              <TableCell>Succeeded</TableCell>
              <TableCell>$19,623.00 USD</TableCell>
              <TableCell>•••• 4242</TableCell>
              <TableCell>Oct 2, 2023, 14:30:59</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>06c1774-7f3d-46ad...90a8</TableCell>
              <TableCell>Succeeded</TableCell>
              <TableCell>$19,623.00 USD</TableCell>
              <TableCell>•••• 4242</TableCell>
              <TableCell>Oct 2, 2023, 14:30:59</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>06c1774-7f3d-46ad...90a8</TableCell>
              <TableCell>Succeeded</TableCell>
              <TableCell>$19,623.00 USD</TableCell>
              <TableCell>•••• 4242</TableCell>
              <TableCell>Oct 2, 2023, 14:30:59</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
