import PaymentStatus from './Status';

export default interface PaymentItem {
  id: string;
  status: PaymentStatus;
  amount: number;
  createdAt: Date;
  method: string;
}
