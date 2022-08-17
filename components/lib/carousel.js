import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
  
export default class NextJsCarousel extends Component {
   render() {
        // {console.log("*@**@**@**@*");console.log(this.props.carouselSlider.carouselFields)//How to get value that comes as props
        // }

        const slider = Object.keys(this.props.carouselSlider.carouselFields);
        const sliderFields = this.props.carouselSlider.carouselFields;

        return (
            <div>

              {/* {console.log(this.props.carouselSlider.carouselFields)} */}
              {/*those are some available properties */}
              <Carousel axis={'horizontal'} infiniteLoop={true} width={'50%'} showArrows={true} _onChange={''} _onClickItem={''} _onClickThumb={''}>
              {slider.map((fields,index)  => (
                  <div key={`car_${index}`} >
                      {/* {console.log(index)}
                      {console.log(sliderFields[fields].title)} */}
                      <img  src={ sliderFields[fields].sourceUrl } alt={ sliderFields[fields].altText }/>
                      <p className="legend">{ sliderFields[fields].title }</p>
                  </div>
                 ))} 
              </Carousel>
            </div>
        );
    }
};