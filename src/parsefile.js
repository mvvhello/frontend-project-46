import { readFileSync } from 'node:fs';
import path from 'path';

const parseFile = (filepath) => {
  const extension = path.extname(resolvedPath);
  const fileContent = readFileSync(resolvedPath, 'utf-8');
  if (extension === '.json') {
    return JSON.parse(fileContent);
  }
  return fileContent;
};

export default parseFile;
