import { dataCarousel } from "./data/dataCarousel";
import { spin } from "./spin";

export const carousel = () => {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const carousel = document.getElementById("container__carousel");
  const offsetFace = ((carousel.clientWidth / 2) / 16);
  const degValue = 90;

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
  const projectTest = [];
  const technoImg = ['html','css','js','three','mysql','php','node','express']
  for (let index = 0; index < dataCarousel.length; index++) {
    const face = allFaces[index];
    const newDegValue = degValue * index;
    face.style.transform = `rotateY(${newDegValue}deg) translateZ(${offsetFace}rem)`;
    
    // Create div container => img 
    const boxImg = document.createElement('div')
    boxImg.classList.add('container__carousel--img')
    
    if (dataCarousel[index].seriousProject) {
      // Create img
      const img = document.createElement('img')
      img.src = dataCarousel[index].imgUrl
      boxImg.append(img)
      boxImg.addEventListener('mousemove', (e) => {
        const rect = img.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 100;
        const y = (e.clientY - rect.top) / rect.height * 100;
      
        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transitionProperty = 'transform';
        img.style.transitionDuration = '0.5s';
        img.style.transform = `scale(1.5)`;
      })
      boxImg.addEventListener('mouseleave', (e) => {
        img.style.transitionDuration = '0.5s';
        setTimeout(() => {
          img.style.transformOrigin = `center center`;
        }, 500)
        img.style.transform = `scale(1)`;
      })

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
      technoImg.forEach(technoImgElement => {
        if (dataCarousel[index].techno[technoImgElement]) {
          const img = document.createElement('img')
          img.src = dataCarousel[index].techno[technoImgElement]
          technoBox.append(img)
        }
      })

      // create tag stack
      const tagStack = document.createElement('div')
      tagStack.classList.add('container__carousel--tagStack')
      tagStack.textContent = dataCarousel[index].stack

      // Create button more info
      const btnMoreInfo = document.createElement('button');
      btnMoreInfo.classList.add('container__carousel--btnMoreInfo');

      // hover all face for website not online and only button "more" for website online
      const tooltip = document.createElement('div')
      tooltip.classList.add('container__carousel--tooltip')

      const containerImgTooltip = document.createElement('div')
      containerImgTooltip.classList.add('container__carousel--tooltip-imgTooltip')

      const imgTooltip = document.createElement('img')
      imgTooltip.src = dataCarousel[index].imgUrl

      containerImgTooltip.append(imgTooltip)
      tooltip.append(containerImgTooltip)

      const linkTooltip = document.createElement('a')
      linkTooltip.href = dataCarousel[index].link
      linkTooltip.textContent = dataCarousel[index].title
      linkTooltip.classList.add('container__carousel--tooltip-linkTooltip')
      tooltip.append(linkTooltip)


      const descTooltip = document.createElement('div')
      descTooltip.classList.add('container__carousel--tooltip-descTooltip')
      descTooltip.textContent = dataCarousel[index].desc
      tooltip.append(descTooltip)

      /**
       * 
       * @param {HTMLElement} trigger 
       */
      let btnMoreInfoActive = false;
      const appearTooltip = (triggerOn, triggerOff) => {
        triggerOn.addEventListener('mouseenter', () => {
          btnMoreInfoActive = true
          tooltip.style.transition = "0.4s";
          tooltip.style.transform = "scale(1) translateY(0.5rem) translateX(-0.1rem)";
          tooltip.style.borderRadius = "0";
        })
        triggerOff.addEventListener('mouseleave', () => {
          btnMoreInfoActive = false
          tooltip.style.transform = "";
          tooltip.style.borderRadius = `50%`;
        })
      }

      face.addEventListener('click', () => {
        if (btnMoreInfoActive) {
          tooltip.style.transform = "";
        }
      })

      if (!dataCarousel[index].inline) {
        appearTooltip(face, face)
        linkTooltip.style.textDecoration = `line-through`
        const msgNotOnline = document.createElement('div')
        msgNotOnline.classList.add('container__carousel--tooltip-msgNotOnline')
        msgNotOnline.textContent = `${dataCarousel[index].title} n'est pas encore en ligne`
        tooltip.append(msgNotOnline)
        linkTooltip.addEventListener('mouseenter', () => {
          msgNotOnline.style.display = "block"
        })
        linkTooltip.addEventListener('mouseleave', () => {
          msgNotOnline.style.display = "none"
        })
      } else {
        appearTooltip(btnMoreInfo, face)
        boxDesc.append(btnMoreInfo)
      }
      boxDesc.prepend(tooltip)
      boxDesc.append(linkDiv, technoBox, tagStack)
      face.append(boxImg, boxDesc)
    } else {
      projectTest.push(dataCarousel[index])
      for (let i = 0; i < projectTest.length; i++) {
        const faceProject = document.createElement('div')
        faceProject.style.width = `(${face.clientWidth} / ${projectTest.length})px`
        faceProject.style.aspectRatio = "1/1"
        face.append(faceProject)        
      }
    }
  }

  // Event carousel
  let degrees = 0
  let current = 1
  prevBtn.addEventListener("click", () => {
    if (current > 1) {
      current--
      degrees += degValue;
      spin(carousel, degrees);
      dataCarousel.forEach((dataCarouselElement, dataCarouselIndex) => {
        if (dataCarousel[dataCarouselIndex].id == current) {
            allFaces.forEach((faceElement, indexFace) => {
              if (indexFace == (current + 2)) {
                faceElement.classList.add('hide')
              }
              if (indexFace == (current - 2)) {
                faceElement.classList.remove('hide')
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
      dataCarousel.forEach((dataCarouselElement, dataCarouselIndex) => {
        if (dataCarousel[dataCarouselIndex].id == current) {
          allFaces.forEach((faceElement, indexFace) => {
            if (indexFace == (current + 1)) {
              faceElement.classList.remove('hide')
            }
            if (indexFace == (current - 3)) {
              faceElement.classList.add('hide')
            }
          })
        }
      })
    }
  });
};