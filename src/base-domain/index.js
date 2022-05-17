export class PaymentModel {
  constructor() {
    this.message = 'Tudo certo!';
  }

  validate({ name, age, value }) {
    // TODO
    console.log(this.message);

    return { name, age, value };
  }
}
