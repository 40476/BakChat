var user=JSON.parse(fs.readFileSync(`./users/${fixname(req.query.user)}.json`));
  
  if(req.query.step==='img'){res.send(user.profile.img);}
  if(req.query.step==='desc'){res.send(user.profile.desc);}
  if(req.query.step==='bio'){res.send(user.profile.bio);}
  if(req.query.step==='stats'){
res.send(
`<b id="times"hidden>${JSON.stringify(user.times)}</b>
rank: <b id="rank">${user.rank}</b><br>
status: <b id="isLogin">${user.isLogin}</b><br>
credit: <b id="userCredit">${user.credit}</b><br>
`);
  
  }
    // if(req.query.step==='rooms'){}
  if(req.query.step==='banned'){res.send(user.banned);}
  if(req.query.step==='rank'){res.send(user.rank);}
  if(req.query.step==='img'){res.send(user.profile.img);}
  