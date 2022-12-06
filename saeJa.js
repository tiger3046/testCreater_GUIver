wordList = ['ゆっくりになる','目的地','到達する','たとえ〜でさえ','AすぎてBできない','Bするのに十分Aである','発明家','しだいに','だれも,,,ない'
,'滑稽な','想像力','Aをからかう','現代の','Aするために','成功した','分かる','Aするとすぐ'
,'思いがけない','ためらう'];

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

//テスト削除機能
let removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', function(e){
  alert('test remove!');
    //ul要素を取得
    let languageList = document.getElementById('testTable');
    //リストの末尾から要素を削除
    for(let i=0;i<11;i++){
      languageList.removeChild(languageList.lastElementChild);
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
  let remove_button = document.getElementById('removeButton');

  paragraph1.style.visibility = "hidden";
  paragraph2.style.visibility = "hidden";
  hypertext.style.visibility = "hidden";
  create_button.style.visibility = "hidden";
  print_button.style.visibility = "hidden";
  remove_button.style.visibility = "hidden";

  window.print();

  paragraph1.style.visibility = "visible";
  paragraph2.style.visibility = "visible";
  hypertext.style.visibility = "visible";
  create_button.style.visibility = "visible";
  print_button.style.visibility = "visible";
  remove_button.style.visibility = "visible";

});