import { createBrotliCompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

import { ERROR_CODES } from '../constants/error-code.js';
import { NO_ACCESS, NO_PATH } from '../constants/info-messages.js';
import { formatPath } from '../utils/format-path.js';

export const compress = async (args) => {
  const sourcePath = formatPath(args[0]);
  const destinationPath = formatPath(args[1]);

  const brotli = createBrotliCompress();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  try {
    await pipeline(source, brotli, destination);
  } catch (error) {
    const errorText =
      error.code === ERROR_CODES.ENOENT
        ? NO_PATH
        : error.code === ERROR_CODES.EACCES
          ? NO_ACCESS
          : error.message;

    throw new Error(errorText);
  }
};

