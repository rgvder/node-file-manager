import { homedir } from 'node:os';
import readline from 'node:readline';

import { getUsername } from './utils/get-username.js';
import { showCurrentDir } from './utils/show-current-dir.js';
import { executeCommand } from './utils/execute-command.js';

const name = getUsername();

process.chdir(homedir());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const exit = () => {
  showCurrentDir();
  console.log(`Thank you for using File Manager, ${name}, goodbye!`);
  rl.close();
  process.exit(0);
};

console.log(`Welcome to the File Manager, ${name}!`);
showCurrentDir();
rl.prompt();

rl.on('line', async (input) => {
  await executeCommand(input.trim(), rl);
  showCurrentDir();
  //TODO
  rl.prompt();
});

rl.on('SIGINT', exit);
process.on('SIGINT', exit);
