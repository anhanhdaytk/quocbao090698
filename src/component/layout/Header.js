import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';

function Header(){
    const qty = useSelector(state => state.cart.listCart);
    const ListCart = JSON.parse(localStorage.getItem('listCart'));
    const handleQtyCart = () =>{
        if(ListCart){   
            // let cartlength = Object.keys(ListCart).length         
            return(
                <span> {ListCart.length} sản phẩm</span>
            )
        }else{
            return(
                <span> 0 sản phẩm</span>
            )
        }
    }
    const handleQtyCartMini = () =>{
        if(qty){   
            // let cartlength = Object.keys(ListCart).length         
            return(
                <sup>{qty.length}</sup>
            )
        }else{
            return(
                <sup>0</sup>
            )
        }
    }
    return(
        <section>
            <div className="container-fluid header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <ul className="header-time">
                                <li><i className="fa fa-clock-o"></i></li>
                                <li>Open time: 8:00 - 18:00</li>
                                <li>Monday - Sunday</li>
                            </ul>
                            <ul className="icon-social">
                                <li className="social-header"><i className="fa fa-facebook"></i></li>
                                <li className="social-header"><i className="fa fa-twitter"></i></li>
                                <li className="social-header"><i className="fa fa-facebook"></i></li>
                                <li className="social-header"><i className="fa fa-twitter"></i></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <div className="account">
                                <Link to="/signin"><i className="fa fa-user"></i> Đăng nhập</Link>
                                <Link to="/signup"><i className="fa fa-user-plus"></i> Đăng ký</Link>
                            </div>
                        </div>
                    </div>  
                </div>                
            </div>
            {/* top */}
            <div className="container-fluid content-header">
                <div className="container">
                    <div className="row">
                        <div className=" col-md-12 col-lg-6">
                            <img className="logo" src="image/logo.png"/>
                            <img className="hidden-beside" src="image/beside_logo.png"/>
                        </div>
                        <div className="col-4 header-phone-search">
                            <div className="header-phone">
                                <i className="fa fa-phone"></i>
                                <span> HỔ TRỢ  (04) 6674 2332 - (04) 3786 8904</span>
                            </div>
                            <div className="header-search">
                                <form className="form-inline ">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder=" Tìm kiếm..."  />
                                        <div className="input-group-prepend">   
                                        <span className="input-group-text" id="basic-addon1"> <i className="fa fa-search"></i></span>
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-2 cart">
                            <Link className="link-cart" to="/cart">
                                <i className="fa fa-shopping-basket" ></i>
                                {handleQtyCart()}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* content */}
            <div className="container-fluid bottom-header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light menu">
                        {/* <Link class="navbar-brand menu" to="#"><i class="fa fa-bars"></i></Link> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span><i className="fa fa-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">TRANG CHỦ<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">GIỚI THIỆU</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle menu-a" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SẢN PHẨM
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="#"><i className="fa fa-caret-right"></i>Trưng bày văn phòng</Link>
                                    <Link className="dropdown-item" to="#"><i className="fa fa-caret-right"></i>Trưng bày phòng khách</Link>
                                    {/* <div class="dropdown-divider"></div> */}
                                    <Link className="dropdown-item" to="#"><i className="fa fa-caret-right"></i>Sản phẩm ưu đãi</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle menu-a" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SẢN PHẨM MỚI
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="#"><i className="fa fa-caret-right"></i>Trưng bày văn phòng</Link>
                                    <Link className="dropdown-item" to="#"><i className="fa fa-caret-right"></i>Trưng bày phòng khách</Link>
                                    {/* <div class="dropdown-divider"></div> */}
                                    <Link className="dropdown-item" to="#"><i className="fa fa-caret-right"></i>Sản phẩm ưu đãi</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">TIN TỨC</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">LIÊN HỆ</Link>
                                </li>
                            </ul>
                        </div>
                        {/* hiển thị ở màn hình < 992px */}
                        <div className="menu-div hidden-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item hidden-li">
                                    <Link className="nav-link" to="/signin"><i className="fa fa-user"></i></Link>
                                </li>
                                <li className="nav-item hidden-li">
                                    <Link className="nav-link" to="/signup"><i className="fa fa-user-plus"></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#"><i className="fa fa-search"></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart"><i className="fa fa-shopping-basket" >{handleQtyCartMini()}</i></Link>
                                </li>
                            </ul>
                        </div>
                        {/*  */}
                        
                    </nav>
                </div>
            </div>
        </section>
    )
}
export default withRouter(Header);