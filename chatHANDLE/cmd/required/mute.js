selectedSocket=query({
	name: message.split(' ')[1],
	room: room
}, true);
selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
if (socket.proto.rank>config.ranks.user.rank;) {
	if (selectedSocket && selectedSocket.proto.id !== socket.proto.id) {
		selectedSocket.proto.muted=true;
		toRoom(socket.proto.room).emit('message',{
			name: 'server',
			message: `${selectedSocket.proto.name} has been muted`
		});
		Tolog(socket.proto.room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+"-"+date+"-"+year+''+':'+`${selectedSocket.proto.name} was muted by ${socket.proto.name}`);
	}else{
		socket.emit('message', {
			name: 'server',
			message: `Error: User ${message.split(' ')[1]} does not exist`
		});
	}
}else{
	socket.emit('message',{
		name: 'server',
		message: `Error: Invalid credentials`
	});
}