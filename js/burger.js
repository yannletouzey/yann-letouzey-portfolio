export function burger() {
    const header__container = document.getElementById('header__container')
    const header__burger = document.getElementById('header__burger')
    const header__menu = document.getElementById('header__menu')
    const firstname = document.querySelector('.header__title--firstname')
    const lastname = document.getElementById('header__title--lastname')
    header__burger.addEventListener('click', () => {
        if (header__container.classList.contains('is-opened')) {
            header__container.classList.replace('is-opened', 'is-closed')
            header__burger.classList.replace('is-opened', 'is-closed')
            header__menu.classList.replace('is-opened', 'is-closed')
            lastname.classList.replace('lastnameHide', 'lastnameShow')
            firstname.classList.replace('firstnameHide', 'firstnameShow')
        } else {
            header__container.classList.remove('is-closed')
            header__container.classList.add('is-opened')
            header__burger.classList.remove('is-closed')
            header__burger.classList.add('is-opened')
            header__menu.classList.remove('is-closed')
            header__menu.classList.add('is-opened')
            lastname.classList.remove('lastnameShow')
            lastname.classList.add('lastnameHide')
            firstname.classList.remove('firstnameShow')
            firstname.classList.add('firstnameHide')
        }
    })
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 800) {
            header__container.classList.remove('is-opened', 'is-closed')
            header__burger.classList.remove('is-opened', 'is-closed')
            header__menu.classList.remove('is-opened', 'is-closed')
            lastname.classList.remove('lastnameHide', 'lastnameShow')
            firstname.classList.remove('firstnameHide', 'firstnameShow')
        }
    })
}