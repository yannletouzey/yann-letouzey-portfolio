import { carousel } from "./carousel";
import { utils } from "./utils";
import { burger } from "./burger";
import { animateStart } from "./animateStart";
import { particle } from "./particle";
import confetti from "./confetti";

// confetti to hover logo contact
const logo = document.querySelectorAll('.header__menu--cube');
for (const iterator of logo) {
    iterator.addEventListener('mouseenter', () => {confetti.createConfetti(iterator)})
}

// confetti to hover button

// const leftButton =document.getElementById('arrow-prev');
// const rightButton =document.getElementById('arrow-next');
// leftButton.addEventListener('mouseenter', () => {setTimeout(() => {
//     utils.createConfettiButton(leftButton, 'prev', -2)
// }, 300);})
// rightButton.addEventListener('mouseenter', () => {setTimeout(() => {
//     utils.createConfettiButton(rightButton, 'next', 2)
// }, 300);})

carousel();
utils.spanText();
utils.addSpanReverse("banner__panel");
burger();
animateStart();
particle();