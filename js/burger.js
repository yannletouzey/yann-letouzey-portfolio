export function burgerActive() {
    const header__container = document.getElementById('header__container')
    const header__icon = document.getElementById('header__icon')
    const header__contact = document.getElementById('header__contact')
    const header__title = document.getElementById('header__title')

    header__icon.addEventListener('click', () => {
        if (header__container.classList.contains('is-opened')) {
            header__container.classList.remove('is-opened')
            header__icon.classList.remove('is-opened')
            header__contact.classList.remove('is-opened')
            header__title.classList.remove('is-opened')
            header__container.classList.add('is-closed')
            header__icon.classList.add('is-closed')
            header__contact.classList.add('is-closed')
            header__title.classList.add('is-closed')
        } else {
            header__container.classList.add('is-opened')
            header__icon.classList.add('is-opened')
            header__contact.classList.add('is-opened')
            header__title.classList.add('is-opened')
            header__container.classList.remove('is-closed')
            header__icon.classList.remove('is-closed')
            header__contact.classList.remove('is-closed')
            header__title.classList.remove('is-closed')
        }
    })
}