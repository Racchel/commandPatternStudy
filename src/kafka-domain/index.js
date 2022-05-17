import { KafkaService } from './services/index.js';

import {
  SendMessageToQueueCommand,
  ReceiveMessageToQueueCommand,
} from './command/index.js';

const kafkaService = new KafkaService();
export const sendMessageToQueueCommand = new SendMessageToQueueCommand(kafkaService);
export const receiveMessageToQueueCommand = new ReceiveMessageToQueueCommand(kafkaService);
