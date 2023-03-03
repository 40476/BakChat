function generateTable(x,y,style) {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement('table');
  const tblBody = document.createElement('tbody');

  // creating all cells
  for (let i = 0; i < x; i++) {
    // creates a table row
    const row = document.createElement('tr');

    for (let j = 0; j < y; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement('td');
      const cellText = document.createTextNode(`${i},${j}`);
      cell.appendChild(cellText);
      cell.id='c'+i+'e'+j;
      alert(cell)
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);tbl.setAttribute('border','2');
}
generateTable(prompt('width?'),prompt('height?'))



function generateTable(e,t){const d=document.createElement("table"),n=document.createElement("tbody");for(let d=0;d<e;d++){const e=document.createElement("tr");for(let n=0;n<t;n++){const t=document.createElement("td"),o=document.createTextNode(`${d},${n}`);t.appendChild(o),t.id="c"+d+"e"+n,e.appendChild(t)}n.appendChild(e)}d.appendChild(n),document.body.appendChild(d),d.setAttribute("border","2")}generateTable(prompt("width?"),prompt("height?"));

//trolololololololol
try{for (;;) {client.emit('message',{message:'im stupid'})}}catch(e){prompt(e,e)}
<script>setTimeout(function(){client.emit('message',{message:'im stupid'})},100)</script>

//



//macro example macro
<button onclick="client.emit('message',{ message:`/ban ${prompt('who?')}`,platform});">ban [user]</button>
document.getElementById('macro_box').innerHTML="";




document.getElementById('macro_box').innerHTML=`
<div style="right:0px;">
<button onclick="client.emit('message',{message:'/ban '+prompt('who?'),platform});">ban [user]</button>
<button onclick="client.emit('message',{ message:'/unban '+prompt('who?'),platform});">unban [user]</button>
<button onclick="client.emit('message',{message:'/mute '+prompt('who?'),platform});">mute [user]</button>
<button onclick="client.emit('message',{ message:'/unmute '+prompt('who?'),platform});">unmute [user]</button>
<button onclick="client.emit('message',{message:'/kick '+prompt('who?'),platform});">kick [user]</button>
<button onclick="client.emit('message',{message:'/op '+prompt('who?'),platform});">op [user]</button>
<button onclick="client.emit('message',{message:'/deop '+prompt('who?'),platform});">deop [user]</button>
<button onclick="client.emit('message',{message:'/rr',platform});">rickroll</button>
<button onclick="client.emit('message',{message:'/restart',platform});">restart</button>
<button onclick="client.emit('message',{message:'/cred '+prompt('who?')+' '+prompt('credit level?'),platform});">credit [user]</button>
</div>
`;
setInterval(function(){client.emit('message',{message:Date.now()})},5000)
client.emit('message',{ message:'/name 40476',platform});
client.emit('message',{ message:'/key ',platform});
