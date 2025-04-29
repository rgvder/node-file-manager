import { homedir } from 'os';

import { getUsername } from './utils/get-username.js';
import {upCommand} from './nwd/up.js';
import {cdCommand} from './nwd/cd.js';
import {showCurrentDir} from './utils/show-current-dir.js';
import {lsCommand} from './nwd/ls.js';
import {osEolCommand} from './os/eol.js';
import {osCpusCommand} from './os/cpus.js';
import {osUsernameCommand} from './os/username.js';

const name = getUsername();

process.chdir(homedir());

const exit = () => {
  showCurrentDir();
  process.stdout.write(`Thank you for using File Manager, ${name}, goodbye!\n`);
  process.exit(0);
}

process.stdout.write(`Welcome to the File Manager, ${name}!\n`);
showCurrentDir();

process.stdin.setEncoding('utf-8');

process.stdin.on('data', async(input) => {
  const [command, ...args] = input.trim().split(' ');

  console.log('args:', args);

  //TODO: add args error handlers

  switch (true) {
    case command === 'up': {
      upCommand(args.length);
      break;
    }
    case command === 'cd': {
      await cdCommand(args);
      break;
    }
    case command === 'ls': {
      await lsCommand();
      break;
    }

    case command === 'os' && args.length === 1 && args[0] === '--EOL': {
      await osEolCommand();
      break;
    }
    case command === 'os' && args.length === 1 && args[0] === '--cpus': {
      await osCpusCommand();
      break;
    }
    case command === 'os' && args.length === 1 && args[0] === '--username': {
      await osUsernameCommand();
      break;
    }
    case command === '.exit' && !args.length: {
      exit();
      break;
    }

    default: {
      process.stdout.write(`Invalid command: ${command}, please try again\n`);
    }
  }

  showCurrentDir();
});

process.on('SIGINT', () => {
  exit();
});

