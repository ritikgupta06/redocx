// pages/Homepage.js
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css"; // Assuming your CSS file is named Home.module.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Sidebar = ({ isSidebarActive, toggleSidebar, darkMode }) => {
    return (
        <div className={`${styles.sidebar} ${isSidebarActive ? styles.active : ''} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.logo}>Redocx</div>
            <ul>
                <li className={styles.active}>Home</li>
                <li>HTML</li>
                <li>Django</li>
                <li>Git and Github</li>
                <li>C++</li>
                <li>SQL</li>
                <li>DevOps Stuff</li>
            </ul>
           
        </div>
    );
};

const Navbar = ({ darkMode, toggleDarkMode, searchTerm, setSearchTerm, handleSearch }) => {
    return (
        <nav className={`${styles.navbar} ${darkMode ? styles.dark : ""}`}>
            <div className={styles.logo}>Redocx</div>
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
                    className={`${styles.toggleButton} ${darkMode ? styles.darkButton : styles.lightButton}`}
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
};

const Homepage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSidebarActive, setSidebarActive] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Persist dark mode setting in local storage
    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode === "true") {
            setDarkMode(true);
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
        console.log("Search term:", searchTerm);
    };

    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
    };

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
            <Navbar 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode} 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                handleSearch={handleSearch} 
            />
            <Sidebar 
                isSidebarActive={isSidebarActive} 
                toggleSidebar={toggleSidebar} 
                darkMode={darkMode} // Pass darkMode prop
            />
        </div>
    );
};

export default Homepage;
