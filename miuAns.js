wordListEn = ["need","find","clearly","scientists","enough","experiment","suddenly","nervous","disappeared"
,"arrive","decided","appeared","discover","cover","invite","expensive","carry","company","born","boring","move"
,"poor","died","believe","afraid","poorest","hundred","right","each","either","wear",'funny','possible'
,'felt','plan'];

wordListJa=["～を必要とする","～を探す","はっきりと","科学者","十分な","実験","突然","緊張する","見えなくなる"
,"到着する","決定する","現れる","発見する","覆う","招待する","高価な","運ぶ","会社"
,"うまれる","退屈な","動かす","貧しい","死ぬ","信じる","恐れて","poor の最上級","100（の)","正しい"
,"それぞれの",",,,もまた","身につけている",'こっけいな、おかしい','可能な、実行できる'
,'fellの過去形','計画'];


let create_yukiEnbutton = document.getElementById('yukiEn_create');
create_yukiEnbutton.addEventListener('click',function(e){
    alert('test creating start.');
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