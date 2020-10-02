import React, { Component }  from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



class Ssliderr extends Component{
    render() {
        const settings = {
          dots: true,
          infinite: true,
          autoplay: true,
          arrows: false,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
        return(
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div className="container-fluid slider slider1">
                        <div className="container">
                            <div className="row text-center">
                                <div>
                                    <h1 className="h1-one">GREEN SHOP</h1>
                                    <h1 className="h1-two">CHO THUÊ CÂY CẢNH TẾT 2021</h1>
                                    <i className="i-three">( Miễn phí vận chuyển cho những đơn hàng có giá trị trên 5.000.000 đ )</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid slider slider2">
                        <div className="container">
                            <div className="row text-center">
                                <div>
                                    <h1 className="h1-one">GREEN SHOP</h1>
                                    <h1 className="h1-two">CHO THUÊ CÂY CẢNH TẾT 2021</h1>
                                    <i className="i-three">( Miễn phí vận chuyển cho những đơn hàng có giá trị trên 5.000.000 đ )</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid slider slider3">
                        <div className="container">
                        <div className="row text-center">
                                <div>
                                    <h1 className="h1-one">GREEN SHOP</h1>
                                    <h1 className="h1-two">CHO THUÊ CÂY CẢNH TẾT 2021</h1>
                                    <i className="i-three">( Miễn phí vận chuyển cho những đơn hàng có giá trị trên 5.000.000 đ )</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}
export default Ssliderr;