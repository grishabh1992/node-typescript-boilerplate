const io = require('socket.io')();
export const Socket: any = {};
export const socketInit = (server) => {
    Socket.io = io.listen(server, {
        log: true
    });
    Socket.io.use(function (socket, next) {
        console.log(socket.handshake.query, 'socket.handshake.query');
        if (socket.handshake.query && socket.handshake.query.token) {
            // Authentiation code should be here
            next();
        }
        else {
            next(new Error('Authentication error'));
        }
    })
    Socket.io.on('connect', socket => {
        console.log('Client Connectted');
        socket.send('Hello!');
    });

    Socket.io.on('join', socket => {
        console.log('Client Connectted');
        socket.send('Hello!');
    });
}

