#!/usr/bin/env node

import { program } from 'commander';
import path from 'path';
import parseFile from '../src/parsefile.js';
import findDiff from '../src/finddif.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    const resolvedPathOne = path.resolve(process.cwd(), filepath1);
    const resolvedPathTwo = path.resolve(process.cwd(), filepath2);

    const data1 = parseFile(resolvedPathOne);
    const data2 = parseFile(resolvedPathTwo);

    console.log(findDiff(data1, data2));
  });

program.parse(process.argv);
