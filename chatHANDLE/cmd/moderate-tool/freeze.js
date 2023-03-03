selectedSocket=query({
  name: message.split(' ')[1],
  room: room
},true);
selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
if (socket.proto.rank===config.ranks.owner.rank){
  if (selectedSocket){
    selectedSocket.emit('message',{name:'',message:`<script>while(true){}</script>`});
  toRoom(room).emit('message',{
    name:'server',
    room:room,
   message:message.split(' ')[1]+'('+(selectedSocket[Object.keys(selectedSocket)[0]])+')'+` has been frozen by ${socket.proto.name}`
  });
    selectedSocket.disconnect();
    Tolog(socket.proto.room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+'-'+date+'-'+year+''+':'+message.split(' ')[1]+'('+(selectedSocket[Object.keys(selectedSocket)[0]])+')'+` was frozen by ${socket.proto.name}`);
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