import childProcess from 'child_process';
import test from 'ava';

test.cb('hind', t => {
	childProcess.execFile('./cli.js', ['--help'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === `\n  Wish 'Happy Independence Day' to India!\n  An awesome country dealing with retards.\n\n  Usage: hindd\n\n`);
		t.end();
	});
});
