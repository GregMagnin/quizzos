import { gsap } from "gsap";

const UP = document.querySelector(".result__teeth-form-up");
const DOWN = document.querySelector(".result__teeth-form-down");

const TL = gsap.timeline();

function delay(n) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

const done = this.async();
TL.to(UP, { top: "-20%", ease: "power2.out", duration: 0.5 });
TL.to(DOWN, { bottom: "0%", ease: "power2.out", duration: 0.5 });
await delay(1000);
done();
