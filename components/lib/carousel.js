import React, { Component } from 'react';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselComponent } from 'react-responsive-carousel';

export default function Carousel({ carousel }) {
    console.log(carousel)
    console.log("***")
  return (
    <section>
      <h4>Carousel</h4>
      <CarouselComponent>
      {carousel.map((tag, index) => (
            <span key={index} className="ml-4 font-normal">
              {node.sourceUrl}
            </span>
          ))}
         </CarouselComponent>
    </section>
  )
}