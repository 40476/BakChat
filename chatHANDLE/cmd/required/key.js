socket.proto.name=fixname(socket.proto.name);

if (message.split(' ')[1] === process.env.ADMIN){
  if (!socket.proto.admin){
    socket.proto.rank=config.ranks.admin.rank;
    socket.proto.name=config.ranks.admin.symbol.s+socket.proto.name+config.ranks.admin.symbol.e;
    toRoom(socket.proto.room).emit('message',{
      name: 'server',
      message: `${socket.proto.name} is now an admin`
    });
    recentHistory=recentHistory+"\n"+hours+":"+minutes+":"+seconds+" "+':  '+`${socket.proto.name} is now an admin`;
    Tolog(socket.proto.room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+"-"+date+"-"+year+''+':'+`${name} is now an admin`);
  } else{
    socket.emit('message',{
      name: 'server',
      message: `Error: Already an admin`
    });
    socket.proto.name=config.ranks.admin.symbol.s+socket.proto.name+config.ranks.admin.symbol.e;
    socket.proto.name=fixname(socket.proto.name);
  }
} else{
  if(message.split(' ')[1] === process.env.MODr){
    socket.proto.rank=config.ranks.moderator.rank;
    socket.proto.name=config.ranks.moderator.symbol.s+socket.proto.name+config.ranks.moderator.symbol.e;
    toRoom(socket.proto.room).emit('message',{
      name: 'server',
      message: `${socket.proto.name} is now a moderator`
    });
    recentHistory=recentHistory+"\n"+hours+":"+minutes+":"+seconds+" "+':  '+`${socket.proto.name} is now a moderator`;
    Tolog(socket.proto.room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+"-"+date+"-"+year+''+':'+`${name} is now a moderator`);
  }
  if(message.split(' ')[1] === process.env.OWNER){
    socket.proto.rank=config.ranks.owner.rank;
    socket.proto.name=config.ranks.owner.symbol.s+socket.proto.name+config.ranks.owner.symbol.e;
    toRoom(socket.proto.room).emit('message',{
      name: 'server',
      message: `${socket.proto.name} is the owner`
    });
    Tolog(socket.proto.room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+"-"+date+"-"+year+''+':'+`${name} is the owner`);
  }
  if((message.split(' ')[1] !== process.env.MODr)&&(message.split(' ')[1] !== process.env.ADMIN)&&(message.split(' ')[1] !== process.env.OWNER)){
    socket.emit('message',{
    name: 'server',
    message: 'Error: Invalid credentials>>> passcode is invalid'
  });}
}