import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './Page/LoginPage'
import SignupPage from './Page/SignupPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
    </Routes>
  )
}

export default App
