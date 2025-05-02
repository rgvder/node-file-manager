import { rename as nodeRename } from 'node:fs/promises';
import { join } from 'node:path';
import { existsSync } from 'node:fs';

import { ERROR_CODES } from '../constants/error-code.js';

export const rn = async (args) => {
  const oldFilePath = join(process.cwd(), args[0]);
  const newFilePath = join(process.cwd(), args[1]);

  if (existsSync(newFilePath)) {
    throw new Error(`File already exists: ${newFilePath}`);
  }

  try {
    await nodeRename(oldFilePath, newFilePath);
  } catch (error) {
    const errorText = error?.code === ERROR_CODES.ENOENT
      ? `No such file: ${oldFilePath}`
      : `Cannot rename file: ${oldFilePath}`;

    throw new Error(errorText);
  }
};
