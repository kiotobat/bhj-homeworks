let counterDead = document.getElementById("dead");
let counterFalse = document.getElementById("lost");

(function click() {
    for (let i = 1; i < 10; i++) {
        let hole  = document.getElementById(`hole${i}`);
        hole.onclick = function() {
            let search = hole.className.includes("hole_has-mole");
            if (search === true) {
                counterDead.textContent = parseInt(counterDead.textContent) + 1;
            } else {
                counterFalse.textContent = parseInt(counterFalse.textContent) + 1;
            }

            if (counterFalse.textContent == 5) {
                alert("Вы проиграли, попробуйте снова!");
                restart();
            } else if (counterDead.textContent == 10) {
                alert("Вы победили!");
                restart();
            }
        };
    }
})();

function restart() {
    counterFalse.textContent = 0;
    counterDead.textContent = 0;
}