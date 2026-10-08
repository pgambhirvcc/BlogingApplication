import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import LoginPage from './Page/LoginPage'
import SignupPage from './Page/SignupPage'
import DashboardPage from './Page/DashboardPage'
import NotFoundPage from './Page/NotFoundPage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.config'

function App() {

  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate('/dashboard');
    } else {
      
    }
  })

  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
