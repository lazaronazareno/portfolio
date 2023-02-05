import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import NavbarProfile from './components/navbar-profile'
import ColorProvider from './context/colorContext'
import { LanguageProvider } from './context/langContext'
import Login from './pages/login'
import Profile from './pages/profile'
import Proyects from './pages/proyects'

function App() {
  const [navToggled, setNavToggled] = useState(false)

  const handleNavToggle = () => {
    // Invertimos el valor de navToggled
    setNavToggled(!navToggled)
  }

  return (
    <LanguageProvider>
      <ColorProvider>
        <BrowserRouter>
          <Routes>
            <Route
              exact path='/' element={
                <>
                  <NavbarProfile navToggled={navToggled} handleNavToggle={handleNavToggle} />
                  <Profile />
                </>
            }
            />
            <Route
              exact path='/proyects' element={
                <>
                  <Navbar navToggled={navToggled} handleNavToggle={handleNavToggle} />
                  <Proyects />
                </>
            }
            />
            <Route
              exact path='/login' element={
                <>
                  <Navbar navToggled={navToggled} handleNavToggle={handleNavToggle} />
                  <Login />
                </>
            }
            />
          </Routes>
        </BrowserRouter>
      </ColorProvider>
    </LanguageProvider>
  )
}
export default App
