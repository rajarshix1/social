import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [posts, setPosts] = useState([]) 
  const [title, setTitle] = useState() 
  const [description, setDescription] = useState() 
  const handlePost = async (e) => {
    e.preventDefault();
    const resp = await axios.post('/api/post/create', {title: title, description: description})
    axios.get('/api/post').then((e)=>{
      console.log(e.data);
      setPosts(e.data)
    })
  };
  useEffect(() => {
    axios.get('/api/post').then((e)=>{
      console.log(e.data);
      setPosts(e.data)
    })
  }, [])
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
          <div>
          <h4>Create Post</h4>
          <input type='text' onChange={(e)=>setTitle(e.target.value)}/>
          <input type='text' onChange={(e)=>setDescription(e.target.value)}/>
          <button type='submit' onClick={handlePost}>Post</button>
          </div>
        <div className={styles.description}>
         <ul>
          {posts.map(e=>(
           <>
            <li>
              <Link href={`/post/${e._id}`}>
              {e.title}
            </Link>
            </li>
            <p>
              {e.description}
            </p>
            <p>likes: {e.likes}  comments {e.comments.length}</p>
            </>
          ))}
         </ul>
        </div>
      </main>
    </>
  )
}
