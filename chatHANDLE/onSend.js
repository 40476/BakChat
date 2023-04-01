/*LOGGING CODE*/Tolog(socket.proto.room,socket.proto.id+'(<b style="color:#'+socket.proto.id+'">'+socket.proto.name+'</b>)@'+hours+":"+minutes+":"+seconds+" "+month+"-"+date+"-"+year+''+': '+message);
      if(socket.proto.rank!==config.ranks.owner.rank){try{message=swearjar.censor(message.replace(/</g, '&lt;').replace(/>/g, '&gt;'));}catch(e){logger.ERROR(e)}}
        if(socket.proto.loggedIn===false&&config.accounts.requireLogin){
          socket.emit('message',{
            name:'server',
            message:'please login or create an account to continue',
            platform:platform
          });
        }else{
          toRoom(socket.proto.room).emit('message',{
            name:socket.proto.name,
            message:message,//.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
            color:socket.proto.id,
            platform:platform
          });
          for(var i=0;i<config.SRV.length;i++){https.get(`https://${config.SRV[i][0]}/SRV.in?msg=${message}&name=${socket.proto.name}&room=${socket.proto.room}`,(resp)=>{logger.trace('SRV resp --> '+resp,1)});}
        }