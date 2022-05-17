import { CreateDBConnection } from '../config/index.js'

// PaymentService
export class PaymentService {
   async createTicket(data) {
      try {
         const connection = CreateDBConnection()
         await connection.connect()

         const sqlQuery = 'INSERT INTO domain.PAYMENT (name, age, value) VALUES (:name, :age, :value)'
         const values = [data.name, data.age, data.value]

         const response = await connection.execute(sqlQuery, values)

         console.log(`Resposta da query: ${response}`)
         console.log(`Seu ticket foi criado com sucesso! ${data.name}`)

         await connection.disconnect()
      } catch (error) {
         console.error(error)
      }
   }

   async updateTicket(data) {
      try {
         const connection = CreateDBConnection()
         await connection.connect()

         const sqlQuery = 'UPDATE domain.PAYMENT SET name = :name'
         const values = [data.name]

         const response = await connection.execute(sqlQuery, values)

         console.log(`Resposta da query: ${response}`)
         console.log(`Seu ticket foi atualizado com sucesso! ${data.name}`)

         await connection.disconnect()
      } catch (error) {
         console.error(error)
      }
   }
}