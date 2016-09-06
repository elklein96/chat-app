var app = require('../app');

exports.index = function(req, res) {
	var io = require('socket.io').listen(app.server);

	io.sockets.on('connection', function (socket) {
		socket.on('message', function (data) {
	     	socket.emit('message', data);
	    });
	});
	res.render('index');
};