'use strict';
var fs = require('fs');
var net = require('net');
var port = 3000;

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log(data.toString());

    fs.writeFile((Date().toString()), data, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
    });

  });

  socket.on('end', function() {
    console.log('end connection');
  });
});

server.listen(port, function() {
  console.log('server running on port ' + port)
});






