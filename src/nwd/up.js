import { dirname } from 'node:path';

export const up = () => {
  const currentDir = process.cwd();
  const parentDir = dirname(currentDir);

  if (parentDir === currentDir) {
    return;
  }

  try {
    process.chdir(parentDir);
  } catch {
    throw new Error(`Cannot move up from ${currentDir}`);
  }
};
