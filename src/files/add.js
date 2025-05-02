import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ERROR_CODES } from '../constants/error-code.js';

export const add = async (args) => {
  const filePath = join(process.cwd(), args[0]);

  try {
    await writeFile(filePath, '', { flag: 'wx' });
  } catch (error) {
    const errorText = error.code === ERROR_CODES.EEXIST
      ? 'File already exists'
      : 'Cannot create file';

    throw new Error(errorText);
  }
};
