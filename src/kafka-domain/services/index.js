import { CreateKafkaConnection } from '../config/index.js';

export class KafkaService {
  constructor() {
    this.successMessage = 'Tudo certo!';
    this.failureMessage = 'Temos um erro :(';
  }

  async sendMessage(data) {
    try {
      const kafka = CreateKafkaConnection();
      const producer = kafka.producer();
      await producer.connect();
      await producer.send(data.message, data.topic);
      await producer.disconnect();
      return {
        msg: this.successMessage,
        status: 200,
      };
    } catch (error) {
      console.error(error);

      return {
        msg: this.failureMessage,
        status: 400,
      };
    }
  }

  async receiveMessage(data) {
    try {
      const kafka = CreateKafkaConnection();
      const consumer = kafka.consumer();
      await consumer.connect();
      await consumer.consume(data.topic);
      await consumer.disconnect();

      return {
        msg: this.message,
        status: 200,
      };
    } catch (error) {
      console.error(error);

      return {
        msg: this.failureMessage,
        status: 400,
      };
    }
  }
}
