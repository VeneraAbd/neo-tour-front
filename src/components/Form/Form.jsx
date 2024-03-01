import axios from 'axios';
import Modal from '../Modal/Modal';
import React, { useState, useEffect } from 'react';
import PhoneInputValidation from '../PhoneInputValidation/PhoneInputValidation';
import styles from "./Form.module.css"
import Counter from '../Counter/Counter';

const Form = ({active, setActive, details}) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [commentaries, setCommentaries] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);
  
  const tourInfo = details.nameOfThePlace;

  // useEffect to check if all input fields are filled in
  useEffect(() => {
    setIsFormValid(phoneNumber !== '' && commentaries !== '' && numberOfPeople !== 0);
  }, [phoneNumber, commentaries, numberOfPeople]);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Checking if the clicked button has a type attribute set to "submit"
    if (e.nativeEvent.submitter && e.nativeEvent.submitter.getAttribute('type') === 'submit') {
      const formData = {
        phoneNumber: phoneNumber,
        commentaries: commentaries,
        numberOfPeople: numberOfPeople,
        tourInfo: tourInfo 
      };
  
      try {
        const response = await axios.post('http://localhost:3000/order', formData);
        if (response) {
          console.log('Form submitted successfully!');
          // setPhoneNumber('');
          // setCommentaries('');
          // setNumberOfPeople(1);
          // setIsFormValid(false);
          setActive(false); 
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setActive(true); // Show error modal
      }

    }
          
  };

    // Callback function to update phoneNumber state in the Form component
  const handlePhoneNumberChange = (value) => {
      setPhoneNumber(value);
  };
  
  const handleClose = () =>{
      setActive(false);
      setCommentaries('');
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.info}>
        <h2 className={styles.h2}>Info</h2>
        <button className={styles.btn} onClick={handleClose}>X</button>
      </div>
      <p className={styles.p}>To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation</p>
      
        <PhoneInputValidation value={phoneNumber} onChange={handlePhoneNumberChange} />
      
      <label htmlFor="commentaries" className={styles.label}>
        Commentaries to trip
        <input type="text" id="commentaries" name="commentaries" value={commentaries} onChange={(e) => setCommentaries(e.target.value)} placeholder='Write your wishes to trip' className={styles.input}/>
      </label>
      <Counter value={numberOfPeople} onChange={(value) => setNumberOfPeople(value)} />
      <button type="submit" className={` ${isFormValid ? styles.active : styles.submit}`}>Submit</button>
      
    </form>
  );
};

export default Form;

