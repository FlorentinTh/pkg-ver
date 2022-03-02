import chalk from 'chalk';

export const Tags = {
  INFO: 'info',
  ERROR: 'error',
  OK: 'ok',
  WARN: 'warn'
};

export class OutputHelper {
  static print(tag, message, error = null) {
    if (!(Object.prototype.toString.call(message) === '[object String]')) {
      this.printError(Tags.ERROR, `Error message must be a string`);
      process.exit(1);
    }

    let errorMsg = '';

    if (!(error === null)) {
      errorMsg = `Reason: ${error}`;
    }

    switch (tag) {
      case Tags.INFO:
        tag = chalk.cyan(tag);
        break;
      case Tags.ERROR:
        tag = chalk.red(tag);
        break;
      case Tags.OK:
        tag = chalk.greenBright(tag);
        break;
      case Tags.WARN:
        tag = chalk.yellowBright(tag);
        break;
      default:
        break;
    }

    console.log(
      chalk.grey('\n['),
      tag,
      chalk.grey(']'),
      chalk.white(`: ${message}. ${errorMsg}\n`)
    );
  }
}
