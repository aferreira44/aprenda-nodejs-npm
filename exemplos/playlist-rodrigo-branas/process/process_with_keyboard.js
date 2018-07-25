var help = require('./help');
var keyboard = require('./keyboard');

keyboard.onReadable(function (option) {
    switch (option) {
        case 'a':
            console.log('pid: ' + process.pid);
            break;
        case 'b':
            console.log('title: ' + process.title);
            break;
        case 'c':
            console.log('arch: ' + process.arch);
            break;
        case 'd':
            console.log('plataform: ' + process.plataform);
            break;
        case 'e':
            console.log(process.env);
            break;
        case 'q':
            process.exit();
            break;
        case 'm':
            console.log(process.memoryUsage());
            break;
        case 'u':
            console.log(process.uptime());
            break;
        case 'v':
            console.log(process.versions);
            break;
        default:
            help.showOptions();
    }
});

process.on('exit', function () {
    console.log('bye');
});

process.on('uncaughtException', function () {
    console.log('error');
});

a.b();