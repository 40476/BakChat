selectedSocket=query({
  name: message.split(' ')[1],
  id: message.split(' ')[1]
});
selectedSocket=query({
  room:room
},false,selectedSocket);
selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
rooms=queryKeys({
  name: message.split(' ')[1],
  id: message.split(' ')[1]
}).map(el => allsockets[el].proto.room);
if(selectedSocket){
  socket.emit('message',{
    name: 'server',
    message: `<br>${selectedSocket.proto.id} is ${selectedSocket.proto.name}<br>
		${selectedSocket.proto.name} is in ${rooms.length} room${rooms.length > 1 ? 's' : ''}: ${rooms.join(',')}<br>
		Online for: ${formatHMS(new Date() - selectedSocket.proto.created)}<br>
		rank: ${selectedSocket.proto.rank}<br>
    <!--platform: -->`
  });
}else if(message.split(' ')[1] && message.split(' ')[1].indexOf('#') === 0){
  selectedSocket=query({
    room: message.split(' ')[1].substr(1)
  });
  rooms=Object.keys(selectedSocket).map(el => selectedSocket[el].proto.name);
  socket.emit('message',{
    name:'server',
    message:`${message.split(' ')[1]}has${rooms.length} user${rooms.length > 1 ? 's' : ''}: ${rooms.join(',')}`
  });
} else{
  socket.emit('message',{
    name: 'server',
    message: `Error: User/Room ${message.split(' ')[1]} does not exist`
  });
}