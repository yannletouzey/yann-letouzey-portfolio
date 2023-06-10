export const spin = (carousel, deg) => {
    carousel.style.transitionDuration = "0.6s";
    carousel.style.transform = `rotateY(${deg}deg)`;
}