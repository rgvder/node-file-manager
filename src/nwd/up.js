import { dirname } from 'node:path';
import {homedir} from 'os';

//TODO
//User can't go upper than root directory (e.g. on Windows it's current local drive root).
// If user tries to do so, current working directory doesn't change

export const upCommand = (argsLen) => {
  if (argsLen) {
    process.stdout.write('Error: Unexpected arguments\n');
    return;
  }

  if (process.cwd() === homedir()) return;

  try {
    process.chdir(dirname(process.cwd()));
  } catch {
    process.stdout.write(`Operation failed: Cannot move up from ${process.cwd()}\n`);
  }
}
