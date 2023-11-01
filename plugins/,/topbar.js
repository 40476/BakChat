// https://talyian.github.io/ansicolors/

setInterval(function(){httg.get({host:'networkcheck.kde.org',port:80},function(res){isOnline='\x1b[48;5;40m';}).on('error',function(e){isOnline='\x1b[41m';});},30000);

setInterval(function(){
    console.clear();
    
    uptime=Math.trunc((Date.now()-initTime)/1000);
    if(config.server.console.uptime2HMS){
        uptime=formatHMS(uptime)
        
    }
    if((((Date.now()-consoleLastRefresh)-config.server.console.consoleRefreshRate)*-1)<0){mtxsr='\x1b[41m'}else{mtxsr='\x1b[42m'};
    bar='';
    for(let i=0;i<process.stdout.columns;i++){bar=bar+'-'};
    
    for (let i=0;i<linez(recentHistory);i++){
        if(linez(recentHistory)>(process.stdout.rows-3)){recentHistory=RemoveFirstLine(recentHistory)}
    }
    
    console.log(version+' - '+Date.now()+' -{'+mtxsr+(((Date.now()-consoleLastRefresh)-config.server.console.consoleRefreshRate)*-1)+'\x1b[0m & '
    +uptime+'}['+isOnline+config.server.name+':'+config.server.port+'\x1b[0m]\n'+bar+recentHistory)
    ;consoleLastRefresh=Date.now();
    
},config.server.console.consoleRefreshRate);