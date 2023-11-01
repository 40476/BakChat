selectedSocket=query({
  name: message.split(' ')[1],
  room: room
},true);
selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
if (socket.proto.rank>config.ranks.moderator.rank){
    try{
      
     var sus=require('./users/'+message.split(' ')[1]+'.json');
         sus.banned=false
         fs.writeFileSync('./users/'+message.split(' ')[1]+'.json',JSON.stringify(sus));  
      toRoom(room).emit('message',{name:'server',message:`user "${message.split(' ')[1]}" has been unbanned<br>`});
    }catch(e){logger.WARN(`<pre>`+e+`</pre>`);
              socket.emit('message',{name:'server',message:`Error: user "${message.split(' ')[1]}" is not banned<br><pre>`+e+'<pre>'});
             }
  Tolog(room,'<b style="color:#00FF00">server(S)@</b>'+hours+":"+minutes+":"+seconds+" "+month+'-'+date+'-'+year+''+':'+`${socket.proto.name} has been unbanned`);
} else{
  socket.emit('message',{name:'server',message:`Error: Invalid credentials`});
}