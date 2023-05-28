import { dataCarousel } from "./dataCarousel";
export const carousel = () => {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const carousel = document.getElementById("container__carousel");
  const allFaces = document.querySelectorAll(".container__carousel--face");

  const carouselWidth = carousel.clientWidth
  const faces = allFaces.length;
  const offsetFace = ((carouselWidth / 2) / 16);
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
    console.log(allFaces[0]);
    deg += degValue;
    slide(carousel);
  });
  nextBtn.addEventListener("click", () => {
    current++
    deg -= degValue;
    slide(carousel);
  });

  for (let index = 0; index < allFaces.length; index++) {
    const face = allFaces[index];
    const newDegValue = degValue * index;
    face.style.transform = `rotateY(${newDegValue}deg) translateZ(${offsetFace}rem)`;
    face.classList.add('nbr-' + index)

    // Create div container => img 
    const boxImg = document.createElement('div')
    boxImg.classList.add('container__carousel--img')
    face.append(boxImg)

    // Create img
    const img = document.createElement('img')
    img.src = dataCarousel[index].imgUrl
    boxImg.append(img)

    // Create div container => img 
    const boxDesc = document.createElement('div')
    boxDesc.classList.add('container__carousel--desc')
    face.append(boxDesc)
    
    // Create link
    const linkDiv = document.createElement('div')
    linkDiv.classList.add('container__carousel--link')
    boxDesc.append(linkDiv)

    // Create box img techno
    const technoBox =  document.createElement('div')
    technoBox.classList.add('container__carousel--techno')
    if (dataCarousel[index].techno.html) {
      const imgHtml = document.createElement('img')
      imgHtml.src = dataCarousel[index].techno.html
      technoBox.append(imgHtml)
    }
    if (dataCarousel[index].techno.css) {
      const imgCss = document.createElement('img')
      imgCss.src = dataCarousel[index].techno.css
      technoBox.append(imgCss)
    }
    if (dataCarousel[index].techno.js) {
      const imgJs = document.createElement('img')
      imgJs.src = dataCarousel[index].techno.js
      technoBox.append(imgJs)
    }
    if (dataCarousel[index].techno.php) {
      const imgPhp = document.createElement('img')
      imgPhp.src = dataCarousel[index].techno.php
      technoBox.append(imgPhp)
    }
    if (dataCarousel[index].techno.mysql) {
      const imgSql = document.createElement('img')
      imgSql.src = dataCarousel[index].techno.mysql
      technoBox.append(imgSql)
    }
    boxDesc.append(technoBox)

    // create btn "more info"
    const btn = document.createElement('button')
    btn.classList.add("btn-more")
    btn.classList.add("btn-more-info")
    btn.setAttribute('id', "btn-more-info-" + (index + 1))
    for (let s = 0; s < 11; s++) {
      const spanButton = document.createElement('span')
      btn.append(spanButton)
    }
    const p = document.createElement('p')
    p.innerHTML = "En savoir plus"
    btn.append(p)
    boxDesc.append(btn)

    // Create div/span for rotate animation text
    for (let i = 1; i <= 2; i++) {
      const link = document.createElement('a')
      const div = document.createElement('div')
      div.classList.add('containerLink')
      div.classList.add('s' + i)
      const span = document.createElement('span')
      div.append(span)
      link.append(div)
      const textLink = document.createTextNode(dataCarousel[index].title)
      link.href = dataCarousel[index].link
      span.append(textLink)
      linkDiv.append(link) 
    }
  }
};