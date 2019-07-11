
const { io } = require('../server');

io.on('connection', (client) => {
    
    console.log('Usuario conectado');

    // Enviar Mensaje al cliente
    client.emit('enviarMensaje',{
        usuario: 'Admin',
        mensaje: 'Bienvenido a la app'
    });

    client.on('disconnect', () => {
        
        console.log('Usuario desconectado');
        
    });

    // Escuchar cliente
    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        if (mensaje.usuario) {
            callback({
                resp: 'Connected Ok'
            });
        } else {
            callback({
                resp: 'Connection Failed'
            });
        }
    });
    
});