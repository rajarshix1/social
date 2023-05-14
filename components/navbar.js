import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter()
console.log('in nav');
  const [user, setUser] = useState()
  useEffect(() => {
  setUser(JSON.parse(localStorage.getItem('userdata'))    )
  }, [])
  const handleLogout = () =>{
    setUser(null)
    localStorage.removeItem('userdata')
    router.push('/')

  }
  console.log(user);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <p>My App</p>
        </Link>
      </div>
      {
        user? (<ul className={styles.menu}>
          <li>
            <Link href="">
              <p>{user.name}</p>
            </Link>
          </li>
          <li>
              <p onClick={handleLogout}>Logout</p>
          </li>
        </ul>)
        : (<ul className={styles.menu}>
          <li>
            <Link href="/login">
              <p>login</p>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <p>signup</p>
            </Link>
          </li>
        </ul>)
      }
      
    </nav>
  );
};

export default Navbar;
