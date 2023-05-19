export const carousel = () => {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const carousel = document.getElementById("main__container--carousel");
  const data = carousel.clientWidth
  const faces = 4;
  const offsetFace = ((data / 2) / 16);
  // const offsetFace = ((data / 2) / 16) + 0.08;
  const lapDeg = 360;
  const degValue = lapDeg / faces;
  let deg = 0
  let current = 0
  const slide = (params) => {
    params.style.transitionDuration = "1.5s";
    params.style.transform = `rotateY(${deg}deg)`;
  };
  prevBtn.addEventListener("click", () => {
    current--
    deg -= degValue;
    slide(carousel);
  });
  nextBtn.addEventListener("click", () => {
    current++
    deg += degValue;
    slide(carousel);
  });
  const allFaces = document.querySelectorAll(".main__container--carousel-face");
  
  for (let index = 0; index < faces; index++) {
    const element = allFaces[index];
    const newDegValue = degValue * index;
    element.style.transform = `rotateY(${newDegValue}deg) translateZ(${offsetFace}rem)`;
    element.classList.add('nbr-' + index)
  }
};