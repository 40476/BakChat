selectedSocket=query({
  name: message.split(' ')[1],
  room: room
},true);
selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
if (socket.proto.rank>config.ranks.moderator.rank){
  if (selectedSocket){
    selectedSocket.proto.muted=false;
    toRoom(socket.proto.room).emit('message',{
      name: 'server',
      message:`<b style="color:${selectedSocket.proto.id}">${selectedSocket.proto.name}</b> has been unmuted by <b style="color:${socket.proto.id}">${socket.proto.name}</b>`
    });
    Tolog(socket.proto.room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+"-"+date+"-"+year+''+':'+`<b style="color:${selectedSocket.proto.id}">${selectedSocket.proto.name}</b> was unmuted by <b style="color:${socket.proto.id}">${socket.proto.name}</b>`);
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