const mycheck = document.getElementById("mycheck");
const visa = document.getElementById("Visa");
const mastercard = document.getElementById("Mastercard");
const netb = document.getElementById("Netbanking");
const card = document.getElementById("Credit/Debit");
const sub_result = document.getElementById("sub");
const pay_result = document.getElementById("pay");
const submit = document.getElementById("submit");

submit.onclick = function(){
    if (mycheck.checked)
    {
        sub_result.textContent = "You are subscribed!!";
    }
    else{
        sub_result.textContent = "You are not subscribed!!";
    }

    if (visa.checked){
        pay_result.textContent = "You selected Visa";
    }
    else if (mastercard.checked){
        pay_result.textContent = "You selected Mastercard";
    }
    else if (netb.checked){
        pay_result.textContent = "You selected Netbanking";
    }
    else if(card.checked){
        pay_result.textContent = "You selected Credit/Debit Card";
    }
    
}