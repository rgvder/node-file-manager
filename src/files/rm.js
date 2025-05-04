import { unlink } from 'node:fs/promises';

import { formatPath } from '../utils/format-path.js';
import { ERROR_CODES } from '../constants/error-code.js';

export const rm = async (args) => {
  const filePath = formatPath(args[0]);

  try {
    await unlink(filePath);
  } catch(error) {
    const errorText = error?.code === ERROR_CODES.ENOENT
      ? `No such file: ${filePath}`
      : error.message;

    throw new Error(errorText);
  }
};
