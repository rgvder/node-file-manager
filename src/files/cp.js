import { createReadStream, createWriteStream } from 'node:fs';
import { join, basename } from 'node:path';
import { existsSync } from 'node:fs';
import { pipeline } from 'node:stream/promises';

import { formatPath } from '../utils/format-path.js';

export const cp = async (args) => {
  const filePath = formatPath(args[0]);
  const dirFilePath = formatPath(args[1]);

  if (!existsSync(filePath)) {
    throw new Error(`Cannot find file: ${filePath}`);
  }

  if (!existsSync(dirFilePath)) {
    throw new Error(`Cannot find directory: ${dirFilePath}`);
  }

  const newFilePath = join(dirFilePath, basename(filePath));

  if (existsSync(newFilePath)) {
    throw new Error(`File already exists: ${newFilePath}`);
  }

  try {
    const rs = createReadStream(filePath);
    const ws = createWriteStream(newFilePath);

    await pipeline(rs,ws);
  } catch (error) {
    throw new Error(error.message);
  }
};
