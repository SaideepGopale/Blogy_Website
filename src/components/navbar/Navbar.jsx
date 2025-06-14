import React from 'react' 
import styles from "./Navbar.module.css"
import { IoSearch } from "react-icons/io5";
import RecentPost from '../recentposts/RecentPost';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className={styles.Navbarheader}>
      <div className={styles.Navbar}>
        <img src="./logo.svg" alt="" className={styles.logo} />
      </div>
      
      <ul className={styles.navList}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/recentposts" className={styles.link}>RecentPost</Link></li>
        <li><Link to="/membership" className={styles.link}>Membership</Link></li>
        <li className={styles.search}><IoSearch/></li>
      </ul>
      
  
    </header>
  )
}

export default Navbar;
