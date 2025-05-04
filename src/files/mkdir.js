import { mkdir as nodeMkdir } from 'node:fs/promises';
import { join } from 'node:path';

import { ERROR_CODES } from '../constants/error-code.js';

export const mkdir = async (args) => {
  const dirPath = join(process.cwd(), args[0]);

  try {
    await nodeMkdir(dirPath);
  } catch (error) {
    const errorText = error.code === ERROR_CODES.EEXIST
      ? 'Directory already exists'
      : error.message;

    throw new Error(errorText);
  }
};
