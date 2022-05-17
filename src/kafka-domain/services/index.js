import { CreateKafkaConnection } from '../config/index.js'

export class KafkaService {
   async sendMessage(data) {
      try {
         const kafka = CreateKafkaConnection()
         const producer = kafka.producer()
         await producer.connect()
         await producer.send(data.message, data.topic)
         await producer.disconnect()
      } catch (error) {
         console.error(error)
      }
   }

   async receiveMessage(data) {
      try {
         const kafka = CreateKafkaConnection()
         const consumer = kafka.consumer()
         await consumer.connect()
         await consumer.consume(data.topic)
         await consumer.disconnect()
      } catch (error) {
         console.error(error)
      }
   }
}