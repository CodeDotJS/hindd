#!/usr/bin/env node

'use strict';

const logUpdate = require('log-update');
const chalk = require('chalk');

const arg = process.argv[2];

const frames = [`
${chalk.bold.cyan('  ╦ ╦╔═╗╔═╗╔═╗╦ ╦  ╦╔╗╔╔╦╗╔═╗╔═╗╔═╗╔╗╔╔╦╗╔═╗╔╗╔╔═╗╔═╗  ╔╦╗╔═╗╦ ╦')}
${chalk.bold.blue('  ╠═╣╠═╣╠═╝╠═╝╚╦╝  ║║║║ ║║║╣ ╠═╝║╣ ║║║ ║║║╣ ║║║║  ║╣    ║║╠═╣╚╦╝')}
${chalk.bold.green('  ╩ ╩╩ ╩╩  ╩   ╩   ╩╝╚╝═╩╝╚═╝╩  ╚═╝╝╚╝═╩╝╚═╝╝╚╝╚═╝╚═╝  ═╩╝╩ ╩ ╩')}
   `,
	`
${chalk.bold.yellow('  ╦ ╦╔═╗╔═╗╔═╗╦ ╦  ╦╔╗╔╔╦╗╔═╗╔═╗╔═╗╔╗╔╔╦╗╔═╗╔╗╔╔═╗╔═╗  ╔╦╗╔═╗╦ ╦')}
${chalk.bold.magenta('  ╠═╣╠═╣╠═╝╠═╝╚╦╝  ║║║║ ║║║╣ ╠═╝║╣ ║║║ ║║║╣ ║║║║  ║╣    ║║╠═╣╚╦╝')}
${chalk.bold.red('  ╩ ╩╩ ╩╩  ╩   ╩   ╩╝╚╝═╩╝╚═╝╩  ╚═╝╝╚╝═╩╝╚═╝╝╚╝╚═╝╚═╝  ═╩╝╩ ╩ ╩')}
   `,
	`
${chalk.bold.blue('  ╦ ╦╔═╗╔═╗╔═╗╦ ╦  ╦╔╗╔╔╦╗╔═╗╔═╗╔═╗╔╗╔╔╦╗╔═╗╔╗╔╔═╗╔═╗  ╔╦╗╔═╗╦ ╦')}
${chalk.bold.yellow('  ╠═╣╠═╣╠═╝╠═╝╚╦╝  ║║║║ ║║║╣ ╠═╝║╣ ║║║ ║║║╣ ║║║║  ║╣    ║║╠═╣╚╦╝')}
${chalk.bold.white('  ╩ ╩╩ ╩╩  ╩   ╩   ╩╝╚╝═╩╝╚═╝╩  ╚═╝╝╚╝═╩╝╚═╝╝╚╝╚═╝╚═╝  ═╩╝╩ ╩ ╩')}
   `
];

if (arg === '-h' || arg === '--help') {
	console.log(`
  Wish 'Happy Independence Day' to India!
  An awesome country dealing with retards.

  ${chalk.cyan('Usage:')} hindd
`);
} else {
	let i = 0;

	setInterval(() => {
		const frame = frames[i = ++i % frames.length];

		logUpdate(
			`
   ${frame}
`
		);
	}, 120);

	setTimeout(() => {
		logUpdate(`

${chalk.bold.red('  ╦  ╔═╗  ╦    ╦ ╦  ╦  ╔╗╔  ╔╦╗  ┬')}
${chalk.bold.white('  ║  ╠═╣  ║    ╠═╣  ║  ║║║   ║║  │')}
${chalk.bold.green(' ╚╝  ╩ ╩  ╩    ╩ ╩  ╩  ╝╚╝  ═╩╝  o')}

`);
		process.exit(1);
	}, 5000);
}
