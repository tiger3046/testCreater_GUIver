wordListJa = ["国家","判断する",",,,することができる",",,,と手を取り合う","殺す","死","飲用（の）"
,"噴水式の水飲み器","噴水","不公事な","運動","ボイコット","続く","自由に…することができる","どこにでも"
,"業績","奮起する","引用する","殺す","死"];

wordListEn = ["restroom(s)","unfair","movement","drinking" ,"drinking fountain(s)","justice","boycott"
,"last(ed)","be free to ..","anywhere","achievement","inspire(d)","quote","nation","judge(d)","skin","be able to .."
,"join hands with ..","kill(ed)","death"];

let create_yukiEnbutton = document.getElementById('yukiEn_create');
create_yukiEnbutton.addEventListener('click',function(e){
    confirm('test creating start.');
    for(let i=0;i<wordListEn.length;i++){
        let tbl = document.getElementById("testTable");
        let row = document.createElement("tr");
        let cellText = '';
        for (let j=0; j<2; j++){
            let cell = document.createElement('td');
            if(j===0){
                cellText  = document.createTextNode(wordListEn[i]);
            }else{
                 cellText = document.createTextNode(wordListJa[i]);
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
                tbl.appendChild(row);
    }
},false);

//印刷機能
let print_yukiEnbutton = document.getElementById('yukiEn_print');
print_yukiEnbutton.addEventListener('click',function(e){

  let paragraph1 = document.getElementById('p1');
  let hypertext = document.getElementById('h');
  let paragraph2 = document.getElementById('p2');
  let create_button = document.getElementById('yukiEn_create');
  let print_button = document.getElementById('yukiEn_print');

  paragraph1.style.visibility = "hidden";
  paragraph2.style.visibility = "hidden";
  hypertext.style.visibility = "hidden";
  create_button.style.visibility = "hidden";
  print_button.style.visibility = "hidden";

  window.print();

  paragraph1.style.visibility = "visible";
  paragraph2.style.visibility = "visible";
  hypertext.style.visibility = "visible";
  create_button.style.visibility = "visible";
  print_button.style.visibility = "visible";

});