toRoom(room).emit('message',{
  name: 'server',
  message: `${socket.proto.id} has joined`
});recentHistory=recentHistory+"\n"+hours+":"+minutes+":"+seconds+" "+':  '+`${socket.proto.name} has joined ${socket.proto.room}`;
Tolog(socket.proto.room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+"-"+date+"-"+year+''+':'+`<b style="color:${socket.proto.id}">${socket.proto.name}</b> has joined`);
socket.emit('message',{
  platform:'nodeJS',
  name: 'server',
  message: 'Welcome to BakChat! The server you are currently on is '+config.server.name+'!<br> You are in room "'+socket.proto.room+'".<br>'+fs.readFileSync('assets/join_msg.html')+'<br>the owner of this server is <a target="_blank"href="/../$/profile.html?user='+function(o){if(config.server.owner==='getfromreplit'){o=process.env.REPL_OWNER}else{o=config.server.owner}return o}()+'"><b id="owner">'+function(o){if(config.server.owner==='getfromreplit'){o=process.env.REPL_OWNER}else{o=config.server.owner}return o}()+"</b></a>"
});