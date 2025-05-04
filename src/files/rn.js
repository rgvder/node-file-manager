import { rename as nodeRename } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';

import { ERROR_CODES } from '../constants/error-code.js';
import { formatPath } from '../utils/format-path.js';

export const rn = async (args) => {
  const oldFilePath = formatPath(args[0]);
  const newFilePath = join(dirname(oldFilePath), args[1]);

  if (existsSync(newFilePath)) {
    throw new Error(`File already exists: ${newFilePath}`);
  }

  try {
    await nodeRename(oldFilePath, newFilePath);
  } catch (error) {
    const errorText = error?.code === ERROR_CODES.ENOENT
      ? `No such file: ${oldFilePath}`
      : error.message;

    throw new Error(errorText);
  }
};
