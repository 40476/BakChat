if(socket.proto.rank===config.ranks.owner.rank){
  toRoom(room).emit('message',{
    name:message.split(' ')[1],
    room:room,
    message:message.split(' ').slice(2).join(' ')
  });
}else{
  socket.emit('message',{
    name:'server',
    message:`Error: Invalid credentials`
  });
}