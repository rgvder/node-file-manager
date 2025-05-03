import { homedir } from 'node:os';
import readline from 'node:readline';

import { getUsername } from './utils/get-username.js';
import { executeCommand } from './utils/execute-command.js';
import {stdoutWrite} from './utils/stdout-write.js';

const name = getUsername();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const exit = () => {
  stdoutWrite(`\nThank you for using File Manager, ${name}, goodbye!`);
  rl.close();
};

const writeLine = () => {
  stdoutWrite(`You are currently in ${process.cwd()}`);
  rl.prompt();
};

process.chdir(homedir());
stdoutWrite(`Welcome to the File Manager, ${name}!\n`);
writeLine();

rl.on('line', async (input) => {
  if (input.trim() === '.exit') {
    exit();
    return;
  }

  await executeCommand(input, rl);
  writeLine();
});

rl.on('SIGINT', exit);
