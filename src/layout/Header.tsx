import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import Hamburger from 'hamburger-react'

interface IProps {
  setIsMenuOpen(arg: boolean): void
  isMenuOpen: boolean
}

const Header: FC<IProps> = ({ setIsMenuOpen, isMenuOpen }) => {
  const location = useLocation()
  const pathname = location.pathname

  const text = () => {
    switch (pathname) {
      case '/':
        return 'Witaj, poznajmy się'
      case '/about':
        return 'Dowiedz się czegoś o mnie'
      case '/projects':
        return 'Poznaj moje projekty'
      case '/contact':
        return 'Odezwij sie do mnie :)'
      case '/questionnaire':
        return 'Zostaw po sobie ślad'
    }
  }

  const handleToggleMenu = () => {
    document.querySelector('.mainNav')?.classList.toggle('mainNav--active')
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header__wrap">
        <h1 className="header__title">{text()}</h1>
        <Hamburger
          toggled={isMenuOpen}
          onToggle={(toggled) => {
            console.log(isMenuOpen)
            if (toggled) {
              setIsMenuOpen(true)
              document
                .querySelector('.mainNav')
                ?.classList.add('mainNav--active')
            } else {
              setIsMenuOpen(false)
              document
                .querySelector('.mainNav')
                ?.classList.remove('mainNav--active')
            }
          }}
        />
      </div>
    </header>
  )
}

export default Header
