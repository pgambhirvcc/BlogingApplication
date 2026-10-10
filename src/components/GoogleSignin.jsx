import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, googleAuthProvider } from '../firebase.config';
import { useNavigate } from 'react-router-dom';

const GoogleSignin = () => {

    const navigate = useNavigate();
        const handleGoogleLogin = async (event) => {
        event.preventDefault();

        try {
            const user = await signInWithPopup(auth, googleAuthProvider);
            if (user) {
                alert('User Logged in');
                // Navigate the user to login page
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error.code)
        }

    }

    return (
        <button onClick={handleGoogleLogin} type="submit" className="w-full text-white bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login With Google</button>

    )
}

export default GoogleSignin