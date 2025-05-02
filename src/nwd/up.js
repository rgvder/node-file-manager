import { dirname } from 'node:path';
import { ROOT_DIRECTORY } from '../constants/info-messages.js';

export const up = () => {
  const currentDir = process.cwd();
  const parentDir = dirname(currentDir);

  if (parentDir === currentDir) {
    throw new Error(ROOT_DIRECTORY);
  }

  try {
    process.chdir(parentDir);
  } catch {
    throw new Error(`Cannot move up from ${currentDir}`);
  }
};
