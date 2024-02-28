import React from 'react';
import PhoneInputValidation from '../PhoneInputValidation/PhoneInputValidation';
import styles from "./Form.module.css"
import Counter from '../Counter/Counter';

const Form = () => {
  
  return (
    <form className={styles.form}>
        <div className={styles.info}>
          <h2 className={styles.h2}>Info</h2>
          <button className={styles.btn}>X</button>
        </div>
        <p className={styles.p}>To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation</p>
        {/* Phone input */}
        <label htmlFor="" className={styles.label}>
          Phone Number
          <PhoneInputValidation/>
        </label>
        
        <label htmlFor="" className={styles.label}>
          Commentaries to trip
          <input type="text" placeholder='Write your wishes to trip' className={styles.input}/>
        </label>
        {/* Counter */}
        <Counter/>
        <button className={styles.submit}>Submit</button>
    
    </form>
  )
}

export default Form