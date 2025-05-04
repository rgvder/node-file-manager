import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

import { ERROR_CODES } from '../constants/error-code.js';
import { NO_ACCESS } from '../constants/info-messages.js';
import { stdoutWrite } from '../utils/stdout-write.js';
import { formatPath } from '../utils/format-path.js';

export const hash = async (args) => {
  const filePath = formatPath(args[0]);

  const hash = createHash('sha256');
  const rs = createReadStream(filePath);

  return new Promise((resolve, reject) => {
    rs.on('error', (error) => {
      const errorText = error?.code === ERROR_CODES.ENOENT
        ? `No such file: ${filePath}`
        : error?.code === ERROR_CODES.EACCES
          ? NO_ACCESS
          : error.message;

      reject(new Error(errorText));
    });

    hash.on('error', (error) => {
      reject(new Error(error.message));
    });

    rs.pipe(hash);

    hash.on('finish', () => {
      stdoutWrite(`${hash.digest('hex')}`);
      resolve();
    });
  });
};
