import React, { useState } from 'react';
import styles from "./Counter.module.css";
import user from "../../assets/user.png";

const Counter = ({ value, onChange }) => {
    const [count, setCount] = useState(value);

    const increment = () => {
        setCount(count + 1);
        onChange(count + 1); // Notify parent component of the updated count
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
            onChange(count - 1); // Notify parent component of the updated count
        }
    };

    return (
        <div>
            <p htmlFor="" className={styles.label}>
                Number of People
            </p>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <button onClick={decrement}>-</button>
                    <div className={styles.numOfPeople}>{count}</div>
                    <button onClick={increment}>+</button>
                </div>
                <img src={user} alt="user icon" className={styles.user} />
                <p>{count} {count === 1 ? 'Person' : 'People'}</p>
            </div>
        </div>
    );
}

export default Counter;