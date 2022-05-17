import React, { Component } from 'react';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselComponent } from 'react-responsive-carousel';


//export default class NextJsCarousel extends Component {


//THIS IS JUST A NON FUNCTIONAL EXAMPLE

export default function Carousel({ carousel })  {
     console.log(carousel)
    // console.log("**#*")
    // console.log(Array.isArray(carousel))
    // console.log("***")

  return (
    <section>
      <h4>Carousel</h4>
     
      {Object.keys(carousel.carouselFields).map((index)  => (
          <CarouselComponent>
            <div key={index} className="ml-4 font-normal"> 
              <img src={carousel.carouselFields[index].sourceUrl} />
              <p className="legend">{carousel.carouselFields[index].title}</p>
            </div>
          </CarouselComponent>
        ))}
         
    </section>
  )
}