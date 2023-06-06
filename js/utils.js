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
const spanText = () => {
    const spanText = document.querySelectorAll(".container__carousel--link div");
    spanText.forEach((element) => {
        const letters = element.children[0].textContent.split("");
        element.innerHTML = "";
        letters.forEach((e, index) => {
            element.innerHTML += `<span style="display: inline-block; transition: 0.5s; transition-delay: ${
                0.02 * index
            }s">${e}</span>`;
        });
    });
}
function addSpanReverse(id) {
    const textWithId = document.getElementById('' + id)
    let text = document.getElementById('' + id).textContent
    text = [...text].reverse().join("");
    textWithId.innerHTML = ""
    let textArray = Array.from(text)
    for (let i = 0; i < textArray.length; i++) {
        let e = textArray[i];
        textWithId.innerHTML += `<span id=${i}>${e}</span>`
    }
}
export { addSpan, spanText, addSpanReverse }
