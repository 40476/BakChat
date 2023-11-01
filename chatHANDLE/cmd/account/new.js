if(!fs.existsSync('./users/'+fixname(message.split(' ')[1])+'.json')){
  try{
  fs.writeFileSync('./users/'+fixname(message.split(' ')[1])+'.json',`{"psk":"${hash(message.split(' ')[2],message.split(' ')[1])}","rank":${config.ranks.user.rank},
                   "banned":false,"credit":0,"times":[],
                   "profile":{"img":"","desc":"","bio":""},
                   "control":{"accntEnabled":true}}`);
  
  socket.emit('message',{name:'server',message:`the account <a href="/../$/profile.html?user=${message.split(' ')[1]}">${message.split(' ')[1]}</a> was created successfuly`});
  }catch(e){socket.emit('message',{name:'server',message:`<pre>${e}</pre>`});}

}else{
  socket.emit('message',{name:'server',message:`the account <a href="/../$/profile.html?user=${message.split(' ')[1]}">${message.split(' ')[1]}</a> already exists`});
  
}