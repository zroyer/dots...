const process = require('process');
const readline = require('readline');
const chalk = require('chalk');
const std = process.stdout;

class Spinner {
  spin() {
    std.write('\x1B[?25l');
    const spinners = [
      'o    ',
      'oo   ',
      'ooo  ',
      'oooo ',
      'ooooo',
      ' oooo',
      '  ooo',
      '   oo',
      '    o',
      '     ',
    ];
    let index = 0;

    setInterval(() => {
      let line = spinners[index];

      if (!line) {
        index = 0;
        line = spinners[index];
      }

      std.write(chalk.magenta(line));
      readline.cursorTo(std, 0);
      index = index >= spinners.length ? 0 : index + 1;
    }, 350);
  }
}

new Spinner().spin();
