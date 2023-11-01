socket.emit('message',{
  name: 'server',
  message: `Error: "${message.split(' ')[0]}" is unknown command<br>>full message: "${message}"`
});