selectedSocket=query({
  name: message.split(' ')[1],
  room: room
},true);
selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
if (socket.proto.rank>config.ranks.moderator.rank&&socket.proto.rank>selectedSocket.proto.rank){
  if (selectedSocket && selectedSocket.proto.id !== socket.proto.id){
    selectedSocket.proto.rank=config.ranks.user.rank;
    selectedSocket.proto.name=fixname(selectedSocket.proto.name)
    toRoom(socket.proto.room).emit('message',{
      name: 'server',
      message: `${selectedSocket.proto.name} is no longer an admin`
    });Tolog(socket.proto.room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+'-'+date+'-'+year+''+':'+`${selectedSocket.proto.name} had their admin status removed by ${socket.proto.name}`);
  } else{
    socket.emit('message',{
      name: 'server',
      message: `Error: User ${message.split(' ')[1]} does not exist`
    });
  }
} else{
  socket.emit('message',{
    name: 'server',
    message: `Error: Invalid credentials`
  });
}