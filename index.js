import { MainFunction } from './src/app/index.js';

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

await MainFunction({ paymentData, paymentDataUpdate, sendMessageData });
