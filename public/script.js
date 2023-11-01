var abracabanban=false;
const thisurl=new URL(document.location);if(thisurl.hash==='#e'){chatlog=[];localStorage.setItem('chatlog','{}');document.location=thisurl.pathname;}//reset if anyone breaks ur client
try{if(localStorage.getItem('chatlog').length>10000){localStorage.setItem('chatlog','')}}catch(e){}
function notify(a,b,c){try{return new Notification(a,{b,c});}catch(e){console.trace(e)}}
try{function settings(){
  
  document.documentElement.style.setProperty("--borderRad",document.getElementById('borderRadius_control').value+'px');
  document.documentElement.style.setProperty("--backdrop",document.getElementById('backdrop_colour').value);
  try{if(document.getElementById('invis').value==="true"){document.documentElement.style.setProperty("--backdrop",''+document.getElementById('backdrop_colour').value);document.documentElement.style.setProperty("--backdropextender",'#1f1f1f');}else{document.documentElement.style.setProperty("--backdrop",'none');document.documentElement.style.setProperty("--backdropextender",'none');}}catch(e){alert(e)}
  pingSound=new Audio('/../assets/audio/'+document.getElementById('audio').value);
  localStorage.setItem('login_name',document.getElementById('login_name').value);
  localStorage.setItem('login_psk',document.getElementById('login_psk').value);
  localStorage.setItem('border_radius',document.getElementById('borderRadius_control').value);
  localStorage.setItem('background_color',document.getElementById('backdrop_colour').value);
  
  document.getElementById('themeSheet').innerHTML='<style>'+document.getElementById('themeSelect').value+'</style>';
  
}
  // setTimeout(() =>{
  
  document.getElementById('borderRadius_control').value=localStorage.getItem('border_radius');
  document.getElementById('backdrop_colour').value=localStorage.getItem('background_color');
  document.getElementById('login_name').value=localStorage.getItem('login_name');
  document.getElementById('login_psk').value=localStorage.getItem('login_psk');
  settings();
  // },2000)
  
  
  
var today=new Date().getHours();
// if((document.location.host==='bakchatfork.glitch.me')&&(([0,6].indexOf(new Date().getDay()) != -1)||(!(today >= 7 && today <= 14)))){document.location="https://bakchat.40476.repl.co"}else{console.log(((document.location.host==='bakchatfork.glitch.me')&&(([0,6].indexOf(new Date().getDay()) != -1)||(today >= 7 && today <= 19))))}
function fileExists(url){
  if(url){
    var req=new XMLHttpRequest();
    req.open('GET',url,false);
    req.send();
    return req.status==200;
 }else{
    return false;
 }
}
function hexToRgb(hex){var validHEXInput=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);if(!validHEXInput){return false;}var output={r: parseInt(validHEXInput[1],16),g: parseInt(validHEXInput[2],16),b: parseInt(validHEXInput[3],16),};return output;}
function randInt(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
var version,__osc=1,loginstatus,platform=navigator.platform;
var sha256=function r(o){function f(r,o){return r >>> o|r << 32-o}for(var t,n,a=Math.pow,c=a(2,32),e="length",i="",h=[],u=8*o[e],v=r.h=r.h||[],l=r.k=r.k||[],s=l[e],g={},k=2;s<64;k++)if(!g[k]){for(t=0;t<313;t += k)g[t]=k;v[s]=a(k,.5)*c|0,l[s++]=a(k,1/3)*c|0}for(o += "";o[e] % 64-56;)o += "\0";for(t=0;t<o[e];t++){if((n=o.charCodeAt(t)) >> 8) return;h[t >> 2] |= n <<(3-t) % 4*8}for(h[h[e]]=u/c|0,h[h[e]]=u,n=0;n<h[e];){var d=h.slice(n,n += 16),p=v;for(v=v.slice(0,8),t=0;t<64;t++){var w=d[t-15],A=d[t-2],C=v[0],M=v[4],A=v[7]+(f(M,6) ^ f(M,11) ^ f(M,25))+(M & v[5] ^ ~M & v[6])+l[t]+(d[t]=t<16 ? d[t] : d[t-16]+(f(w,7) ^ f(w,18) ^ w >>> 3)+d[t-7]+(f(A,17) ^ f(A,19) ^ A >>> 10)|0);(v=[A+((f(C,2) ^ f(C,13) ^ f(C,22))+(C & v[1] ^ C & v[2] ^ v[1] & v[2]))|0].concat(v))[4]=v[4]+A|0}for(t=0;t<8;t++)v[t]=v[t]+p[t]|0}for(t=0;t<8;t++)for(n=3;n+1;n--){var S=v[t] >> 8*n & 255;i +=(S<16 ? 0 : "")+S.toString(16)}return i};
fetch('/../assets/version.txt').then(response => response.text()).then(data =>{version=data;});;
//settings
document.onkeyup=function(){var e=e||window.event;if(e.altKey && e.which==65){openNav();return false;}}
//normal nav
// document.onkeyup=function(){var e=e||window.event;if(e.altKey && e.which==78){openNav2();return false;}}


var room=window.location.pathname==='/' ? '/main' : window.location.pathname;
var key=false,pinkIcon;const params=new URLSearchParams(window.location.search);var __bruh=randHex(6);var pingSound=new Audio('/../assets/audio/ting.mp3');
var client=io(),__exec=false,chathistory=[],index=0,chatlog={},lasttime=new Date(),username,unread=0,focus=true;
function updateConfig(){}
var lastuser='';
var __RULES__="No solicitation -- No personal attacks or harassment -- No spamming";
var ads=[
  ['betties pages','https://www.bettiespages.com/',
    'https://images.squarespace-cdn.com/content/v1/5d2532eaaf9da50001010985/55cc099a-6375-41b4-8724-5c41ebf20d02/Betties_Pages-Logo.jpg?format=1500w',true],
  ['consider checking the Better Place farms farmstand!','https://betterplacefarm.com/',
    'https://betterplacefarm.com/wp-content/uploads//2020/04/logo-better-place-farm-FIXED.svg',true],
  // ['consider donating!','',
  //   '',true],



];
function randAd(){var adCheck=randInt(0,ads.length-1);return `<br><a href="`+ads[adCheck][1]+`">`+`<img width="200px"height="200px"src="`+ads[adCheck][2]+`"`+`></a>`}
/*opens the settings nav*/function openNav(){document.getElementById("mySidenav").style.width="250px",document.getElementById("main").style.marginLeft="250px"}function closeNav(){document.getElementById("mySidenav").style.width="0",document.getElementById("main").style.marginLeft="0"}
// /*opens the normal nav*/function openNav2(){document.getElementById("nav2").style.width="250px",document.getElementById("main").style.marginLeft="250px"}function closeNav(){document.getElementById("nav2").style.width="0",document.getElementById("main").style.marginLeft="0"}
!function(){if(document.cookie){var e=document.cookie.split(";");for(x=0;x<e.length;x++)if(-1 != e[x].indexOf("rules")) return}var t=document.body,o=document.createElement("div");o.setAttribute("id","okRules");var i=document.createElement("p"),n=document.createTextNode(__RULES__),d=document.createElement("a"),c=document.createTextNode("OK");d.setAttribute("id","okClose"),d.appendChild(c),d.addEventListener("click",function(){var e=new Date;e.setFullYear(e.getFullYear()+2),document.cookie="rules=1;expires="+e.toGMTString()+";",t.removeChild(o)},!1);var r=document.createElement("a"),c=document.createTextNode("MORE INFO");r.setAttribute("href","/../rules"),r.setAttribute("id","okCprivacy"),r.appendChild(c),i.appendChild(n),o.appendChild(i),o.appendChild(d),o.appendChild(r),t.appendChild(o),o.classList.add("okcBeginAnimate")}();
function check(){fetch('/../accounts/'+username+'.json').then(response => response.text()).then(data =>{proc(JSON.parse(data).banned);});}
function proc(usr){if(true===usr){document.getElementById('msg_wrapper').innerHTML='<p>You Have Been Banned</p> <a href="/../ban_appeal/">Ban Appeal Here</a>'}}
$(document).ready(function(){
  $('.message').focus();

  client.emit('join',room);
  room=room.substr(1);
  if(localStorage.getItem('chatlog')){

    try{chatlog=JSON.parse(localStorage.getItem('chatlog'));}catch(e){alert(e)}
 }else{
    localStorage.setItem('chatlog','');
 }
  client.on('bounce',function(data){
    switch(data.type){
      case 'join':
        if(localStorage.getItem('username')){
          username=localStorage.getItem('username');
          client.emit('message',{message: `/name ${localStorage.getItem('username')}`,platform});
       }
        document.title='BakChat '+version+' | '+room;
        parseChatLog();
        break;
   }
 });
  
//LOGIN MAINTAINER for less than ideal networks
  client.on('loginquery',function(data){
    // if(message==='login'){
      console.info('received username consistency query : repsonding')
      client.emit('message',{message:'/login '+document.getElementById('login_name').value+' '+document.getElementById('login_psk').value+' d'});
    // }
 });
  
  
  
  client.on('message',function(data){
    data.time=formatDate(new Date());
    appendLog(data);
    if(!focus){
      unread++;
      document.title='BakChat '+version+' | '+room+'('+unread+')';

      $('#icon').prop('href','images/fav-unread.png');
      pingSound.play();
      
      let title ='BakChat '+' | '+data.name;let icon = '/../images/fav.png';let body = data.message;var notification = new Notification(title, { body, icon });

   }
 });
  client.on('usr_JSON',function(data){
    
    // console.log(JSON.stringify(data))
 });

  $('#message').on('keydown',function(e){
    let message=$(this).text();
    if(e.keyCode===13 && !e.shiftKey){
      e.preventDefault();
      $(this).text('');
      if(message.indexOf('/join')===0){
        window.location.pathname='/'+message.split(' ')[1];
     }else if(message.indexOf('/clearlog')===0){
        chatlog[room]=[];
        localStorage.setItem('chatlog',JSON.stringify(chatlog));
        location.reload();
     }else if(message.indexOf('/clearname')===0){
        localStorage.removeItem('username');
     }else{
        if((message.indexOf('/name')===0)){
          localStorage.setItem('username',message.split(' ')[1]);
       }
        
        if(abracabanban===false){
          client.emit('message',{message:'/login '+document.getElementById('login_name').value+' '+document.getElementById('login_psk').value+' d'})
          client.emit('message',{message,platform});
        }
        chathistory.unshift(message);
        index=0;
     }
   }else if(e.keyCode===38){
      e.preventDefault();
      $(this).text(chathistory[index]);
      index=(index+1) % chathistory.length;
   }else if(e.keyCode===40){
      e.preventDefault();
      $(this).text(chathistory[index]);
      index=index-1<0 ? 0 : index-1;
   }
 });
});

function parseChatLog(){
  if(chatlog){
    for(let i in chatlog[room]){
      appendLog(chatlog[room][i],true);
   }
    appendLog({name: '',message: '<a href="chatlogs/'+room+'.html">====== CACHE ======</a>',color: 'white',time: formatDate(new Date()),platform},true);
 }
}

function appendLog(data,avoid){
  let logdiv=document.getElementById('log');
  let template=$('#itemTemplate').html();
  let message=data.message.replace(0,'0');
  let splatform=platform
  let color=data.color||data.name;
  let oppColor='rgb('+(255-hexToRgb(color).r)+','+(255-hexToRgb(color).g)+','+(255-hexToRgb(color).b)+')';//swfgdrrgr
  let time=data.time;
  let type='n';
  let isMe=fixname(data.name)===document.getElementById('login_name').value;
  let id=randHex(6);
  if(data.name==='server'){
    template=template.replace('{{type}}','server');
    data.name='*';
    avoid=true;
 }else if(data.type && data.type==='direct'){
    template=template.replace('{{type}}','pm');
    avoid=true;
 }else if(isMe){
    template=template.replace('{{type}}','me');
 }else{
    template=template.replace('{{type}}','');
 }
  if(data.name===lastuser){
    template=template.replace('{{same}}','same');
 }else{
    template=template.replace('{{same}}','');
 }
  lastuser=data.name;
  data.date=new Date(data.date);
  lasttime=new Date(lasttime);
  // console.log(data.message,days(data.date),days(new Date()));	
  if(data.date && lasttime && days(data.date) > days(lasttime)){
    appendLog({
      name: '',
      message: `------ ${data.date.toDateString()}------`,
      color: 'white',
      time: formatDate(data.date),
      date: false
   },true);
 }
  lasttime=data.date;
  template=template.replace('{{name}}',data.name);
  template=template.replace('{{userlink}}',data.name);
  template=template.replace('{{message}}',message);
  template=template.replace('{{color}}',color);
  template=template.replace('{{oppcolor}}',oppColor);
  template=template.replace('{{_color}}',color);
  template=template.replace('{{_oppcolor}}',oppColor);
  template=template.replace('{{time}}',time);
  template=template.replace('{{id}}',id);
  template=template.replace('{{platform}}',data.platform);
  // prompt('',JSON.stringify(data));
  $('.log').append(template);
  setTimeout(function(){$('#'+id).removeClass('load')},0);
  $('.log .item-name').each(function(){
    $(this).css('color','#'+$(this).data('color'));
 });
  logdiv.scrollTop=logdiv.scrollHeight;
  if(!avoid){
    if(!chatlog[room]){
      chatlog[room]=[];
   }
    chatlog[room].push(data);
    if(chatlog[room].length > 3000){
      chatlog[room]=chatlog[room].slice(chatlog[room].length-3000);
   }

    localStorage.setItem('chatlog',JSON.stringify(chatlog));
 }
}//----------------------------------------------------------------------------------------------------

function formatDate(date){
  let ampm=date.getHours() > 12 ? 'PM' : 'AM';
  let hours=date.getHours() > 12 ? date.getHours()-12 : date.getHours();
  let minutes=date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes();
  return `${hours}:${minutes}${ampm}`;
}

function days(date){
  date=date-date.getTimezoneOffset()*60;
  return Math.round(date/1000/60/60/24);
}

$(window).focus(function(){
  focus=true;
  unread=0;
  document.title='BakChat '+version+' | '+room;
  $('#icon').prop('href','images/fav.png');
}).blur(function(){focus=false;});
// setTimeout(() =>{check()},1000);
// setInterval(() =>{check()},60000);
setInterval(() =>{if((!focus) &&(unread !== 0)){if(abracabanban===true){delete abracabanban;eval('const abracabanban=true')}if(__osc===1){$('#icon').prop('href','images/fav.png');__osc=0;}else{$('#icon').prop('href','/../images/fav-unread.png');__osc=1;}}},280);
function randHex(len){for(var color="",i=0;i<len;i++)color += "0123456789ABCDEF"[Math.floor(16*Math.random())];return color}
/* function randHex(){return Math.floor(Math.random()*16777215).toString(16);}*/

setTimeout(() =>{client.emit('message',{message:'/login '+document.getElementById('login_name').value+' '+document.getElementById('login_psk').value})},1000);

document.getElementById("advert").innerHTML=randAd();
var modal=document.getElementById("myModal");var btn=document.getElementById("myBtn");var span=document.getElementsByClassName("close")[0];modal.style.display="block";span.onclick=function(){modal.style.display="none";};window.onclick=function(event){if(event.target==modal){modal.style.display="none";}}
}catch(e){console.trace(e)}