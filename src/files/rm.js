import { unlink } from 'node:fs/promises';
import { join } from 'node:path';

export const rm = async (args) => {
  const filePath = join(process.cwd(), args[0]);

  //TODO
  try {
    await unlink(filePath);
  } catch {
    throw new Error('Cannot delete file');
  }
};
