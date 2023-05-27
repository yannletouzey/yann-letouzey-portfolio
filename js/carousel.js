import { data } from "./data";
console.log(data);
export const carousel = () => {

  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const carousel = document.getElementById("container__carousel");
  const carouselWidth = carousel.clientWidth
  const faces = 4;
  const offsetFace = ((carouselWidth / 2) / 16);
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
  const allFaces = document.querySelectorAll(".container__carousel-face");
  
  for (let index = 0; index < faces; index++) {
    const element = allFaces[index];
    const newDegValue = degValue * index;
    element.style.transform = `rotateY(${newDegValue}deg) translateZ(${offsetFace}rem)`;
    element.classList.add('nbr-' + index)
    const img = document.createElement('img')
    element.append(img)
    img.src = data[index].imgUrl
    const linkDiv = document.createElement('div')
    linkDiv.classList.add('container__carousel--link')
    const link = document.createElement('a')
    const textLink = document.createTextNode(data[index].title)
    link.href = data[index].link
    link.append(textLink)
    linkDiv.append(link)
    element.append(linkDiv)
  }
};