import fb from '../images/fb-icon-16.png'
import mail from '../images/mail.png'
import phone from '../images/phone.png'
import { Link } from 'react-router-dom'
import { FC } from 'react'

interface IProps {
  setIsPopupOpen(arg: boolean): void
}

const Footer: FC<IProps> = ({ setIsPopupOpen }) => {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrap">
          <p className="footer__title">Grzegorz Celek 2022</p>
          <div className="footer__linksWrap">
            <div className="footer__imgWrap">
              <a
                className="footer__link"
                href="https://www.facebook.com/grzegorz.celek/"
              >
                <img className="footer__img" src={fb} alt="" />
              </a>
            </div>
            <div className="footer__imgWrap">
              <button
                className="footer__link"
                onClick={() => setIsPopupOpen(true)}
              >
                <img className="footer__img" src={phone} alt="" />
              </button>
            </div>
            <div className="footer__imgWrap">
              <Link className="footer__link" to="/contact">
                <img className="footer__img" src={mail} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
