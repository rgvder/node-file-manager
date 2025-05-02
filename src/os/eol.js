import { EOL } from 'node:os';

export const osEol = () => {
  process.stdout.write(`Default system End-Of-Line: ${JSON.stringify(EOL)}\n`);
}
