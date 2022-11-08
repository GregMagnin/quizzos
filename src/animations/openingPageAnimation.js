import {gsap} from "gsap";

const UP = document.querySelector(".teeth-form-up");
const UPSQUARE = document.querySelector(".rectangle-form-top");
const DOWN = document.querySelector(".teeth-form-down");
const DOWNSQUARE = document.querySelector(".rectangle-form-bottom");

UP.style.top = "-1%";
DOWN.style.bottom = 0;
UPSQUARE.style.top = 0;
DOWNSQUARE.style.bottom = 0;

const TL = gsap.timeline();

TL.to(UPSQUARE, {top: "-100%", ease: "power2.out", duration: 0.7});
TL.to(DOWNSQUARE, {bottom: "-100%", ease: "power2.out", duration: 0.7}, "<");
TL.to(UP, {top: "-100%", ease: "power2.out", duration: 0.5});
TL.to(DOWN, {bottom: "-100%", ease: "power2.out", duration: 0.5}, "<");
