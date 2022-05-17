import Commmand from './command.js';

export class SendPaymentCommand extends Commmand {
  constructor(peopleService) {
    super();
    this.peopleService = peopleService;
    this.commandName = 'enviar pagamento para o PeopleAP';
  }

  async execute(data) {
    await this.peopleService.sendPayment(data);
  }
}
