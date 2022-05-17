export class DatabaseLib {
   create(config) {
      console.log('Configs database: ', config)

      const actions = {
         connect: this.connect,
         disconnect: this.disconnect,
         execute: this.execute
      }

      return actions
   }

   async execute(query, data) {
      console.log('Executando ', query, ' para ', data)
      setTimeout(() => { }, 200)
      return 'resposta'
   }
   async connect() {
      setTimeout(() => { }, 200)
      return console.log('conectado!')
   }

   async disconnect() {
      setTimeout(() => { }, 200)
      return console.log('desconectado!')
   }
}
