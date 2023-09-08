import { dataCarousel } from "./data/dataCarousel";
import { spin } from "./spin";

export const carousel = () => {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const carousel = document.getElementById("container__carousel");
  const offsetFace = ((carousel.clientWidth / 2) / 16);
  const degValue = 90;
  let degrees = 0
  let current = 1

  for (let index = 0; index < dataCarousel.length; index++) {
    const container__carousel__face = document.createElement("div");
    container__carousel__face.classList.add("container__carousel--face");
    if (index === 0) {
      container__carousel__face.setAttribute("id", "container__carousel--face");
    }
    if (index >= 4) {
      container__carousel__face.classList.add("hide");
    }
    carousel.appendChild(container__carousel__face);
  }
  const container__carousel__face = document.createElement("div");
  container__carousel__face.classList.add("container__carousel-glow-ground");
  container__carousel__face.setAttribute("id", "container__carousel-glow-ground");
  carousel.appendChild(container__carousel__face);

  const allFaces = document.querySelectorAll(".container__carousel--face");  

  const technoImg = ['html','css','js','three','mysql','php','node','express']
  for (let index = 0; index < dataCarousel.length; index++) {
    const face = allFaces[index];
    const newDegValue = degValue * index;
    face.style.transform = `rotateY(${newDegValue}deg) translateZ(${offsetFace}rem)`;

    // Create div container => img 
    const boxImg = document.createElement('div')
    boxImg.classList.add('container__carousel--img')

    // Create img
    const img = document.createElement('img')
    img.src = dataCarousel[index].imgUrl
    boxImg.append(img)

    // Create div container => desc 
    const boxDesc = document.createElement('div')
    boxDesc.classList.add('container__carousel--desc')

    // Create link
    const linkDiv = document.createElement('div')
    linkDiv.classList.add('container__carousel--link')

    // Create div/span for rotate animation text
    for (let i = 1; i <= 2; i++) {
      const link = document.createElement('a')
      const div = document.createElement('div')
      div.className = `containerLink s${i}`
      const span = document.createElement('span')
      div.append(span)
      link.append(div)
      const textLink = document.createTextNode(dataCarousel[index].title)
      link.href = dataCarousel[index].link
      span.append(textLink)
      linkDiv.append(link) 
    }

    // Create box img techno
    const technoBox =  document.createElement('div')
    technoBox.classList.add('container__carousel--techno')
    technoImg.forEach((imgTechno, i) => {
      if (dataCarousel[index].techno[imgTechno]) {
        const img = document.createElement('img')
        img.src = dataCarousel[index].techno[imgTechno]
        technoBox.append(img)
      }
    })

    // create tag stack
    const tagStack = document.createElement('div')
    tagStack.classList.add('container__carousel--tagStack')
    tagStack.textContent = dataCarousel[index].stack
    
    if (!dataCarousel[index].inline) {
      const tooltip = document.createElement('div')
      tooltip.classList.add('container__carousel--tooltip')
      tooltip.textContent = `${dataCarousel[index].title} n'est pas encore en ligne`
      boxDesc.prepend(tooltip)
    }

    boxDesc.append(linkDiv, technoBox, tagStack)
    face.append(boxImg, boxDesc)
  }

  prevBtn.addEventListener("click", () => {
    if (current > 1) {
      current--
      degrees += degValue;
      spin(carousel, degrees);
      dataCarousel.forEach((dc, i) => {
        if (dataCarousel[i].id == current) {
            allFaces.forEach((f, fi) => {
              if (fi == (current + 2)) {
                f.classList.add('hide')
              }
              if (fi == (current - 2)) {
                f.classList.remove('hide')
              }
            })
          }
      })
    }
  });
  nextBtn.addEventListener("click", () => {
    if (current < dataCarousel.length) {
      current++
      degrees -= degValue;
      spin(carousel, degrees);
      dataCarousel.forEach((dc, i) => {
        if (dataCarousel[i].id == current) {
          allFaces.forEach((f, fi) => {
            if (fi == (current + 1)) {
              f.classList.remove('hide')
            }
            if (fi == (current - 3)) {
              f.classList.add('hide')
            }
          })
        }
      })
    }
  });
};