function fixname(name){
  for(let i=0;i<20;i++){
  try{name=name.replace(config.ranks.owner.symbol.s,'');}catch(e){try{logger.ERROR(e)}catch(e){}}
  try{name=name.replace(config.ranks.owner.symbol.e,'');}catch(e){try{logger.ERROR(e)}catch(e){}}
  try{name=name.replace(config.ranks.admin.symbol.s,'');}catch(e){try{logger.ERROR(e)}catch(e){}}
  try{name=name.replace(config.ranks.admin.symbol.e,'');}catch(e){try{logger.ERROR(e)}catch(e){}}
  try{name=name.replace(config.ranks.moderator.symbol.s,'');}catch(e){try{logger.ERROR(e)}catch(e){}}
  try{name=name.replace(config.ranks.moderator.symbol.e,'');}catch(e){try{logger.ERROR(e)}catch(e){}}
  try{name=name.replace(config.ranks.helper.symbol.s,'');}catch(e){try{logger.ERROR(e)}catch(e){}}
  try{name=name.replace(config.ranks.helper.symbol.e,'');}catch(e){try{logger.ERROR(e)}catch(e){}}
  try{name=name.replace(config.ranks.user.symbol.s,'');}catch(e){try{logger.ERROR(e)}catch(e){}}
  try{name=name.replace(config.ranks.user.symbol.e,'');}catch(e){try{logger.ERROR(e)}catch(e){}}
  
  }
  // console.log(name)
  return name;
}
try{fs.writeFileSync('./public/assets/fixnames.js',fs.readFileSync('./plugins/,/fixnames.js','utf8'))}catch(e){}