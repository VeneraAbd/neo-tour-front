
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import Form from '../../components/Form/Form';
import styles from './DetailPage.module.css';
import leftarrow from '../../assets/leftarrow.svg';
import place from '../../assets/place.svg';
import mockData from '../../components/Carousel/Carousel';

const DetailPage = () => {
  const [modalActive, setModalActive] = useState(false);
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Find the details for the current place based on id
    const currentPlace = mockData.find(place => place.id === parseInt(id));
    setDetails(currentPlace);
  }, [id]);

  if (!details) {
    return null;
  }

  return (
    <div className={styles.container}>
      {/* Background image of the detail page */}
      <div className={styles.hero}>
        <img src={details.image} alt={details.city} className={styles.img}/>
        <Link to="/" className={styles.link}>
          <button className={styles.button}>
            <img src={leftarrow} alt="left arrow" />
            Go back
          </button>
        </Link>
      </div>

      <div className={styles.bottom_container}>
        {/* Name of the place and its location */}
        <div className={styles.place_name}>
          <h1 className={styles.title}>{details.nameOfThePlace}</h1>
          <div className={styles.place}>
            <img src={place} alt="place icon" />
            <p className={styles.city}>{details.city}, </p>
            <p className={styles.country}>{details.country}</p>
          </div>
        </div>

        {/* Description */}
        <div className={styles.description}>
          <h3>Description</h3>
          <p className={styles.text}>{details.description}</p>
        </div>

        {/* Reviews */}
        <div className={styles.review}>
          <h3>Reviews</h3>
          <div className={styles.profile}>
            <img className={styles.profile_image} src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp" alt="" />
            <p className={styles.name}>Anonymous</p>
          </div>
          <p className={styles.review}>That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat</p>
        </div>
        <button className={styles.bookBtn} onClick={() => setModalActive(true)}>Book now</button>
        <Modal active={modalActive} setActive={setModalActive}><Form active={modalActive} setActive={setModalActive} details={details}/></Modal>
      </div>

    </div>
  )
}

export default DetailPage;
