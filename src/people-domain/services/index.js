// import axios from 'axios';
// import { config } from '../config/index.js';
import { fillTemplate } from '../utils/fillTemplate.js';

export class PeopleService {
  constructor() {
    this.successMessage = 'Tudo certo!';
    this.failureMessage = 'Temos um erro :(';
  }

  async sendPayment(data) {
    try {
      // const response = await axios.post(config.url, data);
      console.log('Enviando dados para PeopleAP', data);

      return {
        data: 'Dados enviados!',
      };
    } catch (error) {
      console.error(error);

      return {
        msg: this.failureMessage,
        status: 400,
      };
    }
  }

  fillTemplate(data) {
    try {
      const template = fillTemplate(data);
      console.log('Dados preenchidos:', template);

      return {
        data: template,
      };
    } catch (error) {
      console.error(error);

      return {
        msg: this.failureMessage,
        status: 400,
      };
    }
  }
}
