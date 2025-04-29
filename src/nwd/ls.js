import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

//TODO check and add []
export const lsCommand = async () => {
  const content = await readdir(process.cwd());

  const tableContent = await [...content]
    .sort((a, b) => a.localeCompare(b))
    .reduce(async (res, item) => {
      const asyncRes = await res;

      const fullPath = join(process.cwd(), item);
      const statItem = await stat(fullPath);

      if (statItem.isDirectory()) {
        asyncRes[0].push({Name: item, Type: 'directory'});
      } else {
        asyncRes[1].push({Name: item, Type: 'file'});
      }

      return asyncRes;

    }, Promise.resolve([[], []]))

  console.table([...tableContent[0], ...tableContent[1]]);
}
