export function burgerActive() {
    const header__container = document.getElementById('header__container')
    const header__burger = document.getElementById('header__burger')
    const header__menu = document.getElementById('header__menu')
    const firstname = document.querySelector('.header__title--firstname')
    const lastname = document.getElementById('header__title--lastname')

    header__burger.addEventListener('click', () => {
        if (header__container.classList.contains('is-opened')) {
            header__container.classList.remove('is-opened')
            header__burger.classList.remove('is-opened')
            header__menu.classList.remove('is-opened')
            header__container.classList.add('is-closed')
            header__burger.classList.add('is-closed')
            header__menu.classList.add('is-closed')
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
            header__burger.classList.add('is-opened')
            header__menu.classList.add('is-opened')
            header__container.classList.remove('is-closed')
            header__burger.classList.remove('is-closed')
            header__menu.classList.remove('is-closed')
        }
    })
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 800) {
            header__container.classList.remove('is-opened')
            header__burger.classList.remove('is-opened')
            header__menu.classList.remove('is-opened')
            header__container.classList.remove('is-closed')
            header__burger.classList.remove('is-closed')
            header__menu.classList.remove('is-closed')
            lastname.classList.remove('lastnameHide')
            lastname.classList.remove('lastnameShow')
            firstname.classList.remove('firstnameHide')
            firstname.classList.remove('firstnameShow')
        }
    })
}