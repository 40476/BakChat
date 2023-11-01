function randHex(len){for(var color="",i=0;i<len;i++)color+="0123456789ABCDEF"[Math.floor(16*Math.random())];return color}
function copy(arr){return JSON.parse(JSON.stringify(arr))}
function randInt(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function occurences(arr){var prev,a=[],b=[];(arr=copy(arr)).sort();for(var i=0;i<arr.length;i++)arr[i]!==prev?(a.push(arr[i]),b.push(1)):b[b.length-1]++,prev=arr[i];return{a:a,b:b}}
function toRoom(room){return{emit:(type,data)=>{let sockets=queryKeys({room:room});for(let i in sockets)io.to(sockets[i]).emit(type,data)}}}
function formatHMS(time){let hours=Math.floor(time/1e3/60/60),minutes=Math.floor(time/1e3/60)%60,seconds=Math.floor(time/1e3)%60;return`${hours}h:${minutes<10?"0"+minutes:minutes}m:${seconds<10?"0"+seconds:seconds}s`}
function makeFolder(dir){if(!fs.existsSync(dir)){fs.mkdirSync(dir,{recursive: true });logger.info('folder "'+dir+'" created')}else{logger.info('folder "'+dir+'" already exists')}}
function delFolder(dir){fs.readdir(dir,(err,files)=>{if(err)throw err;for(let file of files) fs.unlink(dir+'/'+file,(err)=>{if (err) throw err;});return fs.rmdir(dir,(err) => {if (err) throw err;logger.info('folder "'+dir+'" deleted')});});}
function urmom(file){fs.appendFileSync('./public/logs.html','<a href="/../chatlogs/'+file+'">'+file+'</a><br>');}
function Tolog(room,data){
  /*try{fs.readFileSync('./public/chatlogs/'+room+'.html','utf8')}catch(e){fs.writeFileSync('./public/chatlogs/'+room+'.html','<style>html{font-family:monospace}</style>');}*/
  fs.appendFileSync('./public/chatlogs/'+room+'.html',data+'<br>\n');
  fs.appendFileSync('./chatlogs/'+room+'.html',data+'<br>\n');
}
function scanArr(arr,match){for(var i=-1;i<arr.length;i++){if(arr[i]===match){console.log(i+' & '+match+' '+arr[i]);return i}}}
function restart(){logger.FATAL('admin command trigger-> restart');process.on("exit",function(){require("child_process").spawn(process.argv.shift(),process.argv,{cwd:process.cwd(),detached : true,stdio: "inherit"});});process.exit();}
function query(obj,and,db){let keys=Object.keys(obj),values=Object.values(obj),main={},ret={};db=db||io.of("/").sockets,defaults(db,!0);for(let i in keys)i>0&&and?Object.keys(main).filter((el=>db[el].proto[keys[i]]===values[i])).map((el=>ret[el]=db[el])):Object.keys(db).filter((el=>db[el].proto[keys[i]]===values[i])).map((el=>main[el]=db[el]));return and?ret:main}
function linez(str){var str_arr=str.split('\n');var newline_length=str_arr.length;return newline_length;}
function RemoveFirstLine(text){var lines=text.split('\n');lines.splice(0,1);return lines.join('\n');}
function fixName(){try{socket.proto.name=socket.proto.name.replace(config.ranks.owner.symbol.e,'');}catch(e){logger.ERROR(e)}try{socket.proto.name=socket.proto.name.replace(config.ranks.owner.symbol.s,'');}catch(e){logger.ERROR(e)}try{socket.proto.name=socket.proto.name.replace('$','');}catch(e){logger.ERROR(e)}try{socket.proto.name=socket.proto.name.replace('@','');}catch(e){logger.ERROR(e)}}
function queryKeys(obj,and,db){let keys=Object.keys(obj),values=Object.values(obj),main={},ret={};db=db||io.of("/").sockets;for(let i in keys)i>0&&and?Object.keys(main).filter((el=>db[el].proto[keys[i]]===values[i])).map((el=>ret[el]=db[el])):Object.keys(db).filter((el=>db[el].proto[keys[i]]===values[i])).map((el=>main[el]=db[el]));return and?Object.keys(ret):Object.keys(main)}
function defaults(socket,many){if(many){for(let i of Object.keys(socket)){socket[i].proto=socket[i].proto||{};socket[i].proto.room=socket[i].proto.room||"main";socket[i].proto.name=socket[i].proto.name||socket[i].id;socket[i].proto.id=socket[i].proto.id||socket[i].id;socket[i].proto.muted=socket[i].proto.muted||false;socket[i].proto.created=socket[i].proto.created||new Date;socket[i].proto.admin=socket[i].proto.admin||false}}else{socket.proto=socket.proto||{};socket.proto.room=socket.proto.room||"main";socket.proto.name=socket.proto.name||socket.id;socket.proto.id=socket.proto.id||socket.id;socket.proto.muted=socket.proto.muted||false;socket.proto.created=socket.proto.created||new Date;socket.proto.admin=socket.proto.admin||false}}
/*import name fixer*/eval(fs.readFileSync('./plugins/,/fixnames.js','utf8'));
/*import new hash*/eval(fs.readFileSync('./plugins/,/has.js','utf8'));