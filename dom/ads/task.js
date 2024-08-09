const arrOfCases = Array.from(document.querySelectorAll('.rotator__case'));
let activeCase = document.querySelector('.rotator__case_active');
activeCase.style.color = activeCase.dataset.color;

function interval(speed) {
    let intervalId = setInterval(() => {
        const allId = arrOfCases.length - 1;
        let index = arrOfCases.indexOf(activeCase);

        activeCase.classList.remove('rotator__case_active');
        activeCase = arrOfCases[index + 1];
        if (index === allId) {
            index = 0;
            activeCase = arrOfCases[index];
        }

        activeCase.classList.add('rotator__case_active');
        activeCase.style.color = activeCase.dataset.color;
        interval(activeCase.dataset.speed);
        clearInterval(intervalId);
    }, speed);
}

interval(activeCase.dataset.speed);