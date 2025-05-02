import { osCommands } from './constants/os-commands.js';
import { INVALID_COMMAND } from '../constants/info-messages.js';

export const os = (args) => {
  const command = args[0].trim().slice(2);

  if (!Object.keys(osCommands).includes(command)) {
    throw new Error(INVALID_COMMAND);
  }

  osCommands[command]();
}
