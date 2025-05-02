import {cpus} from 'node:os';

//TODO: доделать
export const osCpus = () => {
  process.stdout.write(JSON.stringify(cpus()));
  console.log(cpus());
}
