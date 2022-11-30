wordList=["～を必要とする","～を探す","はっきりと","科学者","十分な","実験","突然","緊張する","見えなくなる"
,"到着する","決定する","現れる","発見する","覆う","招待する","高価な","持っている","運ぶ","会社"
,"うまれる","退屈な","動かす","食えな","死ぬ","信じる","恐れて","poor の最上級","100（の)","正しい"
,"それぞれの",",,,もまた","身につけている"];

/** 重複チェック用配列 */
var randoms = [];
/** 最小値と最大値 */
var min = 1, max = wordList.length-3; 
/** 重複チェックしながら乱数作成 */
for(i = min; i <= max; i++){
  while(true){
    var tmp = intRandom(min, max);
    if(!randoms.includes(tmp)){
      randoms.push(tmp);
      break;
    }
  }
} 
/** min以上max以下の整数値の乱数を返す */
function intRandom(min, max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}
console.log(randoms);

let create_yukiEnbutton = document.getElementById('yukiEn_create');
create_yukiEnbutton.addEventListener('click',function(e){
    confirm('test creating start.');
    for(let i=0;i<11;i++){
        let tbl = document.getElementById("testTable");
        let row = document.createElement("tr");
        let cellText = '';
        for (let j=0; j<2; j++){
            let cell = document.createElement('td');
            if(j===0){
                cellText  = document.createTextNode(wordList[randoms[i]]);
            }else{
                 cellText = document.createTextNode('　　　　　　　　　　　　　　　　');
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