import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <div className={styles.searchContainer}>
            <input type="text" className={styles.searchInput} placeholder="Search" />
            <i class={`bx bx-right-arrow-alt ${styles.arrowIcon}`}></i>
        </div>
    );
};

export default SearchBar;