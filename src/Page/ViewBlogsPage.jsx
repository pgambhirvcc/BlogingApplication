import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase.config';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';

const ViewBlogsPage = () => {

    const [blogsData, setBlogsData] = useState([]);

    const getBlogsData = async () => {
        const collectionRef = collection(db, 'blogs');
        const dataFromFirebase = await getDocs(collectionRef);

        const blogData = dataFromFirebase.docs.map((doc) => {
            return {
                ...doc.data(),
                id: doc.id
            }
        })

        setBlogsData(blogData);

        console.log(blogData)
    }

    useEffect(() => {
        getBlogsData();
    }, []);

    return (
        <div>
            {/* <Navbar /> */}

            <div className='flex gap-4 m-32'>
                {
                    blogsData.map((blog) => {
                        return <BlogCard blog={blog} />
                    })
                }
            </div>
        </div>
    )
}

export default ViewBlogsPage