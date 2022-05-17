// PaymentCommands
class Commmand {
   execute() { }
}

export class CreatePaymentTicketCommand extends Commmand {
   constructor(paymentService) {
      super()
      this.paymentService = paymentService
      this.commandName = 'criar ticket de pagamento'
   }

   async execute(data) {
      await this.paymentService.createTicket(data)
   }
}

export class UpdatePaymentTicketCommand extends Commmand {
   constructor(paymentService) {
      super()
      this.paymentService = paymentService
      this.commandName = 'atualizar ticket de pagamento'
   }

   async execute(data) {
      await this.paymentService.updateTicket(data)
   }
}