import { dataContact } from "./dataContact.js";

const header__menu = document.getElementById('header__menu')

const faces = [
    'front',
    'back',
    'left',
    'right',
    'top',
    'bottom'
]

for (let c = 0; c < 2; c++) {
    const header__menuCube = document.createElement('div')
    for (let f = 0; f < faces.length; f++) {
        const face = document.createElement('div')
        face.classList.add('face')
        face.classList.add(faces[f])
        const img = document.createElement('img')
        img.src = dataContact[c].imgUrl
        
        face.append(img)
        
        const link = document.createElement('a')
        link.href = dataContact[c].link
        link.innerText = img
        face.append(link)
        
  
        header__menuCube.append(face)
    }
    header__menuCube.classList.add('header__menu--cube')
    header__menu.append(header__menuCube)
}