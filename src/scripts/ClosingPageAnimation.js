import { gsap } from "gsap";

const UP = document.querySelector(".teeth-form-up");
const UPSQUARE = document.querySelector(".rectangle-form-top");
const DOWN = document.querySelector(".teeth-form-down");
const DOWNSQUARE = document.querySelector(".rectangle-form-bottom");

const BTN = document.querySelector('.result__btn')

BTN.addEventListener('click', async () => {
    const TL = gsap.timeline();

TL.to(UP, { top: "-9%", ease: "power2.out", duration: 0.5 });
TL.to(DOWN, { bottom: "0%", ease: "power2.out", duration: 0.5 }, "<");
TL.to(UPSQUARE, { top: "-5%", ease: "power2.out", duration: 0.5 });
await TL.to(DOWNSQUARE, { bottom: "6%", ease: "power2.out", duration: 0.5}, "<");

    location.replace("?OpeningAnimation#")
})

