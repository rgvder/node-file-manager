export const getUsername = () => {
  return process.argv.reduce((res, item) => {
    if (item.startsWith('--username=')) {
      res = item.split('=')[1] || 'Guest';
    }

    return res;
  }, 'Guest');
}
