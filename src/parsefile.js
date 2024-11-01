import { readFileSync } from 'node:fs';
import path from 'path';

const parseFile = (filepath) => {
  const extension = path.extname(filepath);
  const fileContent = readFileSync(filepath, 'utf-8');
  if (extension === '.json') {
    return JSON.parse(fileContent);
  }
  return fileContent;
};

export default parseFile;
