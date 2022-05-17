export class PaymentModel {
   validate({ name, age, value }) {
      console.log('Tudo certo com os dados')
      return { name, age, value }
   }
}