import React from 'react';
import { Carousel as AntCarousel, Image } from 'antd';

import styles from './Carousel.module.css';
import carouselImage1 from "../../assets/images/carousel_1.jpg";
import carouselImage2 from "../../assets/images/carousel_2.jpg";
import carouselImage3 from "../../assets/images/carousel_3.jpg";

const Carousel: React.FC = () => {
  return (
      <AntCarousel autoplay className={styles.slider}>
        <Image src={carouselImage1} />
        <Image src={carouselImage2} />
        <Image src={carouselImage3} />
      </AntCarousel>
  );
};

export default Carousel;