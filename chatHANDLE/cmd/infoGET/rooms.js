rooms=occurences(Object.keys(allsockets).map(el => allsockets[el].proto.room));
let users=rooms.b;
rooms=rooms.a;
socket.emit('message',{
  name:'server',
  message:rooms.map((el,i)=>`<a href="/${el}" target="_self">${el}</a> (${users[i]})`).join(',')
});