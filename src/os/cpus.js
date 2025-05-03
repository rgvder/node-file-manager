import {cpus} from 'node:os';
import {stdoutWrite} from '../utils/stdout-write.js';

export const osCpus = () => {
  const content = cpus().map(({ model, speed }) => (
    {
      Model: model,
      'Clock rate (in GHz)': speed / 1000,
    }
  ))

  stdoutWrite(`Amount of CPUS: ${cpus().length}`);
  console.table(content);
}
