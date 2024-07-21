const timeValue = function () {
    let timer = document.getElementById("timer");
    if (timer.textContent === "0") {
        alert("Вы победили в конкурсе");
    } else {
        timer.textContent--;
    }
}
const timerInterval = setInterval(timeValue, 1000);