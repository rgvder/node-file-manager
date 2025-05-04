import { commands } from '../constants/commands.js';
import { isArgsCountValid } from './is-args-count-valid.js';
import { INVALID_COMMAND } from '../constants/info-messages.js';
import { stdoutWrite } from './stdout-write.js';

export const executeCommand = async (input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (!command) {
    stdoutWrite(`No command, please try again`);
    return;
  }

  if (!Object.keys(commands).includes(command)) {
    stdoutWrite(INVALID_COMMAND);
    return;
  }

  const [ argsCount, handler ] = commands[command];

  if (!isArgsCountValid(argsCount, args.length)) {
    return;
  }

  try {
    if (argsCount) {
      await handler(args);
    } else {
      await handler();
    }
  } catch (error) {
    stdoutWrite(`Operation failed: ${error.message}`);
  }
};
