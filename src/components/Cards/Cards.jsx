import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Cards.module.css";

const Cards = ({ data }) => {
    return (
        <>
            {data && data.map((item, index) => (
                <Link key={index} to={`/detailpage/${item.id}`} className={styles.cardLink}>
                    <div className={styles.card}>
                        <img src={item.image} alt={item.city} />
                        <h3 className={styles.cardTitle}>{`${item.nameOfThePlace}`}</h3>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default Cards;
