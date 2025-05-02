import { createReadStream } from 'node:fs';
import { join } from 'node:path';

import { NO_ACCESS } from '../constants/info-messages.js';
import { ERROR_CODES } from '../constants/error-code.js';

export const cat = (args) => {
  const filePath = join(process.cwd(), args[0]);
  const rs = createReadStream(filePath);

  rs.on('error', (error) => {
    const errorText = error?.code === ERROR_CODES.ENOENT
      ? `No such file: ${filePath}`
      : error?.code === ERROR_CODES.EACCES
        ? NO_ACCESS
        : `Cannot read file: ${filePath}`;

    throw new Error(errorText);
  })

  rs.pipe(process.stdout);

  //TODO
  rs.on('end', () => {
    process.stdout.write('\n');
  });
};
