case'/restart':if(socket.proto.admin){
  /* if user is admin*/
}else{
  /*code for if user is not admin*/
}break;

/*
socket.emit('message',{
  name: 'server',
  message: `Error: Invalid credentials`
});
*/



case'/cred':if(socket.proto.admin||socket.proto.moderator){
  
}else{
  socket.emit('message',{name:'server',message:`Error: Invalid credentials`});
}break;