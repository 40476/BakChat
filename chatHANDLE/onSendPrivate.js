selectedSocket=query({
  name: message.split(' ')[1],
  room: room
},true);
selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
if (selectedSocket){
  socket.to(selectedSocket.proto.id).emit('message',{
    name: socket.proto.name,
    message: message.split(' ').slice(2).join(' '),
    color: socket.proto.id,
    type: 'direct'
  });
  socket.emit('message',{
    platform:'nodeJS',
    name: 'server',
    message: `${message.split(' ')[1]}>>> ${message.split(' ').slice(2).join(' ')}`
  });
} else{
  socket.emit('message',{
    platform:'nodeJS',
    name: 'server',
    message: `Error: User ${message.split(' ')[1]} does not exist`
  });
}