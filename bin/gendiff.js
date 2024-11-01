#!/usr/bin/env node

import { program } from 'commander';
import parseFile from '../src/parsefile.js';
import path from 'path';

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
  });

program.parse(process.argv);
