  toRoom(socket.proto.room).emit('message',{
    name: 'server',
    message: `${socket.proto.name}(${socket.proto.id}) has left`
  });
  try{
  var user=require('./users/'+fixname(socket.proto.name)+'.json');
    user.isLogin='offline';
    user.times[user.times.length-1][1]=Date.now();
    delete user.rooms[scanArr(user.rooms,socket.proto.room)]
    
  fs.writeFileSync('./users/'+fixname(socket.proto.name)+'.json',JSON.stringify(user));
  }catch(e){logger.error(e)}
  recentHistory=recentHistory+"\n"+hours+":"+minutes+":"+seconds+" "+':  '+`${socket.proto.name}(${socket.proto.id}) has left ${socket.proto.room} `//+user.rooms[scanArr(user.rooms,socket.proto.room)];
  Tolog(socket.proto.room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+"-"+date+"-"+year+''+':'+`${socket.proto.name} has left`);