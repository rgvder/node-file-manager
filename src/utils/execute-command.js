import { commands } from '../constants/commands.js';
import { isArgsCountValid } from './is-args-count-valid.js';
import { INVALID_COMMAND } from '../constants/info-messages.js';

export const executeCommand = async (input, rl) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (!command) {
    process.stdout.write(`No command, please try again\n`);
    rl.prompt();
    return;
  }

  if (!Object.keys(commands).includes(command)) {
    process.stdout.write(`${INVALID_COMMAND}\n`);
    rl.prompt();
    return;
  }

  const [ argsCount, handler ] = commands[command];

  if (!isArgsCountValid(argsCount, args.length)) {
    rl.prompt();
    return;
  }

  try {
    if (argsCount) {
      await handler(args);
    } else {
      await handler();
    }
  } catch (error) {
    process.stdout.write(`Operation failed: ${error.message}\n`);
  } finally {
    rl.prompt();
  }
};
