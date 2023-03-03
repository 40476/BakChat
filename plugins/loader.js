function load(script){
  eval(fs.readFileSync(script,'utf8'));
}