import React, { useState } from 'react';
import styles from "./Tabs.module.css";
import Cards from "../Cards/Cards";
import mockData from "../Carousel/Carousel"; 

const Tabs = () => {
    const tabs = ['Popular', 'Featured', 'Most Visited', 'Europe', 'Asia'];
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [filteredData, setFilteredData] = useState(mockData);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        // Filtering the data based on the selected category
        const filtered = mockData.filter(item => item.category === tab);
        setFilteredData(filtered);
    }

    return (
        <div className={styles.tabsContainer}>
            <ul className={styles.tab_list}>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`${styles.tab_item} ${activeTab === tab ? styles.active : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                        {activeTab === tab && <div className={styles.activeDot}></div>} 
                    </li>
                ))}
            </ul>
            <div className={styles.tab_content}>
                <Cards  data={filteredData}/>
            </div>
        </div>
    )
}

export default Tabs;