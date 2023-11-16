import { carousel } from "./carousel";
import { utils } from "./utils";
import { burger } from "./burger";
import { animateStart } from "./animateStart";
import { particle } from "./particle";

const logoOne = document.getElementById('cube-one');
const logoTwo = document.getElementById('cube-two');
const logoThree = document.getElementById('cube-three');
logoOne.addEventListener('mouseenter', () => {utils.createConfetti(logoOne)})
logoTwo.addEventListener('mouseenter', () => {utils.createConfetti(logoTwo)})
logoThree.addEventListener('mouseenter', () => {utils.createConfetti(logoThree)})

carousel();
utils.spanText();
utils.addSpanReverse("banner__panel");
burger();
animateStart();
particle();