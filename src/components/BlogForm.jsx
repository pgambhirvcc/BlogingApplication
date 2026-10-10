import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../firebase.config';


const BlogForm = () => {

    const [blogData, setBlogData] = useState({});

    const handleBlogTitle = (event) => {
        setBlogData({
            ...blogData,
            title: event.target.value
        })
    }

    const handleBlogDescription = (event) => {
        setBlogData({
            ...blogData,
            description: event.target.value
        })
    }

    const handleBlogImage = (event) => {
        setBlogData({
            ...blogData,
            image: event.target.value
        })
    }

    const handleBlogCreate = async (event) => {
        event.preventDefault();
        console.log(blogData);

        try {
            // This helps us fetch the colllection from firebase
            // if it exists, it reuses it, if it doesn't exist
            // it creates one for us
            const collectionRef = collection(db, 'blogs');

            // Once we have the collection, we want to add data,
            // to that collection in this case, it is the blog we
            // are trying to create
            const data = await addDoc(collectionRef, {...blogData, authorId: auth.currentUser.uid, authorEmail: auth.currentUser.email});

            alert('Blog Created Succesfully');
        } catch (error) {
            console.log(error);
            alert('Failed to create blog');
        }

    }

    return (
        <div>
            <form onSubmit={handleBlogCreate} className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Title</label>
                    <input value={blogData.title} onChange={handleBlogTitle} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your blog title here" required="" />
                </div>
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Description</label>
                    <textarea value={blogData.description} onChange={handleBlogDescription} name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your blog description here" required="" />
                </div>
                <div>
                    <label for="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Image</label>
                    <input value={blogData.image} onChange={handleBlogImage} type="text" name="image" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add blog image link here" required="" />
                </div>
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Blog</button>
            </form>

        </div>
    )
}

export default BlogForm