import classes from './Content1.module.css'

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content1.module.css'; 
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className={classes.slide_image} src='/images/main/backgroundimg1.jpg' alt='배경화면' />
        <Carousel.Caption>
          <h3>푸른 하늘 구름마켓</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={classes.slide_image} src='/images/main/backgroundimg2.jpg' alt='배경화면' />
        <Carousel.Caption>
          <h3>오늘의 베스트 상품</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className={classes.slide_image} src='/images/main/backgroundimg3.jpg' alt='배경화면' />
        <Carousel.Caption>
          <h3>추석 배송 안내</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;