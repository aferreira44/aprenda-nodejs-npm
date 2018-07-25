var net = require('net');

var connections = [];

var broadcast = function (msg, origin) {
    connections.forEach(function (conn) {
        if (conn === origin) return;
        conn.write(msg);
    });
};

net.createServer(function (conn) {
    connections.push(conn);
    conn.write("Hello, I'm the server!");

    conn.on('data', function (msg) {
        var command = msg.toString();
        if (command.indexOf('/nickname', 0) === 0){
            var nickname = command.replace('/nickname ', '');
            broadcast(conn.nickname + ' is now ' + nickname);
            conn.nickname = nickname;
            return;
        }
        broadcast(conn.nickname + ' > ' + msg, conn);
    });

    conn.on('end', function () {
        broadcast(conn.nickname + ' has left!', conn);
        connections.splice(connections.indexOf(conn), 1);
    })
}).listen(3000);