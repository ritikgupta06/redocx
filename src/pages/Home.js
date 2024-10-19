import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const Sidebar = ({ isSidebarActive, toggleSidebar, darkMode, topics }) => {
    return (
        <div className={`${styles.sidebar} ${isSidebarActive ? styles.active : ''} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.logo}>Redocx</div>
            <ul>
                {topics.map(topic => (
                    <li key={topic.name}>
                        <Link href={`/?topic=${topic.file}`} scroll={false}>
                            {topic.name}
                        </Link>
                    </li>
                ))}
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
    const [markdownContent, setMarkdownContent] = useState("");

    const topics = [
        { name: "Home", file: "home.md" },
        { name: "HTML", file: "html.md" },
        { name: "Django", file: "django.md" },
        { name: "Git and Github", file: "git.md" },
        { name: "C++", file: "cpp.md" },
        { name: "SQL", file: "sql.md" },
        { name: "DevOps Stuff", file: "devops.md" }
    ];

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Ensure dark mode is persisted in local storage
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

    // Fetch markdown whenever the topic changes
    useEffect(() => {
        const fetchMarkdown = () => {
            const topic = new URLSearchParams(window.location.search).get("topic");
            if (topic) {
                fetch(`/markdown/${topic}`)
                    .then(response => response.text())
                    .then(text => setMarkdownContent(text))
                    .catch(error => console.error("Error fetching markdown:", error));
            }
        };

        // Check if we are in the browser
        if (typeof window !== "undefined") {
            fetchMarkdown();
        }

        // Optionally, you can add an event listener for popstate to handle back/forward navigation
        const handlePopState = () => fetchMarkdown();

        window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []); // Run once on mount

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
            <div className={styles.mainContent}>
                <Sidebar 
                    isSidebarActive={isSidebarActive} 
                    toggleSidebar={toggleSidebar} 
                    darkMode={darkMode} 
                    topics={topics}
                />
                <div className={styles.contentArea}>
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
