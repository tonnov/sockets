var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    
    console.log('La conexion con el servidor se perdió');

});


//Enviar informacion

socket.emit('enviarMensaje', {
    usuario: 'Tono',
    mensaje: 'Online'
}, function(resp){
    console.log('Server response', resp);
    
});


//Escuchar informacion

socket.on('enviarMensaje', function(mensaje){
    console.log('info del servidor', mensaje);
    document.getElementById("msg").innerHTML = JSON.stringify(mensaje);
    
});