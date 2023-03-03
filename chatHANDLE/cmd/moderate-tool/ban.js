selectedSocket=query({
  name: message.split(' ')[1],
  room: room
},true);
selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
if (socket.proto.rank>config.ranks.moderator.rank){
  if (selectedSocket){
    selectedSocket.disconnect();
         var sus=require('./users/'+message.split(' ')[1]+'.json');
         sus.banned=true
         fs.writeFileSync('./users/'+message.split(' ')[1]+'.json',JSON.stringify(sus));
    
    toRoom(room).emit('message',{name:'server',message:selectedSocket.proto.name+' has been banned'});
    Tolog(room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+'-'+date+'-'+year+''+':'+`${selectedSocket.proto.name} has been banned`);
    
  } else{
    socket.emit('message',{
      name: 'server',
      message: `Error: User ${message.split(' ')[1]} does not exist`
    });
  }
} else{
  socket.emit('message',{name:'server',message:`Error: Invalid credentials`});
}