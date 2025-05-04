import { up } from '../nwd/up.js';
import { cd } from '../nwd/cd.js';
import { ls } from '../nwd/ls.js';
import { cat } from '../files/cat.js';
import { add } from '../files/add.js';
import { mkdir } from '../files/mkdir.js';
import { rn } from '../files/rn.js';
import { rm } from '../files/rm.js';
import { os } from '../os/os.js';
import { cp } from '../files/cp.js';
import { mv } from '../files/mv.js';
import { hash } from '../hash/hash.js';
import { compress } from '../zip/compress.js';
import { decompress } from '../zip/decompress.js';

export const commands = {
  up: [0, up],
  cd: [1, cd],
  ls: [0, ls],
  cat: [1, cat],
  add: [1, add],
  mkdir: [1, mkdir],
  rn: [2, rn],
  cp: [2, cp],
  mv: [2, mv],
  rm: [1, rm],
  os: [1, os],
  hash: [1, hash],
  compress: [2, compress],
  decompress: [2, decompress],
};

