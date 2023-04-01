if(socket.proto.rank===config.ranks.owner.rank){
  try{
      if(message.split(' ')[1]==='rr'){
      toRoom(room).emit('message',{name:'server',message:`<meta http-equiv="refresh" content="2;url=https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>`});
    }if(message.split(' ')[1]==='sus'){
      toRoom(room).emit('message',{name:'server',message:`<meta http-equiv="refresh" content="2;url=https://www.youtube.com/watch?v=8hxLhlUrInU"/>`});
    }if(message.split(' ')[1]==='21'){
      toRoom(room).emit('message',{name:'server',message:`<meta http-equiv="refresh" content="2;url=https://www.youtube.com/watch?v=wSRHxVDMzvc"/>`});
    }if(message.split(' ')[1]==='E'){
      toRoom(room).emit('message',{name:'server',message:`<meta http-equiv="refresh" content="2;url=https://www.youtube.com/watch?v=Qskm9MTz2V4"/>`});
    }if(message.split(' ')[1]==='cake'){
      toRoom(room).emit('message',{name:'server',message:`<meta http-equiv="refresh" content="2;url=https://www.youtube.com/watch?v=wz0vhRNDSmA"/>`});
    }if(message.split(' ')[1]==='dingle'){
      toRoom(room).emit('message',{name:'server',message:`<meta http-equiv="refresh" content="2;url=https://www.youtube.com/watch?v=Z7AdPqJUbTE"/>`});
    }if(message.split(' ')[1]==='boom'){
      toRoom(room).emit('message',{name:'server',message:`<meta http-equiv="refresh" content="2;url=https://www.youtube.com/watch?v=V3_QjoWOKS4"/>`});
    }
  }catch(e){logger.ERROR(e)}
  
  
}else{
  socket.emit('message',{message:"error invalid credentials"})
}