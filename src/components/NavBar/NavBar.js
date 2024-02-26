import React from 'react';
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return(
        <div className={styles.navbar}>
            <div className={styles.navLeft}>
                <div className={styles.logo}>
                    <i className='bx bxs-analyse'></i>
                    <span>Abstract</span>
                </div>
                <span>|</span>
                <Link to="/" className={styles.help}>Help Center</Link>
            </div>

            <nav className={styles.navRight}>
                <button className={styles.mainButton}>Submit a request</button>
                <button className={styles.altButton}>Sign in</button>
            </nav>
        </div>
    )
}

export default NavBar;