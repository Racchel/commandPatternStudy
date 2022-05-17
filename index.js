import { PaymentModel } from './src/base-domain/index.js';

import {
  createPaymentTicketCommand,
  updatePaymentTicketCommand,
} from './src/payment-domain/index.js';

import {
  sendMessageToQueueCommand,
} from './src/kafka-domain/index.js';

class ControlCenter {
  async callService(command, data) {
    console.log(`Executando serviço de: ${command.commandName}`);
    await command.execute(data);
  }
}

const MainFunction = () => {
  const controlCenter = new ControlCenter();

  const paymentData = {
    name: 'Racchel',
    age: 19,
    value: 10000,
  };

  const paymentDataUpdate = {
    ...paymentData,
    name: 'Racchel Velasco',
  };

  const sendMessageData = {
    message: paymentDataUpdate,
    topic: 'payment.topic',
  };

  /** validando dados */
  const paymentModel = new PaymentModel();
  const validatedPaymentData = paymentModel.validate(paymentData);
  const validatedPaymentUpdateData = paymentModel.validate(paymentDataUpdate);

  /** criar um ticket */
  controlCenter.callService(createPaymentTicketCommand, validatedPaymentData)
    .then(() => console.log('Terminou a criação'));

  /** atualizar um ticket */
  controlCenter.callService(updatePaymentTicketCommand, validatedPaymentUpdateData)
    .then(() => console.log('Terminou a atualização'));

  /** atualizar um ticket */
  controlCenter.callService(sendMessageToQueueCommand, sendMessageData)
    .then(() => console.log('Terminou de enviar os dados para a fila'));
};

MainFunction();
