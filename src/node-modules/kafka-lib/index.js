export class KafkaLib {
   create(config) {
      console.log('Configs kafka: ', config)

      const actions = {
         producer: this.producer,
         consumer: this.consumer
      }

      return actions
   }

   producer() {
      setTimeout(() => { }, 200)
      console.log('producer criado!')
      return {
         send: async (message, topic) => {
            console.log('Enviando ', message, ' para tópico: ', topic)
            setTimeout(() => { }, 200)
            return
         },
         connect: async () => {
            setTimeout(() => { }, 200)
            return console.log('Produtor conectado!')
         },
         disconnect: async () => {
            setTimeout(() => { }, 200)
            return console.log('Produtor desconectado!')
         }
      }
   }

   consumer() {
      setTimeout(() => { }, 200)
      console.log('consumer criado!')

      return {
         consume: async (topic) => {
            console.log('Consumindo mensagens do tópico: ', topic)
            setTimeout(() => { }, 200)
            return 'mensagem consumida: mensagem'
         },
         connect: async () => {
            setTimeout(() => { }, 200)
            return console.log('Consumidor conectado!')
         },
         disconnect: async () => {
            setTimeout(() => { }, 200)
            return console.log('Consumidor desconectado!')
         }
      }
   }
}
