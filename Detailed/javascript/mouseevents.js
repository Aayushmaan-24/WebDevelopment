//eventListener - listen for specific events to make the web page interactive
//                  events:click , mouseover , mousecut
//Syntax : .addEventListener(event , callback);

const myBox = document.getElementById("mybox");


myBox.addEventListener("click",function(event){
    
        event.target.style.backgroundColor = "greenyellow";
        event.target.style.color = "black";
        event.target.textContent = "GoodJob";
});

myBox.addEventListener("mouseover",function(event){
    event.target.style.backgroundColor = "lightblue";
    event.target.style.color = "white";
    event.target.textContent = "Just do it";
})

myBox.addEventListener("mouseout",function(event){
    event.target.style.backgroundColor = "azure";
    event.target.style.color = "greenyellow";
    event.target.textContent = "Click Me";
})