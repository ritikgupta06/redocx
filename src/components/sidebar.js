import { useState } from "react";
import styles from "@/styles/sidebar.module.css";

const Sidebar = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
    };

    return (
        <>
            <div className={`${styles.sidebar} ${isSidebarActive ? styles.active : ''}`}>
                <div className={styles.logo}>Redocx</div>
                <ul>
                    <li className={styles.active}>Home</li>
                    <li>HTML</li>
                    <li>Django</li>
                    <li>Git and Github</li>
                    <li>C++ <span className={styles.newTag}>New</span></li>
                    <li>SQL</li>
                    <li>DevOps Stuff</li>
                </ul>
            </div>
            <button onClick={toggleSidebar}>
                {isSidebarActive ? "Close Sidebar" : "Open Sidebar"}
            </button>
        </>
    );
};

export default Sidebar;
