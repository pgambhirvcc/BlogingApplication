import React from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from '../firebase.config'
import { deleteDoc, doc } from 'firebase/firestore';

const BlogCard = (props) => {
    const currentUser = auth.currentUser.email;
    const authorEmail = currentUser === props.blog.authorEmail ? 'Me' : props.blog.authorEmail;

    const handleDeleteBlog = async () => {
        try {
            const data = await deleteDoc(doc(db, 'blogs', props.blog.id));
            alert('Blog Deleted Succesfully');

            window.location.reload();
        } catch (error) {
            console.log(erorr);
            alert('Delete Blog Failed');
        }
    }

    return (
        <div className="bg-red-50 block max-w-sm border border-default rounded-base shadow-xs">
            <a href="#">
                <img className="rounded" src={props.blog.image} alt="" />
            </a>
            <div className="p-6 text-center">
                <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                    Author: {authorEmail}
                </span>
                <a href="#">
                    <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{props.blog.title}</h5>
                </a>
                <p>
                    {props.blog.description}
                </p>

                <div className='flex gap-4 justify-center m-4'>
                                    {
                    authorEmail === 'Me' ? 
                    <button onClick={handleDeleteBlog} type="submit"  className="inline-flex items-center bg-red-400 text-white bg-red-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Delete</button>
                    : null
                }

                <Link to={`/view-blogs/${props.blog.id}`} className="inline-flex items-center bg-red-400 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    Read more
                    <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                </Link>
                </div>
            </div>
        </div>

    )
}

export default BlogCard