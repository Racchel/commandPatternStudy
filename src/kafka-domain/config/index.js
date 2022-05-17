import { KafkaLib } from '../../node-modules/kafka-lib/index.js'

export const CreateKafkaConnection = () => {
   const config = {
      user: '',
      password: ''
   }

   const conn = new KafkaLib()
   return conn.create(config)
}