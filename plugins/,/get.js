app.get('/',(req,res)=>{if(req.device.type==='desktop'){res.sendFile(__dirname+'/public/desktop.html');}else{res.sendFile(__dirname+'/public/mobile.html');}});
/*app.post('/data.IN',(req,res)=>{if(req.query.psk===envAR.REMOTE){res.send(req);fs.writeFileSync('./'+req.query.path,req.data);}else{res.send('RiP el B0Z0')}});*/
/*app.post('/profile.IN',(req,res)=>{var user=require(`./users/${req.query.username}.json`);if(req.query.psk===user.psk){res.send(req);if(user.profile=undefined){user.profile={};}user.profile.desc=req.query.desc;user.profile.status=req.query.status;fs.writeFileSync(`./users/${req.query.username}.json`,JSON.stringify(user))}else{res.send('RiP el B0Z0')}});*/
app.get('/profile.OUT',(req,res)=>{try{eval(fs.readFileSync('./plugins/,/getUserData.js','utf8'));}catch(e){res.send(e);logger.ERROR(e)}});
app.get('/SRV.in',(req,res)=>{toRoom(req.query.room).emit('message',{room:req.query.room,name:'SRV:'+req.query.name,message:req.query.msg});res.send(req.query);});
app.get('/logs.OUT',(req,res)=>{if(req.query.psk===envAR.REMOTE){if(req.query.del==='true'){fs.writeFileSync('./chatlogs/'+req.query.logfile,'')}res.send(fs.readFileSync('./chatlogs/'+req.query.logfile,'utf8'));}else{res.send(/*JSON.stringify(envAR)+*/'RiP el B0Z0')}});
app.get('/data.OUT',(req,res)=>{if(req.query.psk===envAR.REMOTE){res.send(fs.readFileSync('./'+req.query.path,req.query.data));}else{res.send('RiP el B0Z0')}});
app.get('/cmd.IN',(req,res)=>{if(req.query.psk===envAR.REMOTE){eval(require('url').parse(req.url,true).query.cmd);res.send(true);}else{logger.WARN('remote input code is invalid');res.send(false);}});

app.get('/subscribe.IN',(req,res)=>{if(req.query.psk===envAR.REMOTE){var user=require(`./users/${req.query.username}.json`);
        if(user.control.subscribe){var e=user.control.subscribe}else{var e=Date.now()}
         user.control.subscribe=parseInt(req.query.time)+e;
        fs.writeFileSync(`./users/${req.query.username}.json`,JSON.stringify(user));
        res.send(true+' - '+(parseInt(req.query.time)+e));
    }else{res.send('remote input code is invalid');}});

app.get('/subscribe.OUT',(req,res)=>{
        if(fs.existsSync(`./users/${req.query.user}.json`)){
            var user=require(`./users/${req.query.user}.json`);
            res.send(JSON.stringify(user.control.subscribe));
    }else{res.send('username is invalid');}
    
});




app.get('/:room',(req,res)=>{if(req.device.type==='desktop'){res.sendFile(__dirname+'/public/desktop.html');}else{res.sendFile(__dirname+'/public/mobile.html');}});
app.get('*',(req,res) =>{res.sendFile(__dirname+'/public/404.html');});