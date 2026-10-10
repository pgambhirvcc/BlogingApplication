import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase.config';
import Navbar from '../components/Navbar';

const ViewBlogDetails = () => {

  const blogParam = useParams();
  const [blogData, setBlogData] = useState();

  const getBlogDetail = async () => {
    
    const docRef = doc(db, "blogs", blogParam.id);
    const docSnap = await getDoc(docRef);
    const blogInfo = docSnap.data();
    setBlogData(blogInfo);
  }


  useEffect(() => {
    getBlogDetail();
  }, []);

  if (!blogData) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
        {/* <Navbar /> */}
        <img src={blogData.image} alt="" />
        <h1>{blogData.title}</h1>
        <p>{blogData.description}</p>
        <h5>Author: {blogData.authorEmail}</h5>
    </div>
  )
}

export default ViewBlogDetails