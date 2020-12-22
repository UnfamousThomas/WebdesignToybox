function registerSockets(io) {

    io.sockets.on('connection', function(socket){


    });


    console.log("Sockets registered.")

}



module.exports = {
    registerSockets: registerSockets
};