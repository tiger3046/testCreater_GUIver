//'use strict'
let btn1 = document.getElementById("triggerButton1");
btn1.addEventListener('click',function(e){
    let elements = document.getElementsByTagName('a');
    confirm('Are you ok creating ' + elements[0].textContent + 'test?');
},false);