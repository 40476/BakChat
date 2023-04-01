if(!fs.existsSync('./users/'+message.split(' ')[1]+'.json')){
if (message.split(' ')[1] && message.split(' ')[1].replace(0,0)){
socket.proto.name=fixname(socket.proto.name)
  newname=message.split(' ')[1].replace(0,0).substr(0,30);
  if (queryKeys({
    name:message.split(' ')[1],
    room:room
  },true).length===0&& newname !== 'server'){
    socket.proto.name=fixname(socket.proto.name);
    if(sus.rank===4){socket.proto.name=config.ranks.owner.symbol.s+socket.proto.name+config.ranks.owner.symbol.e;
  }else if(sus.rank===3){socket.proto.name=config.ranks.admin.symbol.s+socket.proto.name+config.ranks.admin.symbol.e;
  }else if(sus.rank===2){socket.proto.name=config.ranks.moderator.symbol.s+socket.proto.name+config.ranks.moderator.symbol.e;
  }else if(sus.rank===1){socket.proto.name=config.ranks.helper.symbol.s+socket.proto.name+config.ranks.helper.symbol.e;
  }else if(sus.rank===0){socket.proto.name=config.ranks.user.symbol.s+socket.proto.name+config.ranks.user.symbol.e;}
    toRoom(socket.proto.room).emit('message',{
      name: 'server',
      message: `${name} is now known as ${socket.proto.name}`,
    });
    recentHistory=recentHistory+"\n"+hours+":"+minutes+":"+seconds+" "+':  '+`"${name}" is now known as "${socket.proto.name}" ROOM --> ${socket.proto.room}`;
    Tolog(socket.proto.room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+"-"+date+"-"+year+''+':'+`"${name}" is now known as "${socket.proto.name}"`);
  }else{
    socket.emit('message',{
      name: 'server',
      message: `Error: Name "${newname}" already exists`
    });
  }
}else{
  socket.emit('message',{
    name: 'server',
    message: `Error: Invalid Syntax`
  });
}
}else{
  socket.emit('message',{
      name: 'server',
      message: `Error: account "${message.split(' ')[1]}" already exists`
    });
}