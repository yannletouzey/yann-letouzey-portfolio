import { dataCarousel } from "./dataCarousel";

export const carousel = () => {
  const banner = document.querySelector('#banner__panel')
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const carousel = document.getElementById("container__carousel");
  const allFaces = document.querySelectorAll(".container__carousel--face");
  
  const carouselWidth = carousel.clientWidth
  const offsetFace = ((carouselWidth / 2) / 16);
  const lapDeg = 360;
  const degValue = lapDeg / 4;
  let deg = 0
  let current = 1
  
  const slide = (params) => {
    params.style.transitionDuration = "0.6s";
    params.style.transform = `rotateY(${deg}deg)`;
  };

  prevBtn.addEventListener("click", () => {
    if (current > 1) {
      current--
      deg += degValue;
      slide(carousel);
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
      deg -= degValue;
      slide(carousel);
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
  const technoImg = ['html','css','js','three','mysql','php']
  for (let index = 0; index < allFaces.length; index++) {
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
    face.append(boxImg, boxDesc)    
    
    // Create link
    const linkDiv = document.createElement('div')
    linkDiv.classList.add('container__carousel--link')

    // Create box img techno
    const technoBox =  document.createElement('div')
    technoBox.classList.add('container__carousel--techno')
    technoImg.forEach((imgT, i) => {
      console.log(imgT);
      if (dataCarousel[index].techno[imgT]) {
        const img = document.createElement('img')
        img.src = dataCarousel[index].techno[imgT]
        technoBox.append(img)
      }
    })
    boxDesc.append(linkDiv, technoBox)

    // create btn "more info"
    // const btn = document.createElement('button')
    // btn.classList.add("btn-more", "btn-more-info")
    // btn.setAttribute('id', "btn-more-info-" + (index + 1))
    // for (let s = 0; s < 11; s++) {
    //   const spanButton = document.createElement('span')
    //   btn.append(spanButton)
    // }
    // const p = document.createElement('p')
    // p.innerHTML = "En savoir plus"
    // btn.append(p)
    // boxDesc.append(btn)

    // Create div/span for rotate animation text
    for (let i = 1; i <= 2; i++) {
      const link = document.createElement('a')
      const div = document.createElement('div')
      div.classList.add('containerLink', 's' + i)
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