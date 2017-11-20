var config = require('./config.json')
var socket = require('socket.io-client')(config.serverSocket,{query:'name='+config.name});
socket.on('connect', function(){
  console.log(config.name, 'connected')
});
socket.on('disconnect', function(){
  console.log(config.name, 'disconnected')
});
