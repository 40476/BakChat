﻿selectedSocket=query({
  name: message.split(' ')[1],
  room: room
},true);
selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
if (socket.proto.rank>config.ranks.moderator.rank){
  if (selectedSocket){
    
    selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();selectedSocket.disconnect();
         var sus=require('./users/'+message.split(' ')[1]+'.json');
         // if(message.split(' ')[2]!=='true'&&message.split(' ')[2]!=='True'){
           switch(message.split(' ')[2]){
             //TODO: find a better solution to eval here
             case'date':sus.banned=eval(message.split(' ')[3]);break;
             
             default:sus.banned=true;break;
             
          }
         fs.writeFileSync('./users/'+message.split(' ')[1]+'.json',JSON.stringify(sus));
    
    toRoom(room).emit('message',{name:'server',message:selectedSocket.proto.name+' has been banned until '+message.split(' ')[3]});
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