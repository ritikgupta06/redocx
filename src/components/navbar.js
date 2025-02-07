import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

export default function Navbar() {
  // Set default darkMode to true
  const [darkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.body.classList.add(styles.dark);
    } else {
      document.body.classList.remove(styles.dark);
    }
  }, [darkMode]);

  const handleSearch = (e) => {
    e.preventDefault();
    // You can implement the search logic here
    console.log("Search term:", searchTerm);
  };

  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.dark : ""}`}>
       <Link href="/" className={styles.logo}>
        Redocx
      </Link>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <div className={styles.searchWrapper}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
      <div className={styles.icons}>
        <a href="https://github.com/ritikgupta06" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
        <button
          className={`${styles.toggleButton} ${
            darkMode ? styles.darkButton : styles.lightButton
          }`}
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon
            icon={darkMode ? faMoon : faSun}
            className={styles.icon}
          />
        </button>
      </div>
    </nav>
  );
}
