/** domains */
import { PaymentModel } from '../base-domain/index.js';

/** commands */
import {
  createPaymentTicketCommand,
  updatePaymentTicketCommand,
} from '../payment-domain/index.js';

import {
  sendMessageToQueueCommand,
} from '../kafka-domain/index.js';

/** control */
import { ControlCenter } from './control.js';

/** Main function */
export const MainFunction = async ({ paymentData, paymentDataUpdate, sendMessageData }) => {
  const controlCenter = new ControlCenter();

  /** validando dados */
  const paymentModel = new PaymentModel();
  const validatedPaymentData = paymentModel.validate(paymentData);
  const validatedPaymentUpdateData = paymentModel.validate(paymentDataUpdate);

  /** criar um ticket */
  await controlCenter.callServiceAsync(createPaymentTicketCommand, validatedPaymentData);

  /** atualizar um ticket */
  await controlCenter.callServiceAsync(updatePaymentTicketCommand, validatedPaymentUpdateData);

  /** enviar mensagem para fila */
  await controlCenter.callServiceAsync(sendMessageToQueueCommand, sendMessageData);
};
