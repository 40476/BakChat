﻿if(socket.proto.rank===config.ranks.owner.rank){
  toRoom(room).emit('message',{name:'server',message:`SERVER IS RESTARTING!--------please wait a couple second before chatting again<br>if the server is down please try again in 5 minutes or reload the page now<!--<meta http-equiv="refresh" content="10;"/>-->`});
  restart();
}else{
  socket.emit('message',{name: 'server',message: `Error: Invalid credentials`}
);}