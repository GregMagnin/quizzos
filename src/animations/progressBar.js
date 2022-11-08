let progressBar = document.getElementById('js-progress-bar');
let valueProgressBar = document.getElementById('js-value-progress-bar');

let goodAnswer = parseInt(localStorage.getItem('number_good_answers'))
let nbOfQuestions = parseInt(localStorage.getItem('questions'))
let goodAnswerText = document.getElementById('goodAnswer');
goodAnswerText.innerText = localStorage.getItem('number_good_answers');
let nbOfQuestionsText = document.getElementById('nbOfQuestions');
nbOfQuestionsText.innerText = localStorage.getItem('questions');

let progressValue = 0;
let progressEndValue = Math.trunc((goodAnswer / nbOfQuestions) * 100);
let speedAnimation = 25;

let progressAnimation = setInterval(() => {
    progressValue++;
    valueProgressBar.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #ED8681 ${progressValue * 3.6}deg,
        #e0d3d5 ${progressValue * 3.6}deg
    )`;
    if (progressValue == progressEndValue) {
        clearInterval(progressAnimation)
    }
}, speedAnimation);
