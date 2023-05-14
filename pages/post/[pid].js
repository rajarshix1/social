import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useAppContext } from '@/context/AppContext';
import Navbar from '@/components/navbar';

const PostPage = () => {
  const [post, setPost] = useState();
  const [comment, setComment] = useState();
  const { user, setUser } =
  useAppContext();
    const router = useRouter()
    console.log(router.query.pid)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post('/api/post/comment', {id: router.query.pid, comment: comment})
    console.log(resp.data);
  };

  const like = async (e)=>{
    const resp = await axios.post('/api/post/like', {id: router.query.pid})
    console.log(resp);
    
  }
  useEffect(() => {
    if(router.query.pid){
      axios.get(`/api/post/${router.query.pid}`).then(e=>{
        console.log(e.data);
        setPost(e.data)
      })
    }
  }, [router.query.pid])

  useEffect(() => {
    const existingUser = localStorage.getItem('userdata')
    if (existingUser) {
        setUser(existingUser)
    } 
  }, [])
  return (
  <>
    <Navbar/>

    <div >
      <h1>{post && post.title}</h1> <br/>
      <h3>{post && post.description}</h3><br/>
      <h3>likes: {post && post.likes}</h3> 
      {user && <h2 onClick={like}>👍</h2>}
      {user && <><input type='text' onChange={(e)=>setComment(e.target.value)}/>
      <button onClick={handleSubmit}>Comment</button></>}
      <h3>{post && post.comments.length>0? post.comments.map(e=>(
        <ul>
          <li>
            {e.comment}
          </li>
        </ul>
      )): null}</h3>
    </div>
    </>
  );
};

export default PostPage;