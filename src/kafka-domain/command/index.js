class Commmand {
   execute() { }
}

export class SendMessageToQueueCommand extends Commmand {
   constructor(kafkaService) {
      super()
      this.kafkaService = kafkaService
      this.commandName = 'enviar mensagem para fila'
   }

   async execute(data) {
      await this.kafkaService.sendMessage(data)
   }
}

export class ReceiveMessageToQueueCommand extends Commmand {
   constructor(kafkaService) {
      super()
      this.kafkaService = kafkaService
      this.commandName = 'receber mensagem da fila'
   }

   async execute(data) {
      await this.kafkaService.receiveMessage(data)
   }
}