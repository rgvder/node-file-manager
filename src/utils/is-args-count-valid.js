export const isArgsCountValid = (expectedCount, argsCount) => {
  if (expectedCount !== argsCount) {
    let text = 'No arguments expected';

    if (expectedCount) {
      text = `Expected ${expectedCount} argument${expectedCount > 1 ? 's': ''}`;
    }

    process.stdout.write(`Args error: ${text}, but got ${argsCount}\n`);
    return false;
  }

  return true;
};
