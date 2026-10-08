import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, googleAuthProvider } from '../firebase.config';

const SignupPage = () => {

    const [signupData, setSignupData] = useState({});
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setSignupData({
            ...signupData,
            email: event.target.value
        })
    }

    const handlePassword = (event) => {
        setSignupData({
            ...signupData,
            password: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const user = await createUserWithEmailAndPassword(auth, signupData.email, signupData.password);
            if (user) {
                alert('User Created Succesfully');
                // Navigate the user to login page
                navigate('/');
            }
        } catch (error) {
            console.log(error.code)
            if (error.code === 'auth/email-already-in-use') {
                alert('User already exists, use a differnet email');
            }
        }

    }

    const handleGoogleLogin = async (event) => {
        event.preventDefault();

        try {
            const user = await signInWithPopup(auth, googleAuthProvider);
            if (user) {
                alert('User Logged in');
                // Navigate the user to login page
                navigate('/');
            }
        } catch (error) {
            console.log(error.code)
        }

    }


    return (
        <section className="bg-red-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Signup here to create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input value={signupData.email} onChange={handleEmail} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input value={signupData.password} onChange={handlePassword} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button onClick={handleSubmit} type="submit" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>

                            <hr />
                            <button onClick={handleGoogleLogin} type="submit" className="w-full text-white bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login With Google</button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to={'/'} href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignupPage