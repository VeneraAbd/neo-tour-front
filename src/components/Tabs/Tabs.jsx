import React, {useState} from 'react';
import styles from "./Tabs.module.css";
import DiscoverCards from "../DiscoverCards/DiscoverCards";

const Tabs = () => {
    const tabs = ['Popular', 'Featured', 'Most Visited', 'Europe', 'Asia'];
    const [activeTab, setActiveTab] = useState(tabs[0]);
  
    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
    <div>
        <ul className={styles.tab_list}>
            {tabs.map((tab, index) => (
                <li
                key={index}
                className={`${styles.tab_item} ${activeTab === tab ? styles.active : ''}`}
                onClick={() => handleTabClick(tab)}
                >
                    {tab}
                    <div className={activeTab === tab ? styles.activeDot : styles.dot}></div>
                </li>
            ))}
        </ul>
        <div className={styles.tab_content}>
            <p>{`This is the content for ${activeTab}.`}</p>
            <DiscoverCards/>
        </div>
    </div>
  )
}

export default Tabs