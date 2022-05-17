import { PeopleService } from './services/index.js';

import {
  FillTemplateCommand,
  SendPaymentCommand,
} from './command/index.js';

const peopleService = new PeopleService();
export const fillTemplateCommand = new FillTemplateCommand(peopleService);
export const sendPaymentCommand = new SendPaymentCommand(peopleService);
