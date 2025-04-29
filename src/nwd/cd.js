import {isAbsolute, resolve} from 'node:path';
import {access} from 'fs/promises';
import {constants} from 'fs';

export const cdCommand = async (args) => {
  console.log('process.cwd()', process.cwd());

  if (!args.length) {
    process.stdout.write('Error: No path for cd\n');
  } else if (args.length > 1) {
    process.stdout.write('Error: Invalid path for cd\n');
  } else {
    let targetPath = args.join(' ').trim();

    console.log('targetPath', targetPath);

    if (!isAbsolute(targetPath)) {
      targetPath = resolve(process.cwd(), targetPath);
    }
    try {
      await access(targetPath, constants.R_OK);
      process.chdir(targetPath);
    } catch (error) {
      const errorText = error?.code === 'ENOENT'
        ? `No such directory: ${targetPath}`
        : error?.code === 'EACCES'
          ? `No access`
          : `Cannot change directory to ${targetPath}`;

      process.stdout.write(`Operation failed: ${errorText}\n`);
    }
  }
};
