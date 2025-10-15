//Step1: create new element

const newh1 = document.createElement("h1");

//Step2: properties and attributes
newh1.textContent = "Welcome";
newh1.style.color = "green";
newh1.id = "h1";
newh1.style.textAlign = "center";


//Step3: append element to the DOM

//document.body.prepend(newh1); //append at the bottom and prepend at the beginning
//document.getElementById("box1").append(newh1);

//const box3 = document.getElementById("box3"); 
//document.body.insertBefore(newh1 , box3); //inserts the new element before the current element

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newh1,boxes[0]);

//Step4: removes from the DOM
//document.getElementById("box1").removeChild(newh1);