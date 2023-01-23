

let btncount = document.getElementsByClassName("buybtn");
const ptext = document.getElementById("prodnumb");
let click = 0 ;
console.log(ptext);

function prodnumbcount(){
  click++
  console.log(click);
  ptext.innerHTML = click
}
