import {
  ChangeCircle,
  CheckCircle,
  Info,
  RemoveCircle,
  WatchLater,
} from '@mui/icons-material';
import { Chip } from '@mui/material';
import PaymentStatus from 'Payment/types/Status';

interface Props {
  status: PaymentStatus;
}

export default function PaymentStatusChip({ status }: Props) {
  switch (status) {
    case PaymentStatus.CREATED: {
      return <Chip size="small" color="info" label="Created" icon={<Info />} />;
    }
    case PaymentStatus.DECLINED: {
      return (
        <Chip
          size="small"
          color="error"
          label="Declined"
          icon={<RemoveCircle />}
        />
      );
    }
    case PaymentStatus.PENDING: {
      return (
        <Chip
          size="small"
          color="warning"
          label="Pending"
          icon={<WatchLater />}
        />
      );
    }
    case PaymentStatus.REFUNDED: {
      return (
        <Chip
          size="small"
          color={undefined}
          label="Refunded"
          icon={<ChangeCircle />}
        />
      );
    }
    case PaymentStatus.SUCCEEDED: {
      return (
        <Chip
          size="small"
          color="success"
          label="Succeeded"
          icon={<CheckCircle />}
        />
      );
    }
    default:
      return null;
  }
}
