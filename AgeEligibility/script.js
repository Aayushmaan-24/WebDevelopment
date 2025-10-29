document.getElementById('checkAgeButton').addEventListener('click', () => {
    const age = parseInt(document.getElementById('ageInput').value);
    const text = document.getElementById('resultMessage');
    if (age >= 18){
        text.innerHTML = "You are eligible to vote. <br/>You are eligible to drive.";
    }
    else if(age >= 16){
        text.innerHTML = "You are eligible to vote. <br/>You are not eligible to drive.";
    }
    else{
        text.innerHTML = "You are not eligible to vote. <br/>You are not eligible to drive.";
    }
})