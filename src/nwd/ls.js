import { readdir } from 'node:fs/promises';

export const ls = async () => {
  const content = await readdir(process.cwd(), { withFileTypes: true });

  const tableContent = [...content]
    .sort((a, b) => a.name.localeCompare(b.name))
    .reduce((res, item) => {
      if (item.isDirectory()) {
        res[0].push({ Name: item.name, Type: 'directory' });
      } else if (item.isFile()) {
        res[1].push({ Name: item.name, Type: 'file' });
      }

      return res;
    }, [[], []])

  console.table([...tableContent[0], ...tableContent[1]]);
}
