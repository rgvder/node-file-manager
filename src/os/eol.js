import { EOL } from 'node:os';

export const osEolCommand = () => {
  process.stdout.write(`${JSON.stringify(EOL)}\n`);
}
