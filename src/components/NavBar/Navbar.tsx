import './_NavBar.scss'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" id="navbar__logo">
        <img src="/src/assets/mask.png" alt="vacine"/>
      </Link>
      <FaBars className='navbar__hambuger'/>
      <div className="navbar__menu">
          <Link to="/" className="navbar__links">
            Home
          </Link>
          <Link to="/about" className="navbar__links">
            About
          </Link>
          <Link to="/contact" className="navbar__links">
            Contact
          </Link>
      </div>
    </nav>
  )
}

export default Navbar