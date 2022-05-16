import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
  
export default class NextJsCarousel extends Component {
   render() {
        // {console.log("*@**@**@**@*");console.log(this.props.carouselSlider.carouselFields)//How to get value that comes as props
        // }

        const slider = Object.keys(this.props.carouselSlider.carouselFields);
        const sliderFields = this.props.carouselSlider.carouselFields;

        return (
            <div>

              <h2>Homepage Carousel</h2>
              {console.log(this.props.carouselSlider.carouselFields)}
              <Carousel>
              {slider.map((fields,index)  => (
                  <div key={index} >
                      {console.log(sliderFields[fields])}
                      {console.log(sliderFields[fields].title)}
                      <img  src={ sliderFields[fields].sourceUrl } alt={ sliderFields[fields].altText }/>
                      <p className="legend">{ sliderFields[fields].title }</p>
                  </div>
                 ))} 
              </Carousel>
            </div>
        );
    }
};