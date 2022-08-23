import './_NavBar.scss'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SiWorldhealthorganization } from 'react-icons/si'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" id="navbar__logo">
        <SiWorldhealthorganization className='navbar__image' />
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