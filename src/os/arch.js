import { arch } from 'node:os';

import { stdoutWrite } from '../utils/stdout-write.js';

export const osArch = () => {
  stdoutWrite(`CPU architecture: ${arch()}`);
}
