import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase.config'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../components/BlogForm'
import Navbar from '../components/Navbar'

const DashboardPage = () => {

    return (
        <div>
            
            {/* <Navbar /> */}
            <div className="m-32">
                <BlogForm />
            </div>
        </div>
    )
}

export default DashboardPage