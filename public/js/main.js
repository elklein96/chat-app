$(function() {
    var socket = io.connect('http://localhost:3000');

    $(document).on("click", "#send", function() {
    	var msg = $('#message-input').val();
    	if (msg.length > 0) {
    		socket.emit('message', { content: msg });
    		$('#message-input').val('');
    	}
    });

    socket.on('message', function(data) {
    	$('#chat-wrapper').append('<p class="message">' + data.content + '</p><br>');
    	console.log(data);
    });
});