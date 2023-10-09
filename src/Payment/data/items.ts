import PaymentItem from 'Payment/types/Item';
import PaymentStatus from 'Payment/types/Status';

const paymentItems: PaymentItem[] = [
  {
    id: '06c1774-7f3d-46ad-90a8',
    status: PaymentStatus.SUCCEEDED,
    amount: 19623,
    createdAt: new Date('2023-10-09T14:58:30Z'),
  },
];

export default paymentItems;
