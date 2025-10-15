


const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel");
const min = 1 , max = 6;
let randomnum;


mybutton.onclick = function(){
    randomnum = Math.floor(Math.random() * (max - min + 1)) + min;
    mylabel.textContent = randomnum;
};