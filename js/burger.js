export function burgerActive() {
    const header__container = document.getElementById('header__container')
    const header__icon = document.getElementById('header__icon')
    const header__contact = document.getElementById('header__contact')
    header__icon.addEventListener('click', () => {
        header__container.classList.toggle('is-opened')
        header__icon.classList.toggle('is-opened')
        header__contact.classList.toggle('is-opened')
    })
}