import React, { useEffect, useState } from 'react';
import styles from '../styles/LoginPage.module.css';
import Navbar from '@/components/navbar';
import { useRouter } from 'next/router';
import axios from 'axios';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
    const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/user', { name: name, email: email, password: password } )
    router.push('/login')
  };
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
        <h1 className={styles.title}>Signup</h1>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>
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
          Signup
        </button>
      </form>
    </div>
    </>
  );
};

export default SignupPage;