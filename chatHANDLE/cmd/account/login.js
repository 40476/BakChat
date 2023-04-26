try{
var user=JSON.parse(fs.readFileSync('./users/'+fixname(message.split(' ')[1])+'.json','utf8').replace('\ufeff',''));
if(user.psk===hash(message.split(' ')[2],message.split(' ')[1])){
  var session=[Date.now(),Date.now()];
  user.times.push(session);
  user.rooms.push(room)
  
  user.isLogin='online';
  fs.writeFileSync('./users/'+fixname(message.split(' ')[1])+'.json',JSON.stringify(user));
  
  selectedSocket=query({
  name: message.split(' ')[1],
  room: room
},true);
  selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
  if(message.split(' ')[3]==='1'){selectedSocket.disconnect();}
  
  Tolog(room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+'-'+date+'-'+year+''+':'+`${message.split(' ')[1]}(${socket.proto.id}) has logged in`);
  recentHistory=recentHistory+"\n"+hours+":"+minutes+":"+seconds+" "+':  '+`${message.split(' ')[1]}(${socket.proto.id}) has logged in`;
  socket.proto.name=message.split(' ')[1];
  socket.proto.rank=user.rank;
  socket.proto.loggedIn=true;
  if(user.rank===4){      socket.proto.name=config.ranks.owner.symbol.s+socket.proto.name+config.ranks.owner.symbol.e;
  }else if(user.rank===3){socket.proto.name=config.ranks.admin.symbol.s+socket.proto.name+config.ranks.admin.symbol.e;
  }else if(user.rank===2){socket.proto.name=config.ranks.moderator.symbol.s+socket.proto.name+config.ranks.moderator.symbol.e;
  }else if(user.rank===1){socket.proto.name=config.ranks.helper.symbol.s+socket.proto.name+config.ranks.helper.symbol.e;
  }else if(user.rank===0){socket.proto.name=config.ranks.user.symbol.s+socket.proto.name+config.ranks.user.symbol.e;
  }
  toRoom(room).emit('message',{name:'server',message:`<b style="background-color:#000000;color:#FFFFFF">${socket.proto.name}</b>(${socket.proto.id})[<b>${socket.proto.rank}</b>] has logged in`});
}else{
    socket.emit('message',{name:'server',message:`error: invalid password`});
  //for debugging purposes only!! -->  
  // socket.emit('message',{name:'server',message:`error: invalid password (${user.psk/*+user.times[1]*/===hash(message.split(' ')[2],message.split(' ')[1])})--> ${hash(message.split(' ')[2],message.split(' ')[1])} ${user.psk} `});
  }

if(user.banned===true){selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();}
}catch(e){
  // logger.ERROR(e);
  socket.emit('message',{name:'server',message:`<pre>${e}</pre>`});
  
}