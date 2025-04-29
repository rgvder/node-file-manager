export const showCurrentDir = () => {
  process.stdout.write(`You are currently in ${process.cwd()}\n`);
};
