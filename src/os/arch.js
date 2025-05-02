import { arch } from 'node:os';

export const osArch = () => {
  process.stdout.write(`CPU architecture: ${arch()}\n`);
}
