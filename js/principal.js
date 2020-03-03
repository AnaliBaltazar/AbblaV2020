
let element23 = document.getElementById("backColor");
let element24 = document.getElementById("btnChange");


function elementChange1(){
    element23.classList.toggle("change");
}
document.getElementById("btnChange").onclick = function (){
    elementChange1();
}