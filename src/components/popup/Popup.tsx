import { FC } from 'react'
import phone from '../../images/phone.png'

interface IProps {
  setIsPopupOpen(arg: boolean): void
}

const Popup: FC<IProps> = ({ setIsPopupOpen }) => {
  return (
    <div className="popup">
      <div className="popup__bg" onClick={() => setIsPopupOpen(false)}></div>
      <div className="popup__info">
        <div className="popup__header">
          <p>Numer tel.</p>
          <button
            className="popup__button"
            onClick={() => setIsPopupOpen(false)}
          >
            X
          </button>
        </div>
        <div>
          <div>
            <img className="popup__img" src={phone} alt="" />
            <p>791090708</p>
          </div>
          <p>Preferowany kontakt : SMS</p>
        </div>
      </div>
    </div>
  )
}

export default Popup
