import { cp } from './cp.js';
import { rm } from './rm.js';

export const mv = async (args) => {
  try {
    await cp(args);
    await rm(args);
  } catch (error) {
    throw new Error(error.message);
  }
};
