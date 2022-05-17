import Commmand from './command.js';

export class SendMessageToQueueCommand extends Commmand {
  constructor(kafkaService) {
    super();
    this.kafkaService = kafkaService;
    this.commandName = 'enviar mensagem para fila';
  }

  async execute(data) {
    await this.kafkaService.sendMessage(data);
  }
}
