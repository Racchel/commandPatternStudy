export class ControlCenter {
  async callServiceAsync(command, data) {
    console.log(`Executando serviço de: ${command.commandName}`);
    await command.execute(data);
  }

  callServiceSync(command, data) {
    console.log(`Executando serviço de: ${command.commandName}`);
    command.execute(data);
  }
}
