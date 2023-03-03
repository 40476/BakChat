socket.emit('message',{
  name: 'server',
  message: queryKeys({
    room: room
  }).map(el => sockets[el].proto.name).join(',').replace(socket.proto.name,'<b>$&</b>')
});