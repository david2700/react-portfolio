import React from 'react';
import styles from './HomePage.module.css'
import SearchBar from '../SearchBar/SearchBar'

function MainSection() {
    return (
        <div>
            <header className = {styles.header}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.mainHeader}>How can we help?</h1>
                    <SearchBar />
                </div>
            </header>
        </div>
    );
};

export default MainSection;