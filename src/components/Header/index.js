import { Menu } from "../Menu"

export const Header = () => {
    return (
        <>
            <header id="header" class="header">
                <h2 id="header__title" class="header__title">
                    <span id="header__title--firstname" class="header__title--firstname">Yann</span>
                    <span id="header__title--lastname" class="header__title--lastname">Letouzey</span>
                </h2>
                <div id="header__container" class="header__container">
                    <button class="header__burger" id="header__burger"><span></span></button>
                </div>
                <Menu />
            </header>
        </>
    )
}