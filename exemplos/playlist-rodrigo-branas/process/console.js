var konsole = {
    log: function (msg) {
        process.stdout.write(msg + '\n');
    },
    error: function (msg) {
        process.stderr.write(msg + '\n');
    }
};

// $> node console.js 1> out.log
konsole.log('A');

// $> node console.js 2> out.log
konsole.error('B');

// $> node console.js 1> out.log 2> error.log

konsole.log('A TTY: ' + !!process.stdout.isTTY);
konsole.log('B TTY: ' + !!process.stdout.isTTY);