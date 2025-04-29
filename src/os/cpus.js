import {cpus} from 'node:os';

export const osCpusCommand = () => {
  process.stdout.write(JSON.stringify(cpus()));
  console.log(cpus());
}
