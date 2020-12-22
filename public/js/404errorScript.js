console.log("ERROR - PAGE NOT FOUND (404)");
console.log("The page at the requested address was not found. If you think this is a mistake contact a system administrator.");

const socket = io();
socket.emit('test');