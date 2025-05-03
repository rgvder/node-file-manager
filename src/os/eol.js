import { EOL } from 'node:os';

import { stdoutWrite } from '../utils/stdout-write.js';

export const osEol = () => {
  stdoutWrite(`Default system End-Of-Line: ${JSON.stringify(EOL)}`);
}
