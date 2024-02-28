import { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import styles from "./PhoneInputValidation.module.css";


const PhoneInputValidation = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);

    const handleChange = (value) =>{
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value))
    }
    
    const validatePhoneNumber = ()=>{
        const phoneNumberPattern = /^\d(10)$/;
        return phoneNumberPattern.test(phoneNumber);
    }

  return (
   <div className={styles.inputSection}>
        <PhoneInput 
            className={valid ? styles.phoneInput : `${styles.phoneInput} ${styles.invalid}`}
            defaultCountry='KG'
            countries={['KG', 'US', 'RU']}
            international
            countryCallingCodeEditable={false}
            value={phoneNumber}
            onChange={handleChange}
            style={{
                fontSize: "30px",
                
            }}
        />
   
    {/* {!valid && <p>Please enter a valid phone number</p>} */}
   </div>
  )
}

export default PhoneInputValidation;