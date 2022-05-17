import Commmand from './command.js';

export class UpdatePaymentTicketCommand extends Commmand {
  constructor(paymentService) {
    super();
    this.paymentService = paymentService;
    this.commandName = 'atualizar ticket de pagamento';
  }

  async execute(data) {
    await this.paymentService.updateTicket(data);
  }
}
