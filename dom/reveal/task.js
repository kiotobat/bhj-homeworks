const arrOfReveals = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener('scroll', appearanceOrHide);

function appearanceOrHide() {
    arrOfReveals.forEach((reveal) => {
        const { top, bottom } = reveal.getBoundingClientRect();
        const quarterOfReveal = (bottom - top) / 4;

        if (top + quarterOfReveal < window.innerHeight && bottom > quarterOfReveal) {
            reveal.classList.add('reveal_active');
        } else if (top + quarterOfReveal > window.innerHeight || bottom < quarterOfReveal) {
            reveal.classList.remove('reveal_active');
        }
    })
}