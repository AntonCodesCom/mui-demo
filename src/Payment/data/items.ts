import PaymentItem from 'Payment/types/Item';
import PaymentStatus from 'Payment/types/Status';

const paymentItems: PaymentItem[] = [
  {
    id: 'f3ace644-e658-42c3-a23e-611f9cbc4394',
    status: PaymentStatus.SUCCEEDED,
    amount: 19623,
    createdAt: new Date('2023-10-09T14:58:30Z'),
    method: '•••• 4242 (Visa)',
  },
  {
    id: 'd54f8608-482d-4ca5-81a2-fab84eea0aa5',
    status: PaymentStatus.PENDING,
    amount: 6623.53,
    createdAt: new Date('2023-10-09T15:23:31Z'),
    method: '•••• 6812 (Visa)',
  },
  {
    id: '19e26e93-97b8-4a26-8e68-fc77c99f7a20',
    status: PaymentStatus.DECLINED,
    amount: 1623.53,
    createdAt: new Date('2023-10-09T15:24:33Z'),
    method: '•••• 0944 (MasterCard)',
  },
  {
    id: '3cf9286e-549e-4ba7-9f2d-7efa6b3cb2b7',
    status: PaymentStatus.REFUNDED,
    amount: 19623,
    createdAt: new Date('2023-10-09T15:25:36Z'),
    method: '•••• 4242 (Visa)',
  },
  {
    id: '8a9dfaff-8266-488c-9322-bcdfaca70416',
    status: PaymentStatus.CREATED,
    amount: 130,
    createdAt: new Date('2023-10-09T15:27:40Z'),
    method: '•••• 5638 (MasterCard)',
  },
];

export default paymentItems;
