var net = require('net');

var client = net.connect(3000);

client.on('connect', function (msg) {
    client.write("Hello, I'm the client!"); 
});

client.on('data', function (msg) {
    console.log(msg.toString()); 
});

client.on('end', function () {
    process.exit();
});

process.stdin.on('readable', function () {
    var msg = process.stdin.read();
    if (!msg) return;
    msg = msg.toString().replace(/\n/, '');
    client.write(msg);
});