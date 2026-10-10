import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.config';

const Navbar = () => {


    const navigate = useNavigate();

    const handleSignout = async () => {
        try {
            const data = await signOut(auth);
            alert('User signed out succesfully');
            navigate('/');
        } catch (error) {
            console.log(error)
            alert("Something went wrong");
        }
    }

    const handleViewBlogs = () => {
        navigate('/view-blogs');
    }
    return (
        <nav className="bg-red-50 fixed w-full z-20 top-0 start-0 border-b border-default">
            <div className="max-w-screen-xl flex justify-end p-4">
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                        <li>
                            <button onClick={handleViewBlogs} type="submit" className=" text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">View Blogs</button>
                        </li>
                        <li>
                            <button onClick={handleSignout} type="submit" className=" text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar