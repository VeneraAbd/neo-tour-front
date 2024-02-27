import styles from "./DetailPage.module.css";
import leftarrow from "../../assets/leftarrow.svg";
import place from "../../assets/place.svg";
import { Link } from "react-router-dom";
import mount from "../../assets/mount.jpeg";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const DetailPage = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.container}>
      {/* background image of the detail page */}
      <div className={styles.hero}>
        <img src={mount} alt="mount Fuji" className={styles.img}/>
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
          <h1 className={styles.title}>Mount Fuji</h1>
          <div className={styles.place}>
            <img src={place} alt="place icon" />
            <p className={styles.city}>Honshu, </p>
            <p className={styles.country}>Japan</p>
          </div>
        </div>

        {/* Description */}
        <div className={styles.description}>
          <h3>Description</h3>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget amet viverra eget fames rhoncus. Eget enim venenatis enim porta egestas malesuada et. Consequat mauris lacus euismod montes.</p>
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
        <Modal active={modalActive} setActive={setModalActive}><p>Hello, it's me!</p></Modal>
      </div>

    </div>
  )
}

export default DetailPage