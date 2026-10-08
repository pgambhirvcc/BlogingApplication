import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase.config'
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {

    const navigate = useNavigate();

    const handleSignout = async () => {
        try {
            const data = await signOut(auth);
            alert('User signed out succesfully');
            navigate('/');
        } catch(error) {
            alert("Something went wrong");
        }
    }

    return (
        <div>This is dashboard page

            <button onClick={handleSignout} type="submit" className=" text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign out</button>
        </div>
    )
}

export default DashboardPage