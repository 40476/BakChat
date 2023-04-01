socket.emit('message',{
  name: 'server',
  message: `Error: "${message.split(' ')[0]}" is unknown command&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;full message: "${message}"`
});