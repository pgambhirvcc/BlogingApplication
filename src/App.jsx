import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import LoginPage from './Page/LoginPage'
import SignupPage from './Page/SignupPage'
import DashboardPage from './Page/DashboardPage'
import NotFoundPage from './Page/NotFoundPage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.config'
import ViewBlogsPage from './Page/ViewBlogsPage'
import ViewBlogDetails from './Page/ViewBlogDetails'
import Navbar from './components/Navbar'

function App() {

  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    // if (user) {
    //   navigate('/dashboard');
    // } else {

    // }
  })

  return (
    <div>
      {auth.currentUser ? <Navbar /> : null }
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/view-blogs' element={<ViewBlogsPage />} />
        <Route path='/view-blogs/:id' element={<ViewBlogDetails />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
