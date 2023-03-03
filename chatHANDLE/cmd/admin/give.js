selectedSocket=query({
  name: message.split(' ')[1],
  room: room
},true);
selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
if (socket.proto.rank>config.ranks.moderator.rank&&socket.proto.rank>selectedSocket.proto.rank){
  if (selectedSocket){
    selectedSocket.proto.rank=config.ranks.admin.rank;
    selectedSocket.proto.name=fixname(selectedSocket.proto.name);
    selectedSocket.proto.name=config.ranks.admin.symbol.s+selectedSocket.proto.name+config.ranks.admin.symbol.e;
    toRoom(socket.proto.room).emit('message',{
      name: 'server',
      message: `${selectedSocket.proto.name} is now an admin`
    });Tolog(socket.proto.room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+'-'+date+'-'+year+''+':'+`${socket.proto.name} gave admin to ${selectedSocket.proto.name}`);
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