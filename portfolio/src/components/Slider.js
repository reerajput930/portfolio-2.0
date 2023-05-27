import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Slider({ slides }){
  return (
    <Carousel  >
      {slides.map((slide, index) => (
        <div key={index} >
          {slide}
        </div>
      ))}
    </Carousel>
  );
};

