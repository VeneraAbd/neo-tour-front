import React, {useState} from 'react'
import styles from "./Counter.module.css";
import user from "../../assets/user.png";

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count+1)
    }
    const decrement = () =>{
        setCount(count-1)
    }
  return (
    <div>
        <label htmlFor="" className={styles.label}>
            Number of People
        </label>
            <div className={styles.container}>
               <div className={styles.wrapper}>
                    <button onClick={decrement}>-</button>
                    <div className={styles.numOfPeople}>{count}</div>
                    <button onClick={increment}>+</button>
                </div>
                <img src={user} alt="user icon" className={styles.user}/>
                <p>{count} {count === 1 ? 'Person' : 'People'}</p> 
            </div>
             
    </div>
  )
}

export default Counter