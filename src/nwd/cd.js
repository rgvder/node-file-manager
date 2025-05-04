import { NO_ACCESS } from '../constants/info-messages.js';
import { ERROR_CODES } from '../constants/error-code.js';
import { formatPath } from '../utils/format-path.js';

export const cd = async (args) => {
  const path = formatPath(args[0]);

  try {
    process.chdir(path);
  } catch (error) {
    const errorText = error?.code === ERROR_CODES.ENOENT
      ? `No such directory: ${path}`
      : error?.code === ERROR_CODES.EACCES
        ? NO_ACCESS
        : error.message;

    throw new Error(errorText);
  }
};
