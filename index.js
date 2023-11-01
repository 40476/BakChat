const fs=require('fs');
// const config=JSON.parse(fs.readFileSync('./sconfig.json','utf8').replace(/\/\*[\!-\+a-zA-Z0-9-\s]+\*\//gm,''));
fs.writeFileSync('.cnfg.json',fs.readFileSync('./sconfig.json','utf8').replace(/\/\*[\!-\+a-zA-Z0-9-\s]+\*\//gm,''))
const config=require('./.cnfg.json');
const version=require('./package.json').version;
// regex used --> /\/\*[\!-\+a-zA-Z0-9-\s]+\*\//gm
let date_ob=new Date();let date=date_ob.getDate();let month=date_ob.getMonth();let year=date_ob.getFullYear();let hours=date_ob.getHours()+config.time.offset;let minutes=date_ob.getMinutes();let seconds=date_ob.getSeconds();
setInterval(function(){date_ob=new Date();date=date_ob.getUTCDate();month=date_ob.getUTCMonth();year=date_ob.getUTCFullYear();hours=(date_ob.getHours()+config.time.offset)%12;minutes=date_ob.getUTCMinutes();seconds=date_ob.getUTCSeconds();},750);
fs.writeFileSync('./public/assets/version.txt',version)

const logger={
"trace":function(e,z){try{if(z!==1){fs.appendFileSync(`./assets/dev/log.html`,`<br><pre><b style="color:#00ee00;background-color:#000000;font-family:monospace;">`+"["+month+"-"+date+"-"+year+"*"+hours+"."+minutes+"."+seconds+"]"+`[trace]>>>`+e+`</pre></b>\n`)}}catch(e){};console.log('\x1b[32m'+e+'\x1b[0m');},
"debug":function(e,z){try{if(z!==1){fs.appendFileSync(`./assets/dev/log.html`,`<br><pre><b style="color:#0022ff;background-color:#000000;font-family:monospace;">`+"["+month+"-"+date+"-"+year+"*"+hours+"."+minutes+"."+seconds+"]"+`[debug]>>>`+e+`</pre></b>\n`)}}catch(e){};console.log('\x1b[36m'+e+'\x1b[0m');},
"info":function(e,z){try{if(z!==1){fs.appendFileSync(`./assets/dev/log.html`,`<br><pre><b style="color:#ffffff;background-color:#000000;font-family:monospace;">`+"["+month+"-"+date+"-"+year+"*"+hours+"."+minutes+"."+seconds+"]"+`[info ]>>>`+e+`</pre></b>\n`)}}catch(e){};console.log('\x1b[97m'+e+'\x1b[0m');},
"WARN":function(e,z){try{if(z!==1){fs.appendFileSync(`./assets/dev/log.html`,`<br><pre><b style="color:#ff9900;background-color:#000000;font-family:monospace;">`+"["+month+"-"+date+"-"+year+"*"+hours+"."+minutes+"."+seconds+"]"+`[WARN ]>>>`+e+`</pre></b>\n`)}}catch(e){};console.log('\x1b[33m'+e+'\x1b[0m');},
"ERROR":function(e,z){try{if(z!==1){fs.appendFileSync(`./assets/dev/log.html`,`<br><pre><b style="color:#ad6e00;background-color:#000000;font-family:monospace;">`+"["+month+"-"+date+"-"+year+"*"+hours+"."+minutes+"."+seconds+"]"+`[ERROR]>>>`+e+`</pre></b>\n`)}}catch(e){};console.log('\x1b[93m'+e+'\x1b[0m');},
"FATAL":function(e,z){try{if(z!==1){fs.appendFileSync(`./assets/dev/log.html`,`<br><pre><b style="color:#ff0000;background-color:#000000;font-family:monospace;">`+"["+month+"-"+date+"-"+year+"*"+hours+"."+minutes+"."+seconds+"]"+`[FATAL]>>>`+e+`</pre></b>\n`)}}catch(e){};console.log('\x1b[31m'+e+'\x1b[0m');}
}

try{
const initTime=Date.now();
const express=require('express'),/*make website duh*/
      bodyParser=require('body-parser'), /*===idk what this is for*/
      app=express(),/*------------------------make website duh*/
      shell=require('shelljs'),/*=============helps with restart*/
      https=require('https'),/*---------------send SRV messages*/
      httg=require('http'),/*=================networkcheck*/
      http=require('http').Server(app),/*-----make website duh*/
      //hangout=require('./plugins/CHang'),/*=broke, help plz*/
      readline=require('readline').createInterface({input: process.stdin,output: process.stdout}),
      io=require('socket.io').listen(http),/*=make websocket*/
      device=require('express-device');/*breh*/
console.log(fs.readFileSync('./logo.txt','utf8'));
/*internally installed plugins*/
const swearjar=require('./plugins/swearjar');
const cookieParser=require('./plugins/cookie-parser');

async function runShellCmd(cmd){return new Promise((resolve,reject)=>{shell.exec(cmd,async(code,stdout,stderr)=>{if(!code){return resolve(stdout);};return reject(stderr);});});}
function SERV(){if(true){setTimeout(function(){;
logger.trace(`server started, as PID:`+process.pid+` on `+process.platform)
console.log(`BakChat version `+version+` -- as PID:`+process.pid+` on `+process.platform+`\n\n`+fs.readFileSync('assets/credits.txt','utf8')+`\n-------------------`);
var recentHistory='',bar='',consoleLastRefresh,mtxsr,uptime,isOnline='\033[5m';
/*app.use*/eval(fs.readFileSync('./plugins/,/use.js','utf8'));
/*request handlers*/eval(fs.readFileSync('./plugins/,/get.js','utf8'));

http.listen(config.server.port,()=>undefined);
io.engine.generateId=(req)=>{return randHex(6);};
/*load functions*/eval(fs.readFileSync('./plugins/,/functions.js','utf8'));
/*fix directories???*/eval(fs.readFileSync('./plugins/,/folders.js','utf8'));
/*define passcodes */eval(fs.readFileSync('./plugins/,/passcodes.js','utf8'));

if(config.rm_publicLogs_startup){makeFolder('./public/chatlogs');delFolder('./public/chatlogs');setTimeout(function(){makeFolder('./public/chatlogs')},50);setTimeout(function(){makeFolder('./public/chatlogs')},100);}
  eval(fs.readFileSync('./plugins/,/topbar.js','utf8'))
  io.on('connection',(socket) =>{
  socket.on('join',(data) =>{
    let room;
    defaults(socket);
    if(data&&data!=='/'){room=data.substr(1).replace(/\W/g,'');}else{room='main';}
    let allsockets=io.of('/').sockets;
    defaults(allsockets,true);
    if (!Object.keys(allsockets).includes(room)){
      socket.proto.room=room;
      socket.proto.name=socket.id;
      socket.proto.platform=socket.platform;
      socket.proto.loggedIn=false;
      socket.proto.id=socket.id;
      socket.proto.created=new Date();
      socket.proto.rank=0;
      socket.join(room);
      socket.emit('bounce',{
        type: 'join',
        status: true
      });
      
      try{eval(fs.readFileSync('./chatHANDLE/onConnect.js','utf8'));}catch(e){logger.ERROR(e);};
      if(config.showAdvancedConnectionData){console.log(query({room:room}),socket.proto.room);}
      
    }else{
      socket.emit('message',{
        name: 'server',
        message: `Error: "${room}" is a user (go back to <a href="/">main</a>?)`
      });
      socket.disconnect();
    }
  });
  socket.on('usr_info',(data) =>{
    defaults(socket);let message=data.message;let name=socket.proto.id;
    let platform=data.platform;let sockets=query({room:socket.proto.room});
    let allsockets=io.of('/').sockets;let room=socket.proto.room;defaults(sockets,true);
    var user=JSON.parse(fs.readFileSync(`./users/${fixname(data.user)}.json`));
    socket.emit('usr_JSON',{
      "user":message,
      "uptime":(Date.now()-user.times[user.times.length-1][0]),
      
      
      
      "rank":user.rank,
      "online":user.isLogin,
      "credit":user.credit,
      
      
      
      
      
    })
    });
  socket.on('message',(data)=>{
    defaults(socket);
    let message=data.message;
    let name=socket.proto.id;
    let platform=data.platform;/*logger.fatal(platform)*/
    let sockets=query({room:socket.proto.room});

    let allsockets=io.of('/').sockets;
    let room=socket.proto.room;
    defaults(sockets,true);
    

    if(message){
      if(message[0]===config.chat.commandprefix){
        let newname,selectedSocket,rooms;
        switch (message.split(' ')[0]){

          case config.chat.commandprefix+'login':try{eval(fs.readFileSync('./chatHANDLE/cmd/account/login.js','utf8'));}catch(e){logger.ERROR(e),1};break;
          case config.chat.commandprefix+'newaccount':try{eval(fs.readFileSync('./chatHANDLE/cmd/account/new.js','utf8'));}catch(e){logger.ERROR(e)};break;
          case config.chat.commandprefix+'credits':socket.emit('message',{name:'server',message:`BakChat version `+version+'<br><pre>'+fs.readFileSync('assets/credits.txt')+'</pre>'});break;
          case config.chat.commandprefix+'ban':try{eval(fs.readFileSync('./chatHANDLE/cmd/moderate-tool/ban.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'unban':try{eval(fs.readFileSync('./chatHANDLE/cmd/moderate-tool/unban.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'whois':try{eval(fs.readFileSync('./chatHANDLE/cmd/infoGET/whois.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'kick':try{eval(fs.readFileSync('./chatHANDLE/cmd/required/kick.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'frz':try{eval(fs.readFileSync('./chatHANDLE/cmd/moderate-tool/freeze.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'restart':try{eval(fs.readFileSync('./chatHANDLE/cmd/owner/restart.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'post':try{eval(fs.readFileSync('./chatHANDLE/cmd/owner/post.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'op':try{eval(fs.readFileSync('./chatHANDLE/cmd/admin/give.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'deop':try{eval(fs.readFileSync('./chatHANDLE/cmd/admin/remove.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'giveMod':try{eval(fs.readFileSync('./chatHANDLE/cmd/MODr/give.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'deMod':try{eval(fs.readFileSync('./chatHANDLE/cmd/MODr/remove.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'unmute':try{eval(fs.readFileSync('./chatHANDLE/cmd/required/unmute.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'mute':try{eval(fs.readFileSync('./chatHANDLE/cmd/required/mute.js','utf8'));}catch(e){logger.ERROR(e);};break;
          // case config.chat.commandprefix+'update':if(true){/* TODO: ADD ARGUMENT TO 'start or update.sh'*/logger.ERROR('not implemented');}else{}break;
          case config.chat.commandprefix+'msg':try{if(!socket.proto.muted){eval(fs.readFileSync('./chatHANDLE/onSendPrivate.js','utf8'));}}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'troll':try{eval(fs.readFileSync('./chatHANDLE/cmd/misc/troll.js','utf8'));}catch(e){logger.ERROR(e);}break;
          case config.chat.commandprefix+'key':try{eval(fs.readFileSync('./chatHANDLE/cmd/required/key.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'name':try{eval(fs.readFileSync('./chatHANDLE/cmd/required/setName.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'?':try{eval(fs.readFileSync('./chatHANDLE/cmd/help.js','utf8'));}catch(e){logger.ERROR(e);};break;
          case config.chat.commandprefix+'users':try{eval(fs.readFileSync('./chatHANDLE/cmd/infoGET/users.js','utf8'));}catch(e){logger.ERROR(e);};break;
          /*case config.chat.commandprefix+'user':try{eval(fs.readFileSync('./chatHANDLE/cmd/OWNER/user.js','utf8'));}catch(e){logger.ERROR(e);};break;*/
          case config.chat.commandprefix+'logs':if(true){fs.readdir(require('path').resolve(__dirname,'./public/chatlogs/'),(err,files)=>{for(let file of files){urmom(file);}});socket.emit('message',{name:'server',message:'<a href="/../logs.html">logs</a>'});}break;
          case config.chat.commandprefix+'rooms':try{eval(fs.readFileSync('./chatHANDLE/cmd/infoGET/rooms.js','utf8'));}catch(e){logger.ERROR(e);};break;
          default:eval(fs.readFileSync('./chatHANDLE/cmd/unknown.js','utf8'));
        }
      }else{
        try{eval(fs.readFileSync('./chatHANDLE/onSend.js','utf8'));}catch(e){logger.ERROR(e);}
      }
    }
    }
  );
  socket.on('disconnect',(data)=>{try{if(socket&&socket.proto&&socket.proto.room){eval(fs.readFileSync('./chatHANDLE/onDisconnect.js','utf8'));}}catch(e){logger.ERROR(e);};});
});
},config.server.startUpDelay);
}}

var sha256=function r(o){function f(r,o){return r>>>o|r<<32-o}for(var t,n,a=Math.pow,c=a(2,32),e="length",i="",h=[],u=8*o[e],v=r.h=r.h||[],l=r.k=r.k||[],s=l[e],g={},k=2;s<64;k++)if(!g[k]){for(t=0;t<313;t+=k)g[t]=k;v[s]=a(k,.5)*c|0,l[s++]=a(k,1/3)*c|0}for(o+="";o[e]%64-56;)o+="\0";for(t=0;t<o[e];t++){if((n=o.charCodeAt(t))>>8)return;h[t>>2]|=n<<(3-t)%4*8}for(h[h[e]]=u/c|0,h[h[e]]=u,n=0;n<h[e];){var d=h.slice(n,n+=16),p=v;for(v=v.slice(0,8),t=0;t<64;t++){var w=d[t-15],A=d[t-2],C=v[0],M=v[4],A=v[7]+(f(M,6)^f(M,11)^f(M,25))+(M&v[5]^~M&v[6])+l[t]+(d[t]=t<16?d[t]:d[t-16]+(f(w,7)^f(w,18)^w>>>3)+d[t-7]+(f(A,17)^f(A,19)^A>>>10)|0);(v=[A+((f(C,2)^f(C,13)^f(C,22))+(C&v[1]^C&v[2]^v[1]&v[2]))|0].concat(v))[4]=v[4]+A|0}for(t=0;t<8;t++)v[t]=v[t]+p[t]|0}for(t=0;t<8;t++)for(n=3;n+1;n--){var S=v[t]>>8*n&255;i+=(S<16?0:"")+S.toString(16)}return i};
if(config.server.manAuthStartup===false||config.server.manAuthStartup==="false"){SERV();}else{logger.trace('!!!waiting for passcode!!!');readline.question('enter startup passcode: ', function (name) {config.server.authVerify=name;readline.close();});readline.on('close', function () {try{if((config.server.manAuthStartup!==false)&&(config.server.authVerify===config.server.manAuthStartup)){SERV();logger.trace('!!!passcode accepted!!!');}}catch(e){logger.FATAL(e)}});}

}catch(e){logger.FATAL(e)}