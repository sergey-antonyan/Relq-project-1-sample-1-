const big = document.querySelector("#big");
let small = document.querySelector("#small");

big.addEventListener("click", ()=> hjh ());

function hjh (){
    if (big.textContent == "Categories" ){
      small.style.color = 'red';
    }
    console.log(small.style.fontSize);
}
console.log(big.textContent);