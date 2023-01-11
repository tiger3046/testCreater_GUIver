wordListEn = ['slow down','destination','reach','even though','too A to B','A enough to B','inventor','gradually','nobody'
,'ridiculous','imagination','make fun of A','modern','in order to A','successful','find out','as soon as A'
,'unexpected','hesitate','separate','anymore','marry','still'];

wordListJa = ['ゆっくりになる','目的地','到達する','たとえ〜でさえ','AすぎてBできない','Bするのに十分Aである','発明家','しだいに','だれも,,,ない'
,'滑稽な','想像力','Aをからかう','現代の','Aするために','成功した','分かる','Aするとすぐ'
,'思いがけない','ためらう','分ける','もう','結婚する','まだ','AかBかどちらか'];


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