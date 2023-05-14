import React, { useEffect, useState } from 'react';
import styles from '../styles/LoginPage.module.css';
import Navbar from '@/components/navbar';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAppContext } from '@/context/AppContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } =
  useAppContext();
const router = useRouter()
  const handleSubmit = async(e) => {
    e.preventDefault();
      const login = await axios.post('/api/login', { email: email, password: password } )
      console.log(login.data)
      localStorage.setItem('userdata', JSON.stringify(login.data))
      setUser(login.data)
      router.push('/')
    // Call API to validate credentials and retrieve JWT token
  };
  console.log('user', user)
  useEffect(() => {
    const existingUser = localStorage.getItem('userdata')
    if (existingUser) {
        router.push('/')
    } 
  }, [])
  
  return (
  <>
  <Navbar/>
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default LoginPage;