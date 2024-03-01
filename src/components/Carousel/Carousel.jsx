import { useCallback, useRef } from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";
import Cards from "../Cards/Cards";

const Carousel = ({data}) => {
  const sliderRef = useRef(null);
 
  const carouselContent = data?.slice(0, 10) || [];
  console.log(data)
  const dotsFn = useCallback(
    (dots) => (
      <>
        <div className={styles.controls}>
          <button
            className={styles.arrowButton}
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <img src={prev} alt="show previous" />
          </button>
          <ul> {dots} </ul>
          <button
            className={styles.arrowButton}
            onClick={() => sliderRef.current?.slickNext()}
          >
            <img src={next} alt="show next" />
          </button>
        </div>
      </>
    ),
    [sliderRef.current]
  );

  return (
      <Slider
        ref={sliderRef}
        autoplay={true}
        autoplaySpeed={5000}
        arrows={false}
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={4}
        slidesToScroll={4}
        appendDots={dotsFn}
        customPaging={() => <button className={styles.dotButton} />}
        responsive={[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ]}
      >
        {carouselContent.map((el) => ( 
          <div className={styles.cardWrapper}>
            <Cards data={carouselContent}/>
             <img src={el.image} alt="Card" className={styles.cardImage} /> 
          </div>
        ))}
      </Slider>
  );
};

export default Carousel;
