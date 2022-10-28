import { gsap } from "gsap";

const UP = document.querySelector(".result__teeth-form-up");
const UPSQUARE = document.querySelector(".result__rectangle-form-top");
const DOWN = document.querySelector(".result__teeth-form-down");
const DOWNSQUARE = document.querySelector(".result__rectangle-form-bottom");

const BTN = document.querySelector('.result__btn')

BTN.addEventListener('click', () => {
    const TL = gsap.timeline();

TL.to(UP, { top: "-9%", ease: "power2.out", duration: 0.5 });
TL.to(DOWN, { bottom: "0%", ease: "power2.out", duration: 0.5 }, "<");
TL.to(UPSQUARE, { top: "-5%", ease: "power2.out", duration: 0.5 });
TL.to(DOWNSQUARE, { bottom: "6%", ease: "power2.out", duration: 0.5}, "<");

setTimeout(() => {

    location.hash = "#"
}, 1500)
})

