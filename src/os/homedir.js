import { homedir } from 'node:os';

import { stdoutWrite } from '../utils/stdout-write.js';

export const osHomedir = () => {
  stdoutWrite(`Home directory: ${homedir()}`);
}
