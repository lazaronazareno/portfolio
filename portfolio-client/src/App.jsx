import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import NavbarProfile from './components/navbar-profile'
import PrivateRoute from './components/routes/privateRoute'
import AdminPanel from './pages/admin'
import Login from './pages/login'
import Profile from './pages/profile'
import Projects from './pages/projects'

import useToken from './hooks/useToken'
import { tokenAuth } from './config/tokenAuth'

import ColorProvider from './context/colorContext'
import { LanguageProvider } from './context/langContext'
import AlertState from './context/alert/alertState'
import AuthState from './context/auth/authState'
import ProjectState from './context/projects/projectState'

function App () {
  const { token } = useToken()

  if (token) {
    tokenAuth(token)
  }
  const [navToggled, setNavToggled] = useState(false)

  const handleNavToggle = () => {
    setNavToggled(!navToggled)
  }

  return (
    <LanguageProvider>
      <ColorProvider>
        <AuthState>
          <AlertState>
            <ProjectState>
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
                    exact path='/projects' element={
                      <>
                        <Navbar navToggled={navToggled} handleNavToggle={handleNavToggle} />
                        <Projects />
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
                  <Route exact element={<PrivateRoute />}>
                    <Route
                      exact path='/admin' element={
                        <>
                          <NavbarProfile navToggled={navToggled} handleNavToggle={handleNavToggle} />
                          <AdminPanel />
                        </>
                      }
                    />
                  </Route>
                </Routes>
              </BrowserRouter>
            </ProjectState>
          </AlertState>
        </AuthState>
      </ColorProvider>
    </LanguageProvider>
  )
}
export default App
