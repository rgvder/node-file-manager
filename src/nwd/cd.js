import { isAbsolute, resolve, dirname } from 'node:path';

import { NO_ACCESS, ROOT_DIRECTORY } from '../constants/info-messages.js';
import { ERROR_CODES } from '../constants/error-code.js';

export const cd = async (args) => {
  const path = args[0].trim();

  const currentPath = isAbsolute(path)
    ? path
    : resolve(process.cwd(), path);

  //TODO
  if (dirname(currentPath) === currentPath) {
    throw new Error(ROOT_DIRECTORY);
  }

  try {
    process.chdir(currentPath);
  } catch (error) {
    const errorText = error?.code === ERROR_CODES.ENOENT
      ? `No such directory: ${currentPath}`
      : error?.code === ERROR_CODES.EACCES
        ? NO_ACCESS
        : `Cannot change directory to ${currentPath}`;

    throw new Error(errorText);
  }
};
