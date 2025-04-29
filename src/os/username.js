import { userInfo } from 'node:os';

export const osUsernameCommand = () => {
  const name = userInfo().username;

  process.stdout.write(`${name}\n`);
}
