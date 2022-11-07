const REPETITIONS = 3;
const DURATION = 1200;

const animated = document.querySelector(".circle_animation");
const spanRepetition = document.querySelector("span[data-repetition]");
const elem = document.querySelector(".counter");


spanRepetition.dataset.repetition = REPETITIONS;
elem.style.setProperty("--duration", `${DURATION}ms`);
elem.style.setProperty("--repetitions", `${REPETITIONS}`);

animated.addEventListener("animationiteration", () => {
    const r = parseInt(spanRepetition.dataset.repetition);
    spanRepetition.dataset.repetition = r - 1;
});

animated.addEventListener("animationend", () => {
    spanRepetition.dataset.repetition = "0";
    location.hash = "questions"
});

