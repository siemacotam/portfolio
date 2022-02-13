import MainNav from 'components/mainNav/MainNav'
import Popup from 'components/popup/Popup'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="appWrapper">
        <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <Main setIsMenuOpen={setIsMenuOpen} />
        <Footer setIsPopupOpen={setIsPopupOpen} />
      </div>
      {isPopupOpen && <Popup setIsPopupOpen={setIsPopupOpen} />}
    </Router>
  )
}

export default App
