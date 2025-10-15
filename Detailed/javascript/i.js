const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const count = document.getElementById("count");
let c = 0;

increase.onclick = function(){
    c++;
    count.textContent = c;
}

decrease.onclick = function(){
    c--;
    count.textContent = c;
}
reset.onclick = function(){
    c = 0;
    count.textContent = c;
}
