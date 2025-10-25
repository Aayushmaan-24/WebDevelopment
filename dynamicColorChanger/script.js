const text = document.getElementById("text");
const styleInitial = window.getComputedStyle(text, null).getPropertyValue('font-size');
const InitialSize = parseFloat(styleInitial);


function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
function changeColor(){
    document.body.style.backgroundColor = getRandomColor();
}

const reset = () => {
    document.body.style.backgroundColor = 'white';
    text.style.fontSize = InitialSize + 'px';

}

const incFont = () => {
    const style = window.getComputedStyle(text, null).getPropertyValue('font-size');
    const currentSize = parseFloat(style);
    text.style.fontSize = (currentSize + 2) + 'px';
}

const decFont = () => {
    const style = window.getComputedStyle(text, null).getPropertyValue('font-size');
    const currentSize = parseFloat(style);
    text.style.fontSize = (currentSize - 2) + 'px';
}