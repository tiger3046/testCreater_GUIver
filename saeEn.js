wordList = ['slow down','destination','reach','even though','too A to B','A enough to B','invender','gradually','nobody'
,'ridiculous','imagination','make fun of A','modern','in order to A','successful','find out','as soon as A'
,'unexpected','hesitate'];

//重複のない乱数作成
var randoms = [];
var min = 1, max = wordList.length-3; 
for(i = min; i <= max; i++){
  while(true){
    var tmp = intRandom(min, max);
    if(!randoms.includes(tmp)){
      randoms.push(tmp);
      break;
    }
  }
} 
function intRandom(min, max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}
console.log(randoms);

//テスト作成
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