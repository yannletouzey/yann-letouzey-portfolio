function addSpan(id) {
    const textWithId = document.getElementById('' + id)
    const text = document.getElementById('' + id).textContent
    textWithId.innerHTML = ""
    let textArray = Array.from(text)
    for (let i = 0; i < textArray.length; i++) {
        let e = textArray[i];
        textWithId.innerHTML += `<span id=${i}>${e}</span>`
    }
}

export { addSpan }
