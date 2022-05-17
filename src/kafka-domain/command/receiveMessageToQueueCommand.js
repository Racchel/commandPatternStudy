import Commmand from './command.js';

export class ReceiveMessageToQueueCommand extends Commmand {
  constructor(kafkaService) {
    super();
    this.kafkaService = kafkaService;
    this.commandName = 'receber mensagem da fila';
  }

  async execute(data) {
    await this.kafkaService.receiveMessage(data);
  }
}
