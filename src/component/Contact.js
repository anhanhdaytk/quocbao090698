import React from 'react';
import { Link } from 'react-router-dom';
function Contact(){
    return(
        <section className="section-contact">
            <div className="section-contact__map">
                <iframe className="local" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2797540092406!2d108.20346501468394!3d16.050966288892237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219bbac29a89b%3A0xd1216d40b4bca153!2zMTUwIER1eSBUw6JuLCBIw7JhIFRodeG6rW4gTmFtLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1601268042393!5m2!1svi!2s"></iframe>
            </div>
            <div className="container">
                <div className="row">
                <div className="section-signin__wrap--left col-sm-12 col-md-12 col-lg-6">
                            <h5 className="title">THÔNG TIN LIÊN HỆ</h5>
                            <label className="title-input">Họ và Tên<span className="item-input">*</span>:</label>
                            <div class="form-group">
                                <input className="inputt" type="text" name="name"/>
                            </div>
                            <label className="title-input">Địa chỉ email<span className="item-input">*</span>:</label>
                            <div class="form-group">
                                <input className="inputt" type="email" name="email"/>
                            </div>
                            <label className="title-input">Số điện thoại<span className="item-input">*</span>:</label>
                            <div class="form-group">
                                <input className="inputt" type="phone" name="phone"/>
                            </div>  
                            <label className="title-input">Bình luận<span className="item-input">*</span>:</label>
                            
                        </div>
                        {/* right */}
                        <div className="section-signin__wrap--right col-sm-12 col-md-12 col-lg-6">
                            <img src="image/logo.png"/>
                            <p className="content">Đăng ký tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn ! Ngoài ra còn có rất nhiều chính sách ưu đãi cho các thành viên citybike</p>
                            <button className="btn btn-success btn-signup"><Link to="/signup" className="btn-text">ĐĂNG KÝ</Link></button>
                        </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;