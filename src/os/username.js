import { userInfo } from 'node:os';

export const osUsername = () => {
  const name = userInfo().username;

  process.stdout.write(`System user name: ${name}\n`);
}
