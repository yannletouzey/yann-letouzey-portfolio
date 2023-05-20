export function burgerActive() {
    const header__icon = document.getElementById('header__icon')
    header__icon.addEventListener('click', () => {
        header__icon.classList.toggle('is-opened')
    })
}