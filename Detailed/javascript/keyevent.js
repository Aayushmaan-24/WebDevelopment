const mybox = document.getElementbyId("key");
const move = 10;
let x, y = 0;


document.addEventListener("keydown",event =>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= move;
                break;
            case "ArrowDown":
                y += move;
                break;
            case "ArrowLeft":
                x -= move;
                break;
            case "ArrowRight":
                x += move;
                break;
        }
        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;
    }
})
