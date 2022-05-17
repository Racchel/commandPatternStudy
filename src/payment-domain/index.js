import { PaymentService } from './services/index.js';

import {
  CreatePaymentTicketCommand,
  UpdatePaymentTicketCommand,
} from './command/index.js';

const paymentService = new PaymentService();
export const createPaymentTicketCommand = new CreatePaymentTicketCommand(paymentService);
export const updatePaymentTicketCommand = new UpdatePaymentTicketCommand(paymentService);
