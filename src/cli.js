import path from 'path';
import { promises as fs } from 'fs';

import CommandHelper from './helpers/commandHelper';
import ArrayHelper from './helpers/arrayHelper';
import { OutputHelper, Tags } from './helpers/outputHelper';

export async function cli() {
  const argv = CommandHelper.argv;

  const rootPath = path.normalize(argv._[0]);
  const pkgOutput = path.normalize(path.join(rootPath, argv._[1]));

  let packageFile;

  try {
    packageFile = await fs.readFile(path.join(rootPath, 'package.json'), 'utf-8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      OutputHelper.print(Tags.ERROR, `project does not exists or path is wrong`);
      process.exit(1);
    }

    OutputHelper.print(Tags.ERROR, `something went wrong`, error);
    process.exit(1);
  }

  const version = JSON.parse(packageFile).version;

  const files = await fs.readdir(pkgOutput);

  for (const filename of files) {
    let filenameWithArch;

    if (filename.includes('.')) {
      const filenameArray = filename.split('.');
      const ext = filenameArray.pop();
      filenameWithArch = `${filenameArray.splice(-1, 1)}-${argv.arch}.${ext}`;
    } else {
      filenameWithArch = `${filename}-${argv.arch}`;
    }

    const newFilename = ArrayHelper.insertAt(
      filenameWithArch.split('-'),
      2,
      version
    ).join('-');

    try {
      await fs.rename(path.join(pkgOutput, filename), path.join(pkgOutput, newFilename));
    } catch (error) {
      OutputHelper.print(Tags.ERROR, `impossible to rename file: ${filename}`, error);
      process.exit(1);
    }
  }

  process.exit(0);
}
