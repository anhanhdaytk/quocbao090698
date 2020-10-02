import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aproduct from './Aproduct';
class SliderProductSale extends Component{
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);    
    }
    next() {
        this.slider.slickNext();
      }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        var settings = {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
          <div>
            <Slider ref={c => (this.slider = c)} {...settings}>
                <div>
                    <div className="list-slider">
                        <Aproduct />
                    </div>
                    <div className="list-slider">
                        <Aproduct />
                    </div>
                </div>
                <div>
                    <div className="list-slider">
                        <Aproduct />
                    </div>
                    <div className="list-slider">
                        <Aproduct />
                    </div>
                </div>
                <div>
                    <div className="list-slider">
                        <Aproduct />
                    </div>
                    <div className="list-slider">
                        <Aproduct />
                    </div>
                </div>
                <div>
                    <div className="list-slider">
                        <Aproduct />
                    </div>
                    <div className="list-slider">
                        <Aproduct />
                    </div>
                </div>
                <div>
                    <div className="list-slider">
                            <Aproduct />
                    </div>
                    <div className="list-slider">
                        <Aproduct />
                    </div>
                </div>
            </Slider>
            <div className="buttons">
                <button className="button" onClick={this.next}>
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </button>
                <button className="button" onClick={this.previous}>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
          </div>
        );
    }
}
export default SliderProductSale;