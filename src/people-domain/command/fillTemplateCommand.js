import Commmand from './command.js';

export class FillTemplateCommand extends Commmand {
  constructor(peopleService) {
    super();
    this.peopleService = peopleService;
    this.commandName = 'preencher xml com dados do pagamento';
  }

  execute(data) {
    this.peopleService.fillTemplate(data);
  }
}
