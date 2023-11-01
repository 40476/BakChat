toRoom(room).emit('loginquery',{
    name:'server',
    room:room,
   message:'dothigns'
});

setTimeout(function(){socket.emit('message',{
  name: 'server',
  message: queryKeys({
    room: room
  }).map(el => sockets[el].proto.name).join(',').replace(socket.proto.name,'<b>$&</b>')
});},3000)