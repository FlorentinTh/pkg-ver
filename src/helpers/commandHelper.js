import yargs from 'yargs';

class CommandHelper {
  static get argv() {
    return yargs
      .usage(
        `
Usage:
  $ pkg-ver <rootPath> <pkgOutput> [options]

  - <rootPath> is the path of the root directory of the project

  - <pkgOutput> is the name of the subfolder of the project
                root directory that contains executable created by pkg`
      )
      .example(
        `- Version executables of myproject that are created by
          vercel/pkg inside dist subfolder :

        $ pkg-ver $HOME/projects/myproject dist

        - Version executables of myproject that are created by
          vercel/pkg inside dist subfolder for another architecture than
          the one currently used (i.e. arm64):

        $ pkg-ver $HOME/projects/myproject dist --arch "arm64"
      `
      )
      .option('arch', {
        alias: 'a',
        describe: `precise another architecture than the current one`,
        type: 'string',
        demandOption: false,
        default: process.arch
      })
      .help('h')
      .alias('h', 'help')
      .alias('v', 'version')
      .demandCommand(2).argv;
  }
}

export default CommandHelper;
