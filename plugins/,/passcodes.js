var envAR={};
if(config.server.passcodes.REMOTE==='.env'){envAR.REMOTE=process.env.REMOTE}else{envAR.REMOTE=config.server.passcodes.REMOTE}
if(config.server.passcodes.OWNER==='.env'){envAR.OWNER=process.env.OWNER}else{envAR.OWNER=config.server.passcodes.OWNER}
if(config.server.passcodes.ADMIN==='.env'){envAR.ADMIN=process.env.ADMIN}else{envAR.ADMIN=config.server.passcodes.ADMIN}
if(config.server.passcodes.MODr==='.env'){envAR.MODr=process.env.MODr}else{envAR.MODr=config.server.passcodes.MODr}
if(config.server.passcodes.HELPr==='.env'){envAR.HELPr=process.env.HELPr}else{envAR.HELPr=config.server.passcodes.HELPr}
if(config.server.passcodes.salt==='.env'){envAR.salt=process.env.salt}else{envAR.salt=config.server.passcodes.salt}