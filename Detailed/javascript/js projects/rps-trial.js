let compsc = 0;
let usersc = 0;
let comp = '';

const abc = document.querySelector('h2');
abc.innerHTML = "Keyboard Rules: r - ROCK , p - PAPER, s - SCISSORS, x - reset, a - auto";

function assignEmoji(choice){
    let emoji='';
    if(choice === 'ROCK'){
        emoji = '👊';
    }
    else if(choice === 'PAPER'){
        emoji = '✋';
    }
    else{
        emoji = '✌️';
    }
    return emoji;
}
function pickComp() {
    const rand = Math.random();
    if (rand >= 0 && rand <= 1/3) {
        comp = 'ROCK';
    } else if (rand > 1/3 && rand <= 2/3) {
        comp = 'PAPER';
    } else {
        comp = 'SCISSOR';
    }
    return comp;
}

function playGame(value) {
    const compvalue = pickComp();
    let userch = assignEmoji(value);
    let compch = assignEmoji(compvalue);
    
    let resultMessage = `User move: ${userch}<br>Computer move: ${compch}<br>`;

    if (value === compvalue) {
        resultMessage += 'It\'s a tie!';
    } else if ((value === 'ROCK' && compvalue === 'SCISSOR') || 
               (value === 'SCISSOR' && compvalue === 'PAPER') || 
               (value === 'PAPER' && compvalue === 'ROCK')) {
        resultMessage += 'User wins!';
        usersc += 1;
    } else {
        resultMessage += 'Computer wins!';
        compsc += 1;
    }

    // Update the result and the score in separate elements
    document.getElementById('result').innerHTML = resultMessage;
    document.getElementById('score').innerHTML = `User score: ${usersc}<br>Computer score: ${compsc}`;
}


document.querySelector('#reset').addEventListener("click",()=>{
    reset();
})
function reset() {
    compsc = 0;
    usersc = 0;

    // Reset the scores and messages
    document.getElementById('result').innerHTML = '';
    document.getElementById('score').innerHTML = '';
}

let isAuto = false;
let intervalID = '';
document.querySelector('#auto').addEventListener("click",()=>{
    auto();
})
function auto(){
    if(!isAuto){
    intervalID = setInterval(() => {
        const chance = pickComp();
        playGame(chance);
    },1000);
    isAuto = true;
    }
    else{
        clearInterval(intervalID);
        isAuto = false;
    }

}

document.body.addEventListener("keydown",(event)=>{
    if(event.key === 'r'){
        playGame('ROCK');
    }
    else if(event.key === 'p'){
        playGame('PAPER');
    }
    else if(event.key === 's'){
        playGame('SCISSOR');
    }
    else if(event.key === 'a'){
        auto();
    }
    else if(event.key === 'x'){
        reset();
    }
    else{
        alert("Key missing");
    }
})
