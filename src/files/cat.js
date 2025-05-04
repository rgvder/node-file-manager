import { createReadStream } from 'node:fs';

import { NO_ACCESS } from '../constants/info-messages.js';
import { ERROR_CODES } from '../constants/error-code.js';
import { formatPath } from '../utils/format-path.js';

export const cat = async (args) => {
  const filePath = formatPath(args[0]);

  return new Promise((resolve, reject) => {
    const rs = createReadStream(filePath);

    rs.on('error', (error) => {
      const errorText = error?.code === ERROR_CODES.ENOENT
        ? `No such file: ${filePath}`
        : error?.code === ERROR_CODES.EACCES
          ? NO_ACCESS
          : error.message;

      reject(new Error(errorText));
    });

    rs.on('end', () => {
      resolve();
    });

    rs.pipe(process.stdout);
  });
};
