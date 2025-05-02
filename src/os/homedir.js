import { homedir } from 'node:os';

export const osHomedir = () => {
  process.stdout.write(`Home directory: ${homedir()}\n`);
}
