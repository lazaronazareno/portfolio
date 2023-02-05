import { useContext } from 'react'
import {
  FaBars,
  FaUser
} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { ColorContext } from '../context/colorContext'
import LanguageSelector from '../lang/langSelector'
import { Text } from '../lang/text'
import '../pages/profile.css'

function NavbarProfile ({ navToggled, handleNavToggle }) {
  const { changeTheme } = useContext(ColorContext)

  return (
    <nav className='profile-nav' data-toggled={navToggled} data-transitionable='false'>
      <div id='nav-logo-section' className='profile-nav-section'>
        <Link to='#' title='home'>
          <FaUser size={32} />
        </Link>
      </div>
      <div id='profile-nav-mobile-section'>
        <div id='profile-nav-link-section' className='profile-nav-section'>
          <NavLink
            to='/'
            style={({ isActive }) => ({
              color: isActive ? 'grey' : ''
            })}
            onClick={handleNavToggle}
          ><Text tid='navLink1' />
          </NavLink>
          <NavLink
            to='/projects'
            style={({ isActive }) => ({
              color: isActive ? 'grey' : ''
            })}
            onClick={handleNavToggle}
          ><Text tid='navLink2' />
          </NavLink>
        </div>
        <div id='profile-nav-social-section' className='profile-nav-section'>
          <div style={{ display: 'flex', gap: '.5rem' }}>
            <LanguageSelector />
          </div>
          <button title='theme' className='theme-button' onClick={changeTheme}><Text tid='theme' /></button>
          <Link to='/login' type='button' title='login' className='alt-button'><Text tid='login' /></Link>
        </div>
      </div>
      <button id='profile-nav-toggle-button' title='menu' type='button' onClick={handleNavToggle}>
        <FaBars size={32} />
      </button>
    </nav>
  )
}

export default NavbarProfile
