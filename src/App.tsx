import { HashRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider, applyAuth, applyHome } from './context/useAuth'
import Login from './routes/Login'
import NotFound from './routes/NotFound'
import Menu from './shared/Menu'

import './App.sass'
import Home from './routes/Home'
import Signin from './routes/Signin'

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />
        <div className='app-container'>
          <Routes>
            <Route
              path='/login'
              element={applyHome(<Login />)}
              />
            <Route
              path='/signin'
              element={applyHome(<Signin />)}
              />

            <Route
              path='/'
              element={applyAuth(<Home />)}
              />

            <Route
              path='*'
              element={<NotFound />}
              />
          </Routes>
        </div>
      </AuthProvider>
    </HashRouter>
  )
}

export default App
