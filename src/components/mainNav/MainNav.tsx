// import { FC } from 'react'
// import { NavLink } from 'react-router-dom'

// interface IProps {
//   setIsMenuOpen(arg: boolean): void
// }

// const MainNav: FC<IProps> = ({ setIsMenuOpen }) => {
//   const handleCloseMenu = () => {
//     // document.querySelector('.mainNav')?.classList.remove('mainNav--active')
//     setIsMenuOpen(false)
//     document.querySelector('.mainNav')?.classList.remove('mainNav--active')
//   }

//   return (
//     <div className="mainNav">
//       <nav className="mainNav__nav">
//         <ul className="mainNav__ul">
//           <li className="mainNav__element">
//             <NavLink onClick={handleCloseMenu} to="/" className="mainNav__link">
//               home
//             </NavLink>
//           </li>
//           <li className="mainNav__element">
//             <NavLink
//               onClick={handleCloseMenu}
//               to="/about"
//               className="mainNav__link"
//             >
//               o mnie
//             </NavLink>
//           </li>
//           <li className="mainNav__element">
//             <NavLink
//               onClick={handleCloseMenu}
//               to="/projects"
//               className="mainNav__link"
//             >
//               projekty
//             </NavLink>
//           </li>
//           <li className="mainNav__element">
//             <NavLink
//               onClick={handleCloseMenu}
//               to="/contact"
//               className="mainNav__link"
//             >
//               kontakt
//             </NavLink>
//           </li>
//           <li className="mainNav__element">
//             <NavLink
//               onClick={handleCloseMenu}
//               to="/questionnaire"
//               className="mainNav__link"
//             >
//               zostaw po sobie ślad
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default MainNav

const MainNav = () => {
  return <div className="home">hej</div>
}

export default MainNav
