if((message.split(' ')[1]==='op')&&(socket.proto.admin||socket.proto.owner)){
  fs.readFile('assets/opcmd.txt','utf8',(err,file) =>{socket.emit('message',{name: 'server',message: file});});
}
// eval(fs.readFileSync('./chatHANDLE/onSendPrivate.js','utf8'));
fs.readFile('assets/cmd.txt','utf8',(err,file) =>{
  socket.emit('message',{
    name: 'server',
    message: file
  });
});