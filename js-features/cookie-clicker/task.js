const clicker = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
let clickCounter = 0;

image.onclick = () => {
    if (clickCounter % 2 === 0) {
        image.width = 180;
    } else {
        image.width = 200;
    }
    clickCounter++;
    clicker.textContent = clickCounter;
}