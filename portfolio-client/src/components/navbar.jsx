import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUser
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Text } from '../lang/text'
import AuthContext from '../context/auth/authContext'
import { useContext, useEffect } from 'react'
import useToken from '../hooks/useToken'

function Navbar ({ navToggled, handleNavToggle }) {
  const { token } = useToken()

  const authContext = useContext(AuthContext)
  const { getUser } = authContext

  useEffect(() => {
    getUser(token)
  }, [])
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
              color: isActive ? 'grey' : '',
              pointerEvents: isActive ? 'none' : ''
            })}
            onClick={handleNavToggle}
          ><Text tid='navLink1' />
          </NavLink>
          <NavLink
            to='/projects'
            style={({ isActive }) => ({
              color: isActive ? 'grey' : '',
              pointerEvents: isActive ? 'none' : ''
            })}
            onClick={handleNavToggle}
          ><Text tid='navLink2' />
          </NavLink>
        </div>
        <div id='nav-social-section' className='nav-section'>
          <a type='button' href='https://github.com/lazaronazareno' title='github' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={32} />
          </a>
          <a type='button' href='https://www.linkedin.com/in/lazaro-vega-sanchez' title='linkedin' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={32} />
          </a>
          <a type='button' href='mailto:lazaronazareno@gmail.com?Subject=Contact%20from%20portfolio' target='_blank' rel='noopener noreferrer'>
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
      <button id='nav-toggle-button' type='button' title='menu' onClick={handleNavToggle}>
        <FaBars size={32} />
      </button>
    </nav>
  )
}

export default Navbar
