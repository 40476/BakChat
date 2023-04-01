selectedSocket=query({
  name: message.split(' ')[1],
  room: room
},true);
selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
if (socket.proto.rank>config.ranks.moderator.rank){
  if (selectedSocket){
    selectedSocket.proto.rank=config.ranks.moderator.rank;
    selectedSocket.proto.name=config.ranks.moderator.symbol.s+selectedSocket.proto.name+config.ranks.moderator.symbol.e;
    selectedSocket.proto.name=fixname(selectedSocket.proto.name)
  
    toRoom(socket.proto.room).emit('message',{
      name: 'server',
      message: `${selectedSocket.proto.name} is now a moderator`
    });Tolog(socket.proto.room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+'-'+date+'-'+year+''+':'+`${selectedSocket.proto.name} is now a moderator`);
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