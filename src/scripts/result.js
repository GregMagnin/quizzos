let progressBar = document.getElementById('js-progress-bar');
let valueProgressBar = document.getElementById('js-value-progress-bar');

let progressValue = 0;
let progressEndValue = 85;
let speedAnimation = 30;

let progressAnimation = setInterval(() => {
    progressValue++;
    valueProgressBar.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #ED8681 ${progressValue * 3.6}deg,
        #e0d3d5 ${progressValue * 3.6}deg
    )`;
    if(progressValue == progressEndValue){
        clearInterval(progressAnimation)
    }
}, speedAnimation);