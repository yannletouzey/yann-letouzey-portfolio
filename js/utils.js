import confetti from 'canvas-confetti';
export const utils = {
  addSpan: function (id) {
    const textWithId = document.querySelector("." + id);
    const text = document.querySelector("." + id).textContent;
    textWithId.innerHTML = "";
    let textArray = Array.from(text);
    for (let i = 0; i < textArray.length; i++) {
      let e = textArray[i];
      textWithId.innerHTML += `<span id=${i}>${e}</span>`;
    }
  },
  spanText: function () {
    const spanText = document.querySelectorAll(
      ".container__carousel--link div"
    );
    spanText.forEach((element) => {
      const letters = element.children[0].textContent.split("");
      element.innerHTML = "";
      letters.forEach((e, index) => {
        element.innerHTML += `<span style="display: inline-block; transition: 0.5s; transition-delay: ${0.03 * index}s">${e}</span>`;
      });
    });
  },
  addSpanReverse: function (id) {
    const textWithId = document.getElementById("" + id);
    let text = document.getElementById("" + id).textContent;
    text = [...text].reverse().join("");
    textWithId.innerHTML = "";
    let textArray = Array.from(text);
    for (let i = 0; i < textArray.length; i++) {
      let e = textArray[i];
      textWithId.innerHTML += `<span id=${i}>${e}</span>`;
    }
  },
  coorLogo: (logo) => {
    let viewportHeight = window.innerHeight;
    let yLogo = logo.getBoundingClientRect().top + logo.getBoundingClientRect().height
    let yStartConfetti = ((yLogo / viewportHeight) * 100) / 100;
    let viewportWidth = window.innerWidth;
    let xLogo = logo.getBoundingClientRect().left + logo.getBoundingClientRect().width / 2
    let xStartConfetti = ((xLogo / viewportWidth) * 100) / 100;
    addEventListener('resize', () => {
        viewportHeight = window.innerHeight;
        yLogo = logo.getBoundingClientRect().top + logo.getBoundingClientRect().height / 2
        yStartConfetti = ((yLogo / viewportHeight) * 100) / 100;
        viewportWidth = window.innerWidth;
        xLogo = logo.getBoundingClientRect().left + logo.getBoundingClientRect().width / 2
        xStartConfetti = ((xLogo / viewportWidth) * 100) / 100;
    })
    return {yStartConfetti, xStartConfetti}
  },
  createConfetti: (logo) => {
    confetti({
        spread: 40,
        startVelocity: 6,
        particleCount: Math.trunc(logo.getBoundingClientRect().width),
        origin: { 
            x: utils.coorLogo(logo).xStartConfetti, 
            y: utils.coorLogo(logo).yStartConfetti
        },
        colors: ['#2c2c2c96', '#3d3c3c', '#4f4f4f', '#837d7d', '#555555']
    });
}
};
