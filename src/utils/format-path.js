import { isAbsolute, resolve } from 'node:path';

export const formatPath = (path) => {
  return isAbsolute(path)
    ? path
    : resolve(process.cwd(), path);
}
