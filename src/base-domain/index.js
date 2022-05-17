export class PaymentModel {
  constructor() {
    this.message = 'Tudo certo!';
  }

  validate({ name, age, value }) {
    // TODO
    console.log(this.message);

    return {
      msg: this.successMessage,
      status: 200,
      data: { name, age, value },
    };
  }
}
