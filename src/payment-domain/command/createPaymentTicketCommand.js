import Commmand from './command.js';

export class CreatePaymentTicketCommand extends Commmand {
  constructor(paymentService) {
    super();
    this.paymentService = paymentService;
    this.commandName = 'criar ticket de pagamento';
  }

  async execute(data) {
    await this.paymentService.createTicket(data);
  }
}
