export const getUsername = () => {
  const args = process.argv.slice(2);

  return args.reduce((res, item) => {
    if (item.startsWith('--username=')) {
      res = item.split('=')[1];
    }

    return res;
  }, '');
}
