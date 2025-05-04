import { userInfo } from 'node:os';

import { stdoutWrite } from '../utils/stdout-write.js';

export const osUsername = () => {
  stdoutWrite(`System user name: ${userInfo().username}`);
}
