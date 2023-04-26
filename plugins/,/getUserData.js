var user=JSON.parse(fs.readFileSync(`./users/${fixname(req.query.user)}.json`));
if((Date.now()-user.times[user.times.length-1][0])>0){var ol=`online for ${formatHMS((Date.now()-user.times[user.times.length-1][0]))}`}else{var ol=`offline`;}
  if(req.query.step==='img'){res.send(user.profile.img);}
  if(req.query.step==='desc'){res.send(user.profile.desc);}
  if(req.query.step==='bio'){res.send(user.profile.bio);}
  if(req.query.step==='stats'){
    
    
    // var tlen=user.times.length-1
res.send(
`<b id="times"hidden>${JSON.stringify(user.times)}</b>
rank: <b id="rank">${user.rank}</b><br>
status: <b id="isLogin">${ol}</b><br>
credit: <b id="userCredit">${user.credit}</b><br>
`//+(user.times[user.times.length-1][1]-user.times[user.times.length-1][0])
//+Math.trunc((Date.now()-user.times[user.times.length-1][0])/1000)
);
  
  }
    // if(req.query.step==='rooms'){}
  if(req.query.step==='banned'){res.send(user.banned);}
  if(req.query.step==='rank'){res.send(user.rank);}
  if(req.query.step==='img'){res.send(user.profile.img);}
  