import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUser
} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { Text } from '../lang/text'

function Navbar ({ navToggled, handleNavToggle }) {
  return (
    <nav className='nav' data-toggled={navToggled} data-transitionable='false'>
      <div id='nav-logo-section' className='nav-section'>
        <NavLink to='/' title='home'>
          <FaUser size={32} />
        </NavLink>
      </div>
      <div id='nav-mobile-section'>
        <div id='nav-link-section' className='nav-section'>
          <NavLink
            to='/'
            style={({ isActive }) => ({
              color: isActive ? 'grey' : ''
            })}
          ><Text tid='navLink1' />
          </NavLink>
          <NavLink
            to='/proyects'
            style={({ isActive }) => ({
              color: isActive ? 'grey' : ''
            })}
          ><Text tid='navLink2' />
          </NavLink>
        </div>
        <div id='nav-social-section' className='nav-section'>
          <Link to='#' title='github'>
            <FaGithub size={32} />
          </Link>
          <Link to='#' title='linkedin'>
            <FaLinkedin size={32} />
          </Link>
          <Link to='#' title='mail'>
            <FaEnvelope size={32} />
          </Link>
        </div>
      </div>
      <button id='nav-toggle-button' type='button' title='menu' onClick={handleNavToggle}>
        <FaBars size={32} />
      </button>
    </nav>
  )
}

export default Navbar
