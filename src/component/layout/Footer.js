import React from 'react';
function Footer(){
    return(
        <section className="container-fluid  footer">
            <div className="site-footer">
                <div className="container one-footer">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <span>KÊNH THÔNG TIN TỪ CHÚNG TÔI:</span>
                            <ul>
                                <li><i className="fa fa-facebook"></i></li>
                                <li><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-youtube"></i></li>
                                <li><i className="fa fa-twitter"></i></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <span>ĐĂNG KÝ NHẬN</span><br/>
                            <span>EMAIL TỪ CHÚNG TÔI</span>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <form className="form-inline ">
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"> <i className="fa fa-paper-plane"></i></span>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* 1 */}
                <div className="container two-footer">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <ul>
                                <li><img src="image/logo.png" /></li>
                                <li><p>Green shop được thành lập từ 8/2010 được sự tin tưởng của khách hàng trong suốt thời gian hoạt động đến nay cửa hàng ngày một phát triển.</p></li>
                                <li><i className="fa fa-mobile"></i>  Điện thoại : (84-4)66.558.868</li>
                                <li><i className="fa fa-envelope-o"></i>  Email : info@dkt.com.vn</li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-2">
                            <ul>
                                <li className="li-firt">THÔNG TIN KHÁCH HÀNG</li>
                                <li><i className="fa fa-angle-right"></i> Tài khoản của tôi</li>
                                <li><i className="fa fa-angle-right"></i> Sản phẩm yêu thích</li>
                                <li><i className="fa fa-angle-right"></i> Lịch sử mua hàng</li>
                                <li><i className="fa fa-angle-right"></i> Chính sách đổi trả</li>
                                <li><i className="fa fa-angle-right"></i> Góp ý khiếu nại</li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-2">
                            <ul>
                                <li className="li-firt">HỖ TRỢ DỊCH VỤ</li>
                                <li><i className="fa fa-angle-right"></i> Hệ thống cửa hàng</li>
                                <li><i className="fa fa-angle-right"></i> Hướng dẫn mua hàng</li>
                                <li><i className="fa fa-angle-right"></i> Hướng dẫn thanh toán</li>
                                <li><i className="fa fa-angle-right"></i> Tích điểm đổi quà</li>
                                <li><i className="fa fa-angle-right"></i> Câu hỏi thường gặp</li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-2">
                            <ul>
                                <li className="li-firt">CHÍNH SÁCH ƯU ĐÃI</li>
                                <li><i className="fa fa-angle-right"></i> Chính sách giao hàng</li>
                                <li><i className="fa fa-angle-right"></i> Chính sách đổi trả sản phẩm</li>
                                <li><i className="fa fa-angle-right"></i> Chính sách bảo hành</li>
                                <li><i className="fa fa-angle-right"></i> Giới thiệu sản phẩm mới</li>
                                <li><i className="fa fa-angle-right"></i> Chính sách trả góp</li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-2">
                            <ul>
                                <li className="li-firt">TIN TỨC</li>
                                <li><i className="fa fa-angle-right"></i> Tin mới</li>
                                <li><i className="fa fa-angle-right"></i> Khuyến mãi</li>
                                <li><i className="fa fa-angle-right"></i> Tuyển dụng</li>
                                <li><i className="fa fa-angle-right"></i> Dowload</li>
                                <li><i className="fa fa-angle-right"></i> Tags</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="container three-footer">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <ul>
                                <li>sitemap</li>
                                <li>Danh mục sản phẩm</li>
                                <li>Hợp tác</li>
                                <li>Thông tin liên hệ</li>
                                <li>Câu hỏi thường gặp</li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 ul-right">
                            <ul>
                                <li><i className="fa fa-cc-visa"></i></li>
                                <li><i className="fa fa-cc-mastercard"></i></li>
                                <li><i className="fa fa-cc-paypal"></i></li>
                                <li><i className="fa fa-cc-discover"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* 3 */}       
                <div className="container-fluid four-footer">
                    <div className="container">
                        <span>Thiết kế bởi Bizweb <i className="fa fa-copyright"></i></span>
                    </div>
                </div>
                {/* 4 */}
            </div>
        </section>
    )
}
export default Footer;