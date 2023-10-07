
import imgLinkedin from "../img/logos/linkedin.png"
import imgX from "../img/logos/logo-x.png"
import imgGithub from "../img/logos/github.png"

const faceName = ['front', 'back', 'top', 'bottom', 'right', 'left']

export const Menu = () => {
    return (
        <>
            <menu id="header__menu" class="header__menu">
                <div id="cube-one" class="header__menu--cube">
                    {
                        faceName.map((faceName) => {
                            return <div class={`face ${faceName}`}>
                                <a href="https://www.linkedin.com/in/yann-letouzey-84374524b/" target="_blank" rel="noopener noreferrer"><img src={imgLinkedin} alt="Logo LinkedIn"/></a>
                            </div>
                        })
                    }
                </div>
                <div id="cube-two" class="header__menu--cube">
                    {
                        faceName.map((faceName) => {
                            return <div class={`face ${faceName}`}>
                                <a href="https://github.com/yannletouzey" target="_blank" rel="noopener noreferrer"><img src={imgGithub} alt="Logo GutHub"/></a>
                            </div>
                        })
                    }
                </div>
                <div id="cube-three" class="header__menu--cube">
                    {
                        faceName.map((faceName) => {
                            return <div class={`face ${faceName}`}>
                                <a href="https://twitter.com/yzey940" target="_blank" rel="noopener noreferrer"><img src={imgX} alt="Logo x"/></a>
                            </div>
                        })
                    }
                </div>
            </menu>
        </>
    )
}