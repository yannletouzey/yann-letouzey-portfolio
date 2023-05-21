export function burgerActive() {
    const header__container = document.getElementById('header__container')
    const header__icon = document.getElementById('header__icon')
    const header__contact = document.getElementById('header__contact')
    const firstname = document.querySelector('.header__title--firstname')
    const lastname = document.getElementById('header__title--lastname')

    header__icon.addEventListener('click', () => {
        if (header__container.classList.contains('is-opened')) {
            header__container.classList.remove('is-opened')
            header__icon.classList.remove('is-opened')
            header__contact.classList.remove('is-opened')
            header__container.classList.add('is-closed')
            header__icon.classList.add('is-closed')
            header__contact.classList.add('is-closed')
            lastname.classList.remove('lastnameHide')
            lastname.classList.add('lastnameShow')
            firstname.classList.remove('firstnameHide')
            firstname.classList.add('firstnameShow')
        } else {
            lastname.classList.add('lastnameHide')
            lastname.classList.remove('lastnameShow')
            firstname.classList.add('firstnameHide')
            firstname.classList.remove('firstnameShow')
            header__container.classList.add('is-opened')
            header__icon.classList.add('is-opened')
            header__contact.classList.add('is-opened')
            header__container.classList.remove('is-closed')
            header__icon.classList.remove('is-closed')
            header__contact.classList.remove('is-closed')
        }
    })
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 800) {
            header__container.classList.remove('is-opened')
            header__icon.classList.remove('is-opened')
            header__contact.classList.remove('is-opened')
            header__container.classList.remove('is-closed')
            header__icon.classList.remove('is-closed')
            header__contact.classList.remove('is-closed')
            lastname.classList.remove('lastnameHide')
            lastname.classList.remove('lastnameShow')
            firstname.classList.remove('firstnameHide')
            firstname.classList.remove('firstnameShow')
        }
    })
}