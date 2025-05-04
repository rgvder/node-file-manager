import { osEol } from '../eol.js';
import { osCpus } from '../cpus.js';
import { osHomedir } from '../homedir.js';
import { osUsername } from '../username.js';
import { osArch } from '../arch.js';

export const osCommands = {
  EOL: osEol,
  cpus: osCpus,
  homedir: osHomedir,
  username: osUsername,
  architecture: osArch,
}
